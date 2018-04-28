using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.MasterData;
using MG.Jarvis.Core.Model.RatesCategory;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class RatesCategoryRepository : IRatesCategory
    {
        #region Private Variables
        private IConnection<Market> iMarketConnectionLibrary;
        private IConnection<RateCategoryList> iRateCategoryListLibrary;
        private IConnection<RatePlans> iRatePlansLibrary;
        private IConnection<RateCategory> iRateCategoryLibrary;
        #endregion Private Variables

        #region settings
        public RatesCategoryRepository(IConnection<Market> iMarketConnectionLibrary, IConnection<RateCategoryList> iRateCategoryListLibrary, IConnection<RatePlans> iRatePlansLibrary, IConnection<RateCategory> iRateCategoryLibrary)
        {
            this.iMarketConnectionLibrary = iMarketConnectionLibrary;
            this.iRatePlansLibrary = iRatePlansLibrary;
            this.iRateCategoryListLibrary = iRateCategoryListLibrary;
            this.iRateCategoryLibrary = iRateCategoryLibrary;
        }
        #endregion settings

        /// <summary>
        /// Retrun all Markets
        /// </summary>
        /// <returns>Task<BaseResult<List<Market>>></returns>
        public async Task<BaseResult<List<Market>>> GetMarkets()
        {
            return await iMarketConnectionLibrary.GetListByPredicate(id => id.IsActive == true).ConfigureAwait(false);
        }
        /// <summary>
        /// Get the list of rate categories
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns>Task<BaseResult<List<RateCategory>>></returns>
        public async Task<BaseResult<List<RateCategoryList>>> GetRateCategory(int hotelId)
        {
            BaseResult<List<RateCategoryList>> responseModel = new BaseResult<List<RateCategoryList>>();
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.HotelId, hotelId);
            responseModel = await iRateCategoryListLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetRateCategoryList, paramCollection);
            return responseModel;
        }

        /// <summary>
        /// Get Active Rate Categories by HotelId
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns>List of RateCategory</returns>
        public async Task<BaseResult<List<RateCategory>>> GetActiveRateCategory(int hotelId)
        {
            return await iRateCategoryLibrary.GetListByPredicate(id => id.HotelId == hotelId && id.IsActive && !id.IsDeleted).ConfigureAwait(false);
        }
        /// <summary>
        /// Get rate category by Id
        /// </summary>
        /// <param name="rateCategoryById"></param>
        /// <returns> List of RateCategory </returns>
        public async Task<BaseResult<List<RateCategory>>> GetRateCategoryById(int rateCategoryById)
        {
            return await iRateCategoryLibrary.GetListByPredicate(id => id.Id == rateCategoryById && id.IsDeleted == false).ConfigureAwait(false);
        }

        /// <summary>
        /// Get rate plans by rateCategoryById
        /// </summary>
        /// <param name="rateCategoryById"></param>
        /// <returns>List<RatePlans></returns>
        public async Task<BaseResult<List<RatePlans>>> GetRatePlansById(int rateCategoryById)
        {
            return await iRatePlansLibrary.GetListByPredicate(id => id.RateCategoryId == rateCategoryById).ConfigureAwait(false);
        }

        /// <summary>
        /// Get Active RatePlansBy rateCategoryById
        /// </summary>
        /// <param name="rateCategoryById"></param>
        /// <returns>List<RatePlans></returns>
        public async Task<BaseResult<List<RatePlans>>> GetActiveRatePlansByRateCategoryId(int rateCategoryById)
        {
            return await iRatePlansLibrary.GetListByPredicate(id => id.RateCategoryId == rateCategoryById && id.IsActive && !id.IsDeleted).ConfigureAwait(false);
        }

        /// <summary>
        /// Add/Edit RateCategory
        /// </summary>
        /// <param name="rateCategoryViewModel"></param>
        /// <returns>List of RatePlans</returns>
        public async Task<BaseResult<RateCategory>> SaveAndUpdateRateCategory(RateCategoryViewModel rateCategoryViewModel, string userName)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();

            if (rateCategoryViewModel.ObjectState == ObjectState.Added)
            {
                result = await AddRateCategory(rateCategoryViewModel, userName).ConfigureAwait(false);
            }
            else if (rateCategoryViewModel.ObjectState == ObjectState.Modified)
            {
                result = await UpdateRateCategory(rateCategoryViewModel, userName).ConfigureAwait(false);
            }
            else if (rateCategoryViewModel.ObjectState == ObjectState.Unchanged)
            {
                foreach (var item in rateCategoryViewModel.RoomTypeList)
                {
                    if (item.ObjectState == ObjectState.Modified)
                    {
                        result = await UpdateRatePlans(item, userName).ConfigureAwait(false);
                    }
                    else if (item.ObjectState == ObjectState.Added)//If new room is added
                    {
                        result = await AddRatePlans(rateCategoryViewModel, userName).ConfigureAwait(false);
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// Method to Add RateCategory
        /// </summary>
        /// <param name="rateCategoryViewModel"></param>
        /// <param name="userName"></param>
        /// <returns>RateCategory</returns>
        public async Task<BaseResult<RateCategory>> AddRateCategory(RateCategoryViewModel rateCategoryViewModel, string userName)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();

            //Map Rate Category
            var rateCategoryResult = RatesCategoryRequestMapper.MapToRateCategoryModel(rateCategoryViewModel, userName);

            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.Name, rateCategoryResult.Name);
            paramCollection.Add(Constants.StoredProcedureParameters.HotelId, rateCategoryResult.HotelId);
            paramCollection.Add(Constants.StoredProcedureParameters.MarketId, rateCategoryResult.MarketId);
            paramCollection.Add(Constants.StoredProcedureParameters.ChildrenAndExtraBedPoliciesId, rateCategoryResult.ChildrenAndExtraBedPoliciesId);
            paramCollection.Add(Constants.StoredProcedureParameters.CancellationPolicyId, rateCategoryResult.CancellationPolicyId);
            paramCollection.Add(Constants.StoredProcedureParameters.RatePlanInfo, rateCategoryResult.RatePlanInfo);
            paramCollection.Add(Constants.StoredProcedureParameters.MealId, rateCategoryResult.MealId);
            paramCollection.Add(Constants.StoredProcedureParameters.IsStatic, rateCategoryResult.IsStatic);
            paramCollection.Add(Constants.StoredProcedureParameters.IsActive, rateCategoryResult.IsActive);
            paramCollection.Add(Constants.StoredProcedureParameters.IsDeleted, rateCategoryResult.IsDeleted);
            paramCollection.Add(Constants.StoredProcedureParameters.CreatedBy, rateCategoryResult.CreatedBy);
            paramCollection.Add(Constants.StoredProcedureParameters.CreatedDate, rateCategoryResult.CreatedDate);
            paramCollection.Add(Constants.StoredProcedureParameters.UpdatedBy, rateCategoryResult.UpdatedBy);
            paramCollection.Add(Constants.StoredProcedureParameters.UpdatedDate, rateCategoryResult.UpdatedDate);

            //Insert Rate Category first
            var insertResult = await iRateCategoryLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.InsertRateCategory, paramCollection).ConfigureAwait(false);

            if (insertResult.IsError || insertResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = insertResult.ExceptionMessage;
                return result;
            }
            else if (insertResult.Result.First().Id > default(long))
            {
                //Assign Rate Category Id
                rateCategoryViewModel.Id = insertResult.Result.First().Id;

                //Add Rate Plans
                result = await AddRatePlans(rateCategoryViewModel, userName).ConfigureAwait(false);
            }
            return result;
        }

        /// <summary>
        /// Method to Update RateCategory
        /// </summary>
        /// <param name="rateCategoryViewModel"></param>
        /// <param name="userName"></param>
        /// <returns>RateCategory</returns>
        public async Task<BaseResult<RateCategory>> UpdateRateCategory(RateCategoryViewModel rateCategoryViewModel, string userName)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();

            //Fetch rate category by id
            var rateCategoryResult = await iRateCategoryLibrary.GetListByPredicate(id => id.Id == rateCategoryViewModel.Id && !id.IsDeleted).ConfigureAwait(false);

            if (rateCategoryResult.Result != null && rateCategoryResult.Result.Any())
            {
                //Map Rate Category
                var updateRateCategory = RatesCategoryRequestMapper.AutoMapperRateCategory(rateCategoryViewModel, rateCategoryResult.Result.First(), userName);

                var updateResult = await iRateCategoryLibrary.UpdateEntityByDapper(updateRateCategory).ConfigureAwait(false);
                if (updateResult.IsError || updateResult.ExceptionMessage != null)
                {
                    result.IsError = true;
                    result.ExceptionMessage = updateResult.ExceptionMessage;
                    return result;
                }
                else if (updateResult.Result)//If rate category updated successfully update rateplans..
                {
                    foreach (var item in rateCategoryViewModel.RoomTypeList)
                    {
                        if (item.ObjectState == ObjectState.Modified)
                        {
                            result = await UpdateRatePlans(item, userName).ConfigureAwait(false);
                        }
                        else if (item.ObjectState == ObjectState.Added)//If new room is added
                        {
                            result = await AddRatePlans(rateCategoryViewModel, userName).ConfigureAwait(false);
                        }
                        else
                        {
                            result.Result.Id = rateCategoryViewModel.Id;
                        }
                    }
                }
            }
            else
            {
                result.IsError = true;
                result.ErrorCode = (int)coreHelper.Constants.ErrorCodes.NoRateCategoryOfID;
                result.Message = string.Format(coreHelper.Constants.ErrorMessage.NoRateCategoryOfID, rateCategoryViewModel.Id);
                return result;
            }

            return result;
        }

        /// <summary>
        /// Method to Add RatePlan
        /// </summary>
        /// <param name="rateCategoryViewModel"></param>
        /// <param name="userName"></param>
        /// <returns>RateCategory</returns>
        public async Task<BaseResult<RateCategory>> AddRatePlans(RateCategoryViewModel rateCategoryViewModel, string userName)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();

            //Map RatePlans
            var ratePlansResult = RatesCategoryRequestMapper.MapToRatePlansModel(rateCategoryViewModel, userName);
            foreach (var item in ratePlansResult)
            {
                var rateplan = await iRatePlansLibrary.GetListByPredicate(x => x.RateCategoryId == item.RateCategoryId && x.RoomId == item.RoomId && x.IsActive).ConfigureAwait(false);
                if (rateplan.Result == null || !rateplan.Result.Any())
                {
                    //Insert RatePlans
                    var rateplanInsertResult = await iRatePlansLibrary.InsertEntity(item).ConfigureAwait(false);
                    if (rateplanInsertResult.IsError || rateplanInsertResult.ExceptionMessage != null)
                    {
                        result.IsError = true;
                        result.ExceptionMessage = rateplanInsertResult.ExceptionMessage;
                        return result;
                    }
                    else if (rateplanInsertResult.Result > default(long))
                    {
                        result.Result.Id = rateCategoryViewModel.Id;
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// Method to update RatePlan
        /// </summary>
        /// <param name="ratePlansViewModel"></param>
        /// <param name="userName"></param>
        /// <returns>RateCategory</returns>
        public async Task<BaseResult<RateCategory>> UpdateRatePlans(RatePlansViewModel ratePlansViewModel, string userName)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();

            //Fetch Rate plan by Id
            var ratePlansResult = await iRatePlansLibrary.GetListByPredicate(id => id.Id == ratePlansViewModel.Id && id.IsActive).ConfigureAwait(false);

            if (ratePlansResult.Result != null && ratePlansResult.Result.Any())
            {
                //Map Rate Plans
                var updateRatePlans = RatesCategoryRequestMapper.AutoMapperRatePlans(ratePlansViewModel, ratePlansResult.Result.First(), userName);
                // Update Rate plan
                var updateRatePlansResult = await iRatePlansLibrary.UpdateEntityByDapper(updateRatePlans).ConfigureAwait(false);
                if (updateRatePlansResult.IsError || updateRatePlansResult.ExceptionMessage != null)
                {
                    result.IsError = true;
                    result.ExceptionMessage = updateRatePlansResult.ExceptionMessage;
                    return result;
                }
                //set result
                result.Result.Id = updateRatePlans.RateCategoryId;
            }
            else
            {
                result.IsError = true;
                result.ErrorCode = (int)coreHelper.Constants.ErrorCodes.NoRatePlanOfID;
                result.Message = string.Format(coreHelper.Constants.ErrorMessage.NoRatePlanOfID, ratePlansViewModel.Id);
                return result;
            }
            return result;
        }

        /// <summary>
        /// Delete Rate Category
        /// </summary>
        /// <param name="rateCategoryId"></param>
        /// <returns>RateCategory</returns>
        public async Task<BaseResult<RateCategory>> DeleteRateCategory(int rateCategoryId)
        {
            BaseResult<RateCategory> result = new BaseResult<RateCategory>();
            result.Result = new RateCategory();
            var rateCategoryResult = await iRateCategoryLibrary.GetListByPredicate(id => id.Id == rateCategoryId && id.IsActive && !id.IsDeleted).ConfigureAwait(false);
            if (rateCategoryResult.Result != null && rateCategoryResult.Result.Any())
            {
                var rateCategoryToUpdate = rateCategoryResult.Result.First();
                rateCategoryToUpdate.IsDeleted = true;
                rateCategoryToUpdate.IsActive = false;

                var updateResult = await iRateCategoryLibrary.UpdateEntityByDapper(rateCategoryToUpdate).ConfigureAwait(false);
                if (updateResult.IsError || updateResult.ExceptionMessage != null)
                {
                    result.IsError = true;
                    result.ExceptionMessage = updateResult.ExceptionMessage;
                    return result;
                }
                result.Result.Id = rateCategoryId;
            }
            else
            {
                result.IsError = true;
                result.ErrorCode = (int)coreHelper.Constants.ErrorCodes.NoRateCategoryOfID;
                result.Message = string.Format(coreHelper.Constants.ErrorMessage.NoRateCategoryOfID, rateCategoryId);
                return result;
            }
            return result;
        }
    }
}
