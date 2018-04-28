using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Response;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Cache;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.MasterData;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Controllers
{
    public class RestrictionsController : BaseController
    {
        IRestrictions iRestrictions;
        public RestrictionsController(IRestrictions iRestrictions)
        {
            this.iRestrictions = iRestrictions;
        }

        /// <summary>
        /// Return the list of RestrictionType
        /// </summary>
        /// <returns>RestrictionTypeList</returns>
        public async Task<IActionResult> GetRestrictionType()
        {
            BaseResult<List<RestrictionTypeViewModel>> restrictionTypeResultFromCache = new BaseResult<List<RestrictionTypeViewModel>>
            {
                Result = RedisCacheHelper.Instance.Get<List<RestrictionTypeViewModel>>(Constants.CacheKeys.RestrictionTypeList)
            };

            if (restrictionTypeResultFromCache.Result == null || restrictionTypeResultFromCache.Result.Count == 0)
            {
                BaseResult<List<RestrictionType>> restrictionTypeResult = await iRestrictions.GetRestrictionType().ConfigureAwait(false);

                if (restrictionTypeResult.IsError && restrictionTypeResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }
                else if (restrictionTypeResult.Result == null || restrictionTypeResult.Result.Count == 0)
                {
                    return NoContent(); //204
                }
                else
                {
                    var result = RestrictionsResponseMapper.MapRestrictionType(restrictionTypeResult);
                    RedisCacheHelper.Instance.Set<List<RestrictionTypeViewModel>>(Constants.CacheKeys.RestrictionTypeList, result.Result);
                    return Ok(result); //200
                }
            }
            return Ok(restrictionTypeResultFromCache); //200
        }

        /// <summary>
        /// Create Hotel Range Restriction
        /// </summary>
        /// <param name="hotelRangeRestrictionViewModel"></param>
        /// <returns>HotelRangeRestriction</returns>
        [HttpPost]
        public async Task<IActionResult> CreateHotelRangeRestriction([FromBody]HotelRangeRestrictionViewModel hoteltRangeRestrictionViewModel)
        {
            BaseResult<HotelRangeRestrictionViewModel> createHotelRangeRestrictionResult = new BaseResult<HotelRangeRestrictionViewModel>();
            if (hoteltRangeRestrictionViewModel == null)
            {
                createHotelRangeRestrictionResult.IsError = true;
                createHotelRangeRestrictionResult.Message = string.Format(coreHelper.Constants.ErrorMessage.EmptyModel);
                return BadRequest(createHotelRangeRestrictionResult);
            }
            createHotelRangeRestrictionResult = await iRestrictions.CreateHotelRangeRestriction(hoteltRangeRestrictionViewModel, base.LoggedInUserName).ConfigureAwait(false);
            if (createHotelRangeRestrictionResult.IsError && createHotelRangeRestrictionResult.ExceptionMessage != null)
            {
                return new StatusCodeResult(500);
            }
            else if (createHotelRangeRestrictionResult.Result == null)
            {
                return new NoContentResult(); //204
            }
            else if (createHotelRangeRestrictionResult.Message != null)
            {
                return Ok(createHotelRangeRestrictionResult);
            }
            return Ok(createHotelRangeRestrictionResult);
        }
    }
}