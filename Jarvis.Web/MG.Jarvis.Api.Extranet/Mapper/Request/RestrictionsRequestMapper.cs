using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Hotel;
using System;

namespace MG.Jarvis.Api.Extranet.Mapper.Request
{
    public static class RestrictionsRequestMapper
    {
        /// <summary>
        /// Maps HotelRangeRestrictionViewModel to HotelRangeRestriction
        /// </summary>
        /// <param name="hotelRangeRestrictionViewModel"></param>
        /// <returns> HotelRangeRestriction </returns>
        public static BaseResult<HotelRangeRestriction> MapHotelRangeRestriction(HotelRangeRestrictionViewModel hotelRangeRestrictionViewModel, string userName)
        {
            BaseResult<HotelRangeRestriction> hotelRangeRestrictionResult = new BaseResult<HotelRangeRestriction>();
            hotelRangeRestrictionResult.Result = AutoMapper.Mapper.Map<HotelRangeRestrictionViewModel, HotelRangeRestriction>(hotelRangeRestrictionViewModel);
            hotelRangeRestrictionResult.Result.IsActive = true;
            hotelRangeRestrictionResult.Result.IsDeleted = false;
            hotelRangeRestrictionResult.Result.CreatedBy = userName;
            hotelRangeRestrictionResult.Result.CreatedDate = DateTime.Now.JakartaOffset();
            hotelRangeRestrictionResult.Result.UpdatedBy = userName;
            hotelRangeRestrictionResult.Result.UpdatedDate = DateTime.Now.JakartaOffset();
            return hotelRangeRestrictionResult;
        }

        /// <summary>
        /// Set static dynamic parameters
        /// </summary>
        /// <param name="hotelRangeRestriction"></param>
        /// <returns>DynamicParameters list</returns>
        public static BaseResult<DynamicParameters> CreateParameterRequestForHotelRangeRestriction(HotelRangeRestriction hotelRangeRestriction)
        {
            BaseResult<DynamicParameters> paramCollectionResult = new BaseResult<DynamicParameters>();
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.RateCategoryId, hotelRangeRestriction.RateCategoryId);
            paramCollection.Add(Constants.StoredProcedureParameters.RoomId, hotelRangeRestriction.RoomId);
            //paramCollection.Add(Constants.StoredProcedureParameters.RatePlanId, hotelRangeRestriction.RatePlanId);
            paramCollection.Add(Constants.StoredProcedureParameters.StartDate, hotelRangeRestriction.StartDate);
            paramCollection.Add(Constants.StoredProcedureParameters.EndDate, hotelRangeRestriction.EndDate);
            paramCollection.Add(Constants.StoredProcedureParameters.RestrictionTypeId, hotelRangeRestriction.RestrictionTypeId);
            paramCollection.Add(Constants.StoredProcedureParameters.RestrictionTypeValue, hotelRangeRestriction.RestrictionTypeValue);
            paramCollection.Add(Constants.StoredProcedureParameters.Days, hotelRangeRestriction.Days);
            //paramCollection.Add(Constants.StoredProcedureParameters.IsActive, hotelRangeRestriction.IsActive);
            //paramCollection.Add(Constants.StoredProcedureParameters.IsDeleted, hotelRangeRestriction.IsDeleted);
            paramCollection.Add(Constants.StoredProcedureParameters.CreatedBy, hotelRangeRestriction.CreatedBy);
            //paramCollection.Add(Constants.StoredProcedureParameters.CreatedDate, hotelRangeRestriction.CreatedDate);
            //paramCollection.Add(Constants.StoredProcedureParameters.UpdatedBy, hotelRangeRestriction.UpdatedBy);
            //paramCollection.Add(Constants.StoredProcedureParameters.UpdatedDate, hotelRangeRestriction.UpdatedDate);
            paramCollectionResult.Result = paramCollection;
            return paramCollectionResult;
        }
    }
}
