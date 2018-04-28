using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Helper.Mapper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Policies;
using MG.Jarvis.Core.Model.Room;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class PoliciesRepository : IPolicies
    {
        #region private variables
        private IConnection<ChildrenAndExtraBedPolicies> iChildrenAndExtraBedPoliciesConnectionLibrary;
        private IConnection<MaxChildAndExtraBedPerRoom> iMaxChildAndExtraBedPerRoomConnectionLibrary;
        private IConnection<CancellationPolicyType> iCancellationPolicyTypeConnectionLibrary;
        private IConnection<CancellationCharges> iCancellationChargesConnectionLibrary;
        private IConnection<CancellationPolicy> iCancellationPolicyConnectionLibrary;
        private IConnection<CancellationPolicyClauses> iCancellationPolicyClausesConnectionLibrary;
        private IConnection<Room> iRoomLibrary;
        #endregion private variables

        public PoliciesRepository(IConnection<ChildrenAndExtraBedPolicies> iChildrenAndExtraBedPoliciesConnectionLibrary,
            IConnection<MaxChildAndExtraBedPerRoom> iMaxChildAndExtraBedPerRoomConnectionLibrary,
            IConnection<CancellationCharges> iCancellationChargesLibrary,
            IConnection<CancellationPolicy> iCancellationPolicyLibrary,
            IConnection<CancellationPolicyClauses> iCancellationPolicyClausesLibrary,
            IConnection<CancellationPolicyType> iCancellationPolicyTypeLibrary, IConnection<Room> iRoomLibrary)
        {
            this.iChildrenAndExtraBedPoliciesConnectionLibrary = iChildrenAndExtraBedPoliciesConnectionLibrary;
            this.iMaxChildAndExtraBedPerRoomConnectionLibrary = iMaxChildAndExtraBedPerRoomConnectionLibrary;
            this.iCancellationChargesConnectionLibrary = iCancellationChargesLibrary;
            this.iCancellationPolicyConnectionLibrary = iCancellationPolicyLibrary;
            this.iCancellationPolicyClausesConnectionLibrary = iCancellationPolicyClausesLibrary;
            this.iCancellationPolicyTypeConnectionLibrary = iCancellationPolicyTypeLibrary;
            this.iRoomLibrary = iRoomLibrary;
        }


        /// <summary>
        /// Retruns Children And Extra Bed Policies for specific hotelId
        /// </summary>
        /// <returns>ChildrenAndExtraBedPolicies</returns>
        public async Task<BaseResult<List<ChildrenAndExtraBedPolicies>>> GetChildrenAndExtraBedPolicyListingByHotelId(int hotelId)
        {
            return await iChildrenAndExtraBedPoliciesConnectionLibrary.GetListByPredicate(id => id.HotelId == hotelId && id.IsActive && !id.IsDeleted).ConfigureAwait(false);
        }

        /// <summary>
        /// Retruns MaxChildAndExtraBedPerRoom for specific hotelId
        /// </summary>
        /// <returns>MaxChildAndExtraBedPerRoom</returns>
        public async Task<BaseResult<List<MaxChildAndExtraBedPerRoom>>> GetMaxChildAndExtraBedPerRoom(int hotelId)
        {
            BaseResult<List<MaxChildAndExtraBedPerRoom>> childrenAndExtraBedPoliciesList = new BaseResult<List<MaxChildAndExtraBedPerRoom>>();
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add("@hotelid", hotelId);
            childrenAndExtraBedPoliciesList = await iMaxChildAndExtraBedPerRoomConnectionLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetChildrenAndExtraBedPolicyByHotelId, paramCollection).ConfigureAwait(false);
            return childrenAndExtraBedPoliciesList;
        }

        /// <summary>
        /// Returns list of rooms by id
        /// </summary>
        /// <param name="roomId"></param>
        /// <returns>List<Room></returns>
        public async Task<BaseResult<List<Room>>> GetRoomsById(List<MaxChildAndExtraBedPerRoomViewModel> maxChildAndExtraBedPerRoomViewModelList)
        {
            BaseResult<List<Room>> roomListResult = new BaseResult<List<Room>>();
            List<Room> roomList = new List<Room>();
            foreach (var item in maxChildAndExtraBedPerRoomViewModelList)
            {
                var room = await iRoomLibrary.GetListByPredicate(x => x.Id == item.RoomId && x.IsActive && x.IsDeleted == false).ConfigureAwait(false);
                roomList.Add(room.Result.First());
            }
            roomListResult.Result = roomList;
            return roomListResult;
        }

        /// <summary>
        /// Creates new hotel meal or edits the hotel meal
        /// </summary>
        /// <param name="hotelMealRequest"></param>
        /// <param name="objectState"></param>
        /// <param name="userName"></param>
        /// <returns>Task<BaseResult<long>></returns>
        public async Task<BaseResult<ChildrenAndExtraBedPolicies>> SaveAndUpdateChildAndExtraBedPolicy(ChildrenAndExtraBedPolicies childrenAndExtraBedPoliciesRequest, ObjectState? objectState)
        {
            BaseResult<ChildrenAndExtraBedPolicies> result = new BaseResult<ChildrenAndExtraBedPolicies>();
            result.Result = new ChildrenAndExtraBedPolicies();
            if (objectState == ObjectState.Added)
            {
                var insertResult = await iChildrenAndExtraBedPoliciesConnectionLibrary.InsertEntity(childrenAndExtraBedPoliciesRequest).ConfigureAwait(false);
                if (insertResult == null)
                {
                    return result = null;
                }
                else if (insertResult.IsError || insertResult.ExceptionMessage != null)
                {
                    result.IsError = true;
                    result.ExceptionMessage = insertResult.ExceptionMessage;
                    return result;
                }

                result.Result.Id = (int)insertResult.Result;
                return result;
            }
            else if (objectState == ObjectState.Modified)
            {
                var childrenAndExtraBedPoliciesResult = await iChildrenAndExtraBedPoliciesConnectionLibrary.GetListByPredicate(x => x.HotelId == childrenAndExtraBedPoliciesRequest.HotelId && x.IsActive).ConfigureAwait(false);
                if (childrenAndExtraBedPoliciesResult.Result.Count > 0 && childrenAndExtraBedPoliciesResult != null)
                {
                    var updatedChildrenAndExtraBedPolicy = PoliciesRequestMapper.AutoMapperChildrenAndExtraBedPolicy(childrenAndExtraBedPoliciesRequest, childrenAndExtraBedPoliciesResult.Result.First());

                    var updateResult = await iChildrenAndExtraBedPoliciesConnectionLibrary.UpdateEntityByDapper(updatedChildrenAndExtraBedPolicy).ConfigureAwait(false);
                    if (updateResult == null)
                    {
                        return result = null;
                    }
                    else if (updateResult.IsError || updateResult.ExceptionMessage != null)
                    {
                        result.IsError = true;
                        result.ExceptionMessage = updateResult.ExceptionMessage;
                        return result;
                    }
                    else if (updateResult.Result)
                    {
                        result.Result.Id = childrenAndExtraBedPoliciesRequest.Id;
                    }
                    return result;
                }
                else
                {
                    result.IsError = true;
                    result.ErrorCode = (int)coreHelper.Constants.ErrorCodes.NoChildrenAndExtraBedPolicyOfID;
                    result.Message = string.Format(coreHelper.Constants.ErrorMessage.NoChildrenAndExtraBedPolicyOfID, childrenAndExtraBedPoliciesRequest.Id);
                    return result;
                }
            }
            return result;
        }

        public async Task<BaseResult<bool>> UpdateRoomList(List<Room> roomList)
        {
            return await iRoomLibrary.UpdateEntityList(roomList).ConfigureAwait(false);
        }
        /// <summary>
        /// Get CancellationCharges
        /// </summary>
        /// <returns>List of cancellation charges</returns>
        public async Task<BaseResult<List<CancellationCharges>>> GetCancellationCharges()
        {
            var cancellationCharges = await iCancellationChargesConnectionLibrary.GetListByPredicate(p => p.IsActive == true && p.IsDeleted == false && p.Id != (int)Enums.CancellationChargeEnumConstant.NoCharge).ConfigureAwait(false);
            return cancellationCharges;
        }

        /// <summary>
        /// Get CancellationPolicyType
        /// </summary>
        /// <returns>List of cancellation policy types</returns>
        public async Task<BaseResult<List<CancellationPolicyType>>> GetCancellationPolicyType()
        {
            var cancellationPolicyType = await iCancellationPolicyTypeConnectionLibrary.GetListByPredicate(p => p.IsDeleted == false).ConfigureAwait(false);
            return cancellationPolicyType;
        }

        /// <summary>
        /// Gets cancellation policy by policy Id
        /// </summary>
        /// <param name="policyId"></param>
        /// <returns>List of cancellation policies</returns>
        public async Task<BaseResult<CancellationPolicy>> GetCancellationPolicyById(int? policyId)
        {
            var result = new BaseResult<CancellationPolicy>
            {
                Result = new CancellationPolicy()
            };

            var getResult = await this.iCancellationPolicyConnectionLibrary.GetListByPredicate(p => policyId != null && p.Id == (int)policyId).ConfigureAwait(false);
            if (getResult.IsError || getResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = getResult.ExceptionMessage;
                return result;
            }
            if (getResult.Result == null)
            {
                result = null;
            }

            if (result != null)
                result.Result = getResult.Result[0];
            return result;
        }

        /// <summary>
        /// Gets cancellation policy clauses by Id
        /// </summary>
        /// <param name="policyId"></param>
        /// <returns>Policy list</returns>
        public async Task<BaseResult<List<CancellationPolicyClauses>>> GetCancellationPolicyClausesById(int? policyId)
        {
            var result = new BaseResult<List<CancellationPolicyClauses>>();
            result.Result = new List<CancellationPolicyClauses>();

            var getResult = await this.iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.CancellationPolicyId == (int)policyId).ConfigureAwait(false);
            if (getResult.IsError || getResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = getResult.ExceptionMessage;
                return result;
            }
            if (getResult == null)
            {
                result = null;
            }
            result.Result = getResult.Result;
            return result;
        }
        /// <summary>
        /// Save And Update CancellationPolicy
        /// </summary>
        /// <param name="cancellationPolicyViewModel"></param>
        /// <param name="loggedUserName"></param>
        /// <returns></returns>
        public async Task<BaseResult<CancellationPolicy>> SaveAndUpdateCancellationPolicy(CancellationPolicyViewModel cancellationPolicyViewModel, string loggedUser)
        {
            var result = new BaseResult<CancellationPolicy>
            {
                Result = new CancellationPolicy()
            };
            int policyId = cancellationPolicyViewModel.CancellationPolicyId;
            if (cancellationPolicyViewModel != null && cancellationPolicyViewModel.ObjectState == ObjectState.Added)
            {
                result = await this.CreateCancellationPolicy(cancellationPolicyViewModel).ConfigureAwait(false);
                policyId = result.Result.Id;
                cancellationPolicyViewModel.CancellationPolicyId = result.Result.Id;

                if (cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList != null &&
                    cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList.Count > 0 &&
                    cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList[0].ObjectState == ObjectState.Added)
                {
                    foreach (var item in cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList)
                    {
                        item.CancellationPolicyId = policyId;
                        await this.CreateCancellationPolicyClauses(item, loggedUser).ConfigureAwait(false);
                    }
                }
            }

            if (cancellationPolicyViewModel != null && cancellationPolicyViewModel.ObjectState == ObjectState.Modified)
            {
                var updateCancellationPolicyResult = await this.UpdateCancellationPolicy(cancellationPolicyViewModel).ConfigureAwait(false);
            }

            if (cancellationPolicyViewModel != null &&
                cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList != null &&
                cancellationPolicyViewModel.CancellationPolicyTypeId == (int)Enums.CancellationPolicyTypeEnumConstant.Flexible &&
                cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList.Count >= 1 &&
                cancellationPolicyViewModel.ObjectState == ObjectState.Modified)
            {
                foreach (var item in cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.PolicyClausesList)
                {
                    if (item.ObjectState == ObjectState.Modified || item.ObjectState == ObjectState.Added)
                    {
                        item.CancellationPolicyId = policyId;
                        var updateCancellationPolicyClauseResult = await this.UpdateCancellationClauses(item, loggedUser).ConfigureAwait(false);
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// Validates cancellation policy clauses
        /// </summary>
        /// <param name="cancellationPolicyClause"></param>
        /// <returns>returns results based on validation</returns>
        //private bool ValidatePolicyClause(CancellationPolicyClauses cancellationPolicyClause)
        //{
        //    int cancellationChrgesId = cancellationPolicyClause.CancellationChargesId;

        //    var list = iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.CancellationPolicyId == cancellationPolicyClause.CancellationPolicyId && p.CancellationChargesId == cancellationChrgesId).Result.Result;

        //    int daysBeforeArrival = cancellationPolicyClause.DaysBeforeArrival;
        //    decimal percentage = cancellationPolicyClause.PercentageCharge;

        //    List<CancellationPolicyClauses> clist = list.OrderBy(p => p.DaysBeforeArrival).ToList();
        //    CancellationPolicyClauses c1 = null, c2 = null;
        //    foreach (var item in clist)
        //    {

        //        if (daysBeforeArrival > item.DaysBeforeArrival)
        //        {
        //            c1 = item;
        //            continue;
        //        }
        //        else
        //        {
        //            c2 = item;
        //            break;
        //        }
        //    }
        //    if (c1 != null && c2 != null)
        //    {
        //        if (c1.PercentageCharge > percentage && percentage > c2.PercentageCharge)
        //        {
        //            return true;
        //        }
        //        else return false;
        //    }
        //    else if (c1 == null)
        //    {
        //        if (c2.PercentageCharge < percentage)
        //            return true;
        //        else return false;
        //    }
        //    else if (c2 == null)
        //    {
        //        if (c1.PercentageCharge > percentage)
        //            return true;
        //        else return false;
        //    }
        //    else
        //    {
        //        return false;
        //    }
        //}

        /// <summary>
        /// Updates Cancellation Policy
        /// </summary>
        /// <param name="cancellationPolicyViewModel"></param>
        /// <returns>updated cancellation policy id</returns>
        private async Task<BaseResult<CancellationPolicy>> UpdateCancellationPolicy(CancellationPolicyViewModel cancellationPolicyViewModel)
        {
            var result = new BaseResult<CancellationPolicy>();
            result.Result = new CancellationPolicy();

            if (cancellationPolicyViewModel.ObjectState == ObjectState.Modified)
            {
                var cancellationPolicyDb = this.iCancellationPolicyConnectionLibrary.GetListByPredicate(p => p.Id == cancellationPolicyViewModel.CancellationPolicyId &&
                p.HotelId == cancellationPolicyViewModel.HotelId && p.IsDeleted == false).Result.Result.FirstOrDefault();

                /// for deleting clauses in case it is changed from general/nrf to flexible

                if (cancellationPolicyDb.CancellationPolicyTypeId == 2 && cancellationPolicyViewModel.CancellationPolicyTypeId != 2)
                {
                    var list = new List<CancellationPolicyClauses>();
                    var clauses = this.iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.CancellationPolicyId == cancellationPolicyDb.Id && p.IsDeleted == false);
                    foreach (var item in clauses.Result.Result)
                    {
                        item.IsDeleted = true;
                        list.Add(item);
                    }
                    await this.iCancellationPolicyClausesConnectionLibrary.UpdateEntityList(list).ConfigureAwait(false);
                }

                /// for saving main cancellation entity

                if (cancellationPolicyDb != null)
                {
                    Func<int,int?> GetchargeId = (id) => (cancellationPolicyViewModel.CancellationPolicyTypeId ==(int) Enums.CancellationPolicyTypeEnumConstant.Flexible) ? cancellationPolicyViewModel.CancellationPolicyClausesViewModelList.CancellationClauseChargeId : null;
                    var cancellationPolicy = new CancellationPolicy()
                    {
                        Id = cancellationPolicyDb.Id,
                        CancellationChargesId = GetchargeId(cancellationPolicyDb.CancellationPolicyTypeId),
                        CancellationPolicyTypeId = cancellationPolicyViewModel.CancellationPolicyTypeId,
                        HotelId = cancellationPolicyDb.HotelId,
                        IsActive = cancellationPolicyViewModel.IsActive,
                        IsDeleted = cancellationPolicyViewModel.IsDeleted,
                        IsNoShowCharges = cancellationPolicyViewModel.IsNoShowCharges,
                        Name = cancellationPolicyViewModel.Name,
                        NoShowCancellationChargesId = cancellationPolicyViewModel.NoShowCancellationChargesId
                    };

                    var updateResult = await iCancellationPolicyConnectionLibrary.UpdateEntityByDapper(cancellationPolicy).ConfigureAwait(false);

                    if (updateResult.IsError || updateResult.ExceptionMessage != null)
                    {
                        result.IsError = true;
                        result.ExceptionMessage = updateResult.ExceptionMessage;
                        return result;
                    }
                    if (updateResult == null)
                    {
                        result = null;
                    }
                    return result;
                }
                else return result;
            }
            else return result;
        }

        /// <summary>
        /// Updates CancellationClauses
        /// </summary>
        /// <param name="cancellationPolicyViewModel"></param>
        /// <returns></returns>
        private async Task<BaseResult<CancellationPolicy>> UpdateCancellationClauses(CancellationClauseViewModel clauseViewModel, string loggedUser)
        {
            var result = new BaseResult<CancellationPolicy>();
            result.Result = new CancellationPolicy();
            var updateResult = new BaseResult<bool>();


            var clauseDb = this.iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.Id == clauseViewModel.CancellationPolicyClausesId).Result.Result.FirstOrDefault();

            if (clauseViewModel.ObjectState == ObjectState.Modified)
            {
                var updatedModel = DbMapperMasterdata.AutomapperCancellationPolicyClause(clauseViewModel, clauseDb, loggedUser);
                ////this.ValidatePolicyClause(updatedModel);
                updateResult = await iCancellationPolicyClausesConnectionLibrary.UpdateEntityByDapper(updatedModel).ConfigureAwait(false);
            }
            if (clauseViewModel.ObjectState == ObjectState.Added)
            {
                return await CreateCancellationPolicyClauses(clauseViewModel, loggedUser).ConfigureAwait(false);
            }

            if (updateResult.IsError || updateResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = updateResult.ExceptionMessage;
                return result;
            }

            if (updateResult.Result == true)
            {
                result.Result.Id = clauseViewModel.CancellationPolicyId;
            }
            return result;
        }

        /// <summary>
        /// Create Cancellation Policy
        /// </summary>
        /// <param name="cancellationPolicyViewModel"></param>
        /// <returns>returns the Id of the newly created cancellation policy</returns>
        private async Task<BaseResult<CancellationPolicy>> CreateCancellationPolicy(CancellationPolicyViewModel cancellationPolicyViewModel)
        {
            var result = new BaseResult<CancellationPolicy>();
            result.Result = new CancellationPolicy();

            var policy = DbMapperMasterdata.AutomapperCancellationPolicy(cancellationPolicyViewModel);

            var insertResult = await this.iCancellationPolicyConnectionLibrary.InsertEntity(policy).ConfigureAwait(false);
            if (insertResult.IsError || insertResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = insertResult.ExceptionMessage;
                return result;
            }
            if (insertResult == null)
            {
                result = null;
            }
            result.Result.Id = (int)insertResult.Result;
            return result;
        }

        /// <summary>
        /// Create CancellationPolicyClauses
        /// </summary>
        /// <param name="clauseViewModel"></param>
        /// <returns>returns the cancellation policy clauses id</returns>
        private async Task<BaseResult<CancellationPolicy>> CreateCancellationPolicyClauses(CancellationClauseViewModel clauseViewModel, string loggedUser)
        {
            var result = new BaseResult<CancellationPolicy> { Result = new CancellationPolicy() };

            var clauseModel = DbMapperMasterdata.AutomapperCancellationPolicyClause(clauseViewModel, null, loggedUser);
            clauseModel.CancellationPolicyId = clauseViewModel.CancellationPolicyId;
            clauseModel.IsDeleted = false;

            ////this.ValidatePolicyClause(cancellationPolicyClauses);

            var insertResult = await this.iCancellationPolicyClausesConnectionLibrary.InsertEntity(clauseModel).ConfigureAwait(false);
            if (insertResult.IsError || insertResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = insertResult.ExceptionMessage;
                return result;
            }
            result.Result.Id = (int)insertResult.Result;
            return result;
        }

        /// <summary>
        /// Get Cancellation Policies by hotel id
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns>list of cancellation policy</returns>
        public BaseResult<List<CancellationPolicyViewModel>> GetCancellationPolicies(int hotelId)
        {
            var policies = this.iCancellationPolicyConnectionLibrary.GetListByPredicate(p => p.HotelId == hotelId && p.IsDeleted == false).Result;
            var cancellationPolicyTypes = this.iCancellationPolicyTypeConnectionLibrary.GetListByPredicate(p => p.IsActive == true && p.IsDeleted == false);
            var cancellationCharges = this.iCancellationChargesConnectionLibrary.GetListByPredicate(p => p.IsActive == true && p.IsDeleted == false);
            var modelList = new BaseResult<List<CancellationPolicyViewModel>>
            {
                Result = new List<CancellationPolicyViewModel>()
            };
            Func<int?, string> GetCancellationChargesName = (id) =>
            cancellationCharges.Result.Result.Where(p => p.Id == id).FirstOrDefault().Name;
            Func<int, string> GetCancellationPolicyTypeName = (id) =>
            cancellationPolicyTypes.Result.Result.Where(p => p.Id == id).FirstOrDefault().Name;
            foreach (var item in policies.Result)
            {
                var model = new CancellationPolicyViewModel()
                {
                    CancellationPolicyId = item.Id,
                    HotelId = item.HotelId,
                    CancellationPolicyTypeId = item.CancellationPolicyTypeId,
                    CancellationPolicyTypeName = GetCancellationPolicyTypeName(item.CancellationPolicyTypeId),
                    IsNoShowCharges = item.IsNoShowCharges,
                    NoShowCancellationChargesId = item.NoShowCancellationChargesId,
                    CancellationChargesName = (item.NoShowCancellationChargesId != null) ? GetCancellationChargesName(item.NoShowCancellationChargesId) : String.Empty,
                    Name = item.Name,
                    IsActive = item.IsActive,
                    CancellationPolicyClausesViewModelList = new CancellationPolicyClausesViewModel(),
                };

                model.CancellationPolicyClausesViewModelList.CancellationClauseChargeId = item.CancellationChargesId;

                var policyClauses = this.iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.CancellationPolicyId == item.Id && p.IsDeleted == false).Result;
                model.CancellationPolicyClausesViewModelList.PolicyClausesList = new List<CancellationClauseViewModel>();
                foreach (var clause in policyClauses.Result)
                {
                    var clauseModel = new CancellationClauseViewModel()
                    {
                        CancellationPolicyClausesId = clause.Id,
                        CancellationPolicyId = clause.CancellationPolicyId,
                        DaysBeforeArrival = clause.DaysBeforeArrival,
                        PercentageCharge = clause.PercentageCharge
                    };
                    model.CancellationPolicyClausesViewModelList.PolicyClausesList.Add(clauseModel);
                }
                modelList.Result.Add(model);
            }
            return modelList;
        }
        /// <summary>
        /// Get the list of active cancellation policy
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<CancellationPolicy>>> GetActiveCancellationPolicies(int hotelId)
        {
           return await iCancellationPolicyConnectionLibrary.GetListByPredicate(x => x.HotelId == hotelId && x.IsActive && !x.IsDeleted);
        }
            public async Task<BaseResult<CancellationPolicyClauses>> DeleteCancellationPolicyClauses(int? clauseId)
        {
            var result = new BaseResult<CancellationPolicyClauses>();
            var deleteResult = new BaseResult<bool>();
            var clausesModel = iCancellationPolicyClausesConnectionLibrary.GetListByPredicate(p => p.Id == clauseId).Result.Result.FirstOrDefault();

            if (clausesModel != null)
            {
                clausesModel.IsDeleted = true;
                deleteResult = await iCancellationPolicyClausesConnectionLibrary.UpdateEntityByDapper(clausesModel).ConfigureAwait(false);
            }
            if (deleteResult.IsError || deleteResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = deleteResult.ExceptionMessage;
                return result;
            }
            if (deleteResult == null)
            {
                result = null;
            }
            return result;
        }
        /// <summary>
        /// Delete  particular Cancelllation policy
        /// </summary>
        /// <param name="id"></param>
        /// <param name="userName"></param>
        /// <returns> Task<BaseResult<bool>></returns>
        public async Task<BaseResult<bool>> DeleteCancellationPolicy(int id, string userName)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            var model = await iCancellationPolicyConnectionLibrary.GetListByPredicate(x => x.Id == id && !x.IsDeleted).ConfigureAwait(false);
            if (model.IsError || model.ExceptionMessage != null)
            {
                result.IsError = model.IsError;
                result.ExceptionMessage = model.ExceptionMessage;
                return result;
            }
            if (model.Result.Any() && model.Result[0]!=null)
            {
                model.Result[0].IsDeleted = true;
                model.Result[0].UpdatedBy = userName;
                model.Result[0].UpdatedDate = DateTime.Now.JakartaOffset();
                result = await iCancellationPolicyConnectionLibrary.UpdateEntityByDapper(model.Result[0]).ConfigureAwait(false);
                return result;
            }
            result.IsError = true;           
            result.Message = Core.Model.Helper.Constants.ErrorMessage.NoCancellationPolicyOfID;
            return result;

        }
        /// <summary>
        /// Activate Or Deactivate Cancellation Policy
        /// </summary>
        /// <param name="cancellationPolicyId"></param>
        /// <param name="userName"></param>
        /// <returns>CancellationPolicy</returns>
        public async Task<BaseResult<CancellationPolicy>> ActivateOrDeactivateCancellationPolicy(int cancellationPolicyId, string userName)
        {
            BaseResult<CancellationPolicy> result = new BaseResult<CancellationPolicy>();

            var cancellationPolicyResult =await iCancellationPolicyConnectionLibrary.GetEntity(cancellationPolicyId).ConfigureAwait(false);
            if (cancellationPolicyResult.Result != null)
            {
                //Set IsActive field
                if(cancellationPolicyResult.Result.IsActive)
                {
                    cancellationPolicyResult.Result.IsActive = false;
                }
                else
                {
                    cancellationPolicyResult.Result.IsActive = true;
                }
                cancellationPolicyResult.Result.UpdatedBy = userName;
                cancellationPolicyResult.Result.UpdatedDate = DateTime.Now.JakartaOffset();

                // Update policy
                var updateResult = await iCancellationPolicyConnectionLibrary.UpdateEntityByDapper(cancellationPolicyResult.Result).ConfigureAwait(false);
                if (updateResult.IsError || updateResult.ExceptionMessage != null || !updateResult.Result)
                {
                    result.IsError = true;
                    result.ExceptionMessage = updateResult.ExceptionMessage;
                    return result;
                }
                result.Result = cancellationPolicyResult.Result;
            }
            else
            {
                result.IsError = true;
                result.ErrorCode = (int)coreHelper.Constants.ErrorCodes.NoCancellationPolicyOfID;
                result.Message = string.Format(coreHelper.Constants.ErrorMessage.NoCancellationPolicyOfID, cancellationPolicyId);
                return result;
            }
            return result;
        }
    }
}
