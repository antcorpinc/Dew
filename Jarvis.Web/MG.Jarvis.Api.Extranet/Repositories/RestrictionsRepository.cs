using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Hotel;
using MG.Jarvis.Core.Model.MasterData;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class RestrictionsRepository : IRestrictions
    {
        #region private variables
        private IConnection<RestrictionType> iRestrictionTypeConnectionLibrary;
        private IConnection<HotelRangeRestriction> iHotelRangeRestrictionConnectionLibrary;
        #endregion private variables

        public RestrictionsRepository(IConnection<RestrictionType> iRestrictionTypeConnectionLibrary, IConnection<HotelRangeRestriction> iHotelRangeRestrictionConnectionLibrary)
        {

            this.iRestrictionTypeConnectionLibrary = iRestrictionTypeConnectionLibrary;
            this.iHotelRangeRestrictionConnectionLibrary = iHotelRangeRestrictionConnectionLibrary;
        }
        /// <summary>
        /// Retrun all RestrictionType
        /// </summary>
        /// <returns>List of RestrictionType</returns>
        public async Task<BaseResult<List<RestrictionType>>> GetRestrictionType()
        {
            return await iRestrictionTypeConnectionLibrary.GetListByPredicate(id => id.IsActive && !id.IsDeleted).ConfigureAwait(false);
        }

        /// <summary>
        /// Create Hotel RangeRestriction
        /// </summary>
        /// <param name="hotelRangeRestrictionViewModel"></param>
        /// <param name="userName"></param>
        /// <returns>HotelRangeRestrictionViewModel</returns>
        public async Task<BaseResult<HotelRangeRestrictionViewModel>> CreateHotelRangeRestriction(HotelRangeRestrictionViewModel hotelRangeRestrictionViewModel, string userName)
        {
            BaseResult<HotelRangeRestrictionViewModel> result = new BaseResult<HotelRangeRestrictionViewModel>();
            result.Result = new HotelRangeRestrictionViewModel();
            //Map
            var hotelRangeRestriction = RestrictionsRequestMapper.MapHotelRangeRestriction(hotelRangeRestrictionViewModel, userName).Result;

            //Set dynamic parameters
            var createHotelRangeRestrictionExistRequest = RestrictionsRequestMapper.CreateParameterRequestForHotelRangeRestriction(hotelRangeRestriction);

            //Insert HotelRangeRestriction
            var insertResult = await iHotelRangeRestrictionConnectionLibrary.ExecuteStoredProcedureScalar(Constants.StoredProcedure.CheckAndInsertRestrictionType, createHotelRangeRestrictionExistRequest.Result).ConfigureAwait(false);

            if (insertResult.IsError || insertResult.ExceptionMessage != null)
            {
                result.IsError = true;
                result.ExceptionMessage = insertResult.ExceptionMessage;
                return result;
            }
            else if (insertResult.Result.Id > default(long))
            {
                //Assign HotelRangeRestriction Id
                result.Result.Id = insertResult.Result.Id;
            }
            else if (insertResult.Result.Id < default(long))
            {
                result.IsError = true;
                result.Message = string.Format(coreHelper.Constants.ErrorMessage.RecordAlreadyExist);
                return result;
            }
            return result;
        }
    }
}
