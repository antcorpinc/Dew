using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Helper.Mapper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.Mapper.Response;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Cache;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Policies;
using MG.Jarvis.Core.Model.Room;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Controllers
{
    public class PoliciesController : BaseController
    {
        private IPolicies iPolicies;
        public PoliciesController(IPolicies iPolicies)
        {
            this.iPolicies = iPolicies;
        }


        #region Children And Extra Bed Policy
        /// <summary>
        /// 
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns>ChildrenAndExtraBedPolicies</returns>
        [HttpPost]
        public async Task<IActionResult> GetChildrenAndExtraBedPolicyListingByHotelId([FromBody]int hotelId)
        {
            if (hotelId != default(int) && hotelId > default(int))
            {
                BaseResult<List<ChildrenAndExtraBedPolicies>> childrenAndExtraBedPoliciesResult = await iPolicies.GetChildrenAndExtraBedPolicyListingByHotelId(hotelId).ConfigureAwait(false);

                if (childrenAndExtraBedPoliciesResult.IsError && childrenAndExtraBedPoliciesResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }
                else if (childrenAndExtraBedPoliciesResult.Result == null || childrenAndExtraBedPoliciesResult.Result.Count == 0)
                {
                    return NoContent(); //204
                }
                else
                {
                    var result = PoliciesResponseMapper.MapChildrenAndExtraBedPolicyList(childrenAndExtraBedPoliciesResult);
                    return Ok(result); //200
                }
            }
            return BadRequest();//400
        }

        /// <summary>
        /// Returns childrens and extra bed policy for specific hotel-Edit Page Get API
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> GetChildrenAndExtraBedPolicy([FromBody]int hotelId)
        {
            if (hotelId != default(int) && hotelId > default(int))
            {
                BaseResult<List<ChildrenAndExtraBedPolicies>> childrenAndExtraBedPoliciesResult = await iPolicies.GetChildrenAndExtraBedPolicyListingByHotelId(hotelId).ConfigureAwait(false);

                if (childrenAndExtraBedPoliciesResult.IsError && childrenAndExtraBedPoliciesResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }

                BaseResult<List<MaxChildAndExtraBedPerRoom>> MaxChildAndExtraBedPerRoomResult = await iPolicies.GetMaxChildAndExtraBedPerRoom(hotelId).ConfigureAwait(false);

                if (MaxChildAndExtraBedPerRoomResult.IsError && MaxChildAndExtraBedPerRoomResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }

                var result = PoliciesResponseMapper.MapChildrenAndExtraBedPolicyToAddOrUpdate(childrenAndExtraBedPoliciesResult, MaxChildAndExtraBedPerRoomResult);
                return Ok(result); //200
            }
            return BadRequest();//400
        }

        /// <summary>
        /// Create child and extra bed policy
        /// </summary>
        /// <param name="ChildrenAndExtraBedPoliciesViewModel"></param>
        /// <returns></returns>
        [HttpPost]
        //[ValidateModel]
        public async Task<IActionResult> CreateChildrenAndExtraBedPolicy([FromBody]ChildrenAndExtraBedPoliciesViewModel ChildrenAndExtraBedPoliciesViewModel)
        {
            ChildrenAndExtraBedPolicies childrenAndExtraBedPoliciesResult = null;
            string userName = base.LoggedInUserName;

            if (ChildrenAndExtraBedPoliciesViewModel != null && ChildrenAndExtraBedPoliciesViewModel.HotelId > default(int))
            {
                //Fetch list of room by id
                List<Room> roomListResult = new List<Room>();
                var maxChildAndExtraBedPerRoomList = ChildrenAndExtraBedPoliciesViewModel.MaxChildAndExtraBedPerRoomList;
                BaseResult<List<Room>> roomsResult = await iPolicies.GetRoomsById(ChildrenAndExtraBedPoliciesViewModel.MaxChildAndExtraBedPerRoomList).ConfigureAwait(false);
                if (roomsResult.IsError && roomsResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }
                var roomList = roomsResult.Result;

                //Map and retrieve childrenAndExtraBedPolicy and updated roomlist
                PoliciesRequestMapper.MapChildAndExtraBedPolicy(ref childrenAndExtraBedPoliciesResult, ref roomListResult, roomList, ChildrenAndExtraBedPoliciesViewModel, userName);

                //Save or Update Child and Extra Bed Policy
                BaseResult<ChildrenAndExtraBedPolicies> addOrUpdateChildrenAndExtraBedPoliciesResult = await iPolicies.SaveAndUpdateChildAndExtraBedPolicy(childrenAndExtraBedPoliciesResult, ChildrenAndExtraBedPoliciesViewModel.ObjectState).ConfigureAwait(false);

                if (addOrUpdateChildrenAndExtraBedPoliciesResult.IsError && addOrUpdateChildrenAndExtraBedPoliciesResult.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }
                else if (addOrUpdateChildrenAndExtraBedPoliciesResult.Result == null)
                {
                    return new NoContentResult();
                }
                else if (addOrUpdateChildrenAndExtraBedPoliciesResult.Message != null)
                {
                    return BadRequest(addOrUpdateChildrenAndExtraBedPoliciesResult);
                }
                //update list of room
                if (roomListResult.Count > 0)
                {
                    BaseResult<bool> updateRoomListResult = await iPolicies.UpdateRoomList(roomListResult).ConfigureAwait(false);
                    if (updateRoomListResult.IsError && updateRoomListResult.ExceptionMessage != null)
                    {
                        return new StatusCodeResult(500);
                    }
                    else if (!updateRoomListResult.Result)
                    {
                        return new NotFoundResult();//404
                    }
                }
                return Ok(addOrUpdateChildrenAndExtraBedPoliciesResult);
            }

            return BadRequest();//400
        }
        #endregion Children And Extra Bed Policy

        #region Cancellation Policy
        /// <summary>
        /// Gets policy cancellation charges from MasterData 
        /// </summary>
        /// <returns>returns cancellation charges :- First night / full charge</returns>
        public async Task<IActionResult> GetCancellationCharges()
        {
            var cancellationChargesCache = new BaseResult<List<CancellationChargesViewModel>>()
            {
                Result = RedisCacheHelper.Instance.Get<List<CancellationChargesViewModel>>(Constants.CacheKeys.CancellationChargesList)
            };

            if (cancellationChargesCache.Result == null || cancellationChargesCache.Result.Count == 0)
            {
                var cancellationChargesResult = await iPolicies.GetCancellationCharges().ConfigureAwait(false);

                if (cancellationChargesResult.IsError && cancellationChargesResult.ExceptionMessage != null)
                {
                    return StatusCode(500, cancellationChargesResult);
                }
                else if (cancellationChargesResult.Result == null || cancellationChargesResult.Result.Count == 0)
                {
                    return NoContent(); //204
                }
                else
                {
                    var chargesListVm = DbMapperMasterdata.MapCancellationCharges(cancellationChargesResult);
                    RedisCacheHelper.Instance.Set<List<CancellationChargesViewModel>>(Constants.CacheKeys.CancellationChargesList, chargesListVm.Result);
                    return Ok(chargesListVm); //200
                }
            }
            return Ok(cancellationChargesCache);
        }

        /// <summary>
        /// Gets Cancellation Policy types from MasterData
        /// </summary>
        /// <returns>Returns cancellation policy types :- Non </returns>
        public async Task<IActionResult> GetCancellationPolicyType()
        {
            var cancellationPolicyTypeChargesCache = new BaseResult<List<CancellationPolicyTypeViewModel>>()
            {
                Result = RedisCacheHelper.Instance.Get<List<CancellationPolicyTypeViewModel>>(Constants.CacheKeys.CancellationPolicyTypeList)
            };

            if (cancellationPolicyTypeChargesCache.Result == null || cancellationPolicyTypeChargesCache.Result.Count == 0)
            {
                var cancellationPolicyTypeResult = await iPolicies.GetCancellationPolicyType().ConfigureAwait(false);

                if (cancellationPolicyTypeResult.IsError && cancellationPolicyTypeResult.ExceptionMessage != null)
                {
                    return StatusCode(500, cancellationPolicyTypeResult);
                }
                else if (cancellationPolicyTypeResult.Result == null || cancellationPolicyTypeResult.Result.Count == 0)
                {
                    return this.NoContent(); // 204
                }
                else
                {
                    var chargesListVm = DbMapperMasterdata.MapCancellationPolicyType(cancellationPolicyTypeResult);
                    RedisCacheHelper.Instance.Set<List<CancellationPolicyTypeViewModel>>(Constants.CacheKeys.CancellationPolicyTypeList, chargesListVm.Result);
                    return this.Ok(chargesListVm); // 200
                }
            }
            return this.Ok(cancellationPolicyTypeChargesCache);
        }

        [HttpPost]
        public IActionResult GetCancellationPolicy([FromBody] int hotelId)
        {
            if (hotelId <= 0)
            {
                return BadRequest(hotelId);
            }
            var response = this.iPolicies.GetCancellationPolicies(hotelId);
            if (response.IsError && response.ExceptionMessage != null)
            {
                return StatusCode(500, response);
            }
            else if (response.Result == null || response.Result.Count == 0)
            {
                return this.NoContent(); // 204
            }
            else
            {
                //var chargesListVm = DbMapperMasterdata.MapCancellationPolicyType(cancellationPolicyResult);
                return this.Ok(response); // 200
            }
        }
        /// <summary>
        /// Get active cancellation policies
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> GetActiveCancellationPolicy([FromBody] int hotelId)
        {
            BaseResult<List<CancellationPolicyViewModel>> response = new BaseResult<List<CancellationPolicyViewModel>>();
            if (hotelId <= default(int))
            {
                response.IsError = true;
                response.Message = Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return this.BadRequest(response);
            }
            var result = await this.iPolicies.GetActiveCancellationPolicies(hotelId);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return StatusCode(500, response);
            }
            else if (result.Result == null || !result.Result.Any())
            {
                return this.NoContent(); // 204
            }
            response = PoliciesResponseMapper.MapCancellationPolicy(result);
            return this.Ok(response); // 200
        }

        [HttpPost]
        public async Task<IActionResult> GetCancellationPolicyById(int? id)
        {
            if (id == null)
            {
                return BadRequest(id);
            }
            var getResponse = await iPolicies.GetCancellationPolicyById(id).ConfigureAwait(false);
            if (getResponse.IsError && getResponse.ExceptionMessage != null)
            {
                return StatusCode(500, getResponse);
            }
            else if (getResponse.Result == null)
            {
                return this.NoContent(); // 204
            }
            else if (getResponse.Message != null)
            {
                return BadRequest(getResponse);
            }
            return Ok(getResponse); //200
        }

        /// <summary>
        ///Delete a particular cancellation policy
        /// </summary>
        /// <param name="id"></param>
        /// <returns> Task<IActionResult></returns>
        [HttpPost]
        public async Task<IActionResult> DeleteCancellationPolicyById([FromBody]int id)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            if (id <= default(int))
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return BadRequest(result);
            }
            result = await iPolicies.DeleteCancellationPolicy(id, base.LoggedInUserName).ConfigureAwait(false);
            if (result.Message != null)
            {
                return BadRequest(result);
            }
            if (result.IsError || result.ExceptionMessage != null || result.Result == default(bool))
            {
                return StatusCode(500, result);
            }
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> GetCancellationPolicyClausesByPolicyId(int? id)
        {
            if (id == null)
            {
                return BadRequest(id);
            }
            var getResponse = await iPolicies.GetCancellationPolicyClausesById(id).ConfigureAwait(false);
            if (getResponse.IsError && getResponse.ExceptionMessage != null)
            {
                return StatusCode(500, getResponse);
            }
            else if (getResponse.Message != null)
            {
                return BadRequest(getResponse);
            }
            return Ok(getResponse); //200
        }

        [HttpPost]
        public async Task<IActionResult> DeleteCancellationPolicyClause([FromBody]int policyClauseID)
        {
            if (policyClauseID <= 0)
            {
                return BadRequest(policyClauseID);
            }
            var updateResponse = await iPolicies.DeleteCancellationPolicyClauses(policyClauseID).ConfigureAwait(false);
            if (updateResponse.IsError && updateResponse.ExceptionMessage != null)
            {
                return StatusCode(500, updateResponse);
            }
            else if (updateResponse.Message != null)
            {
                return BadRequest(updateResponse);
            }
            return Ok(updateResponse); //200

        }

        [HttpPost]
        public async Task<IActionResult> SaveAndUpdateCancellationPolicy([FromBody]CancellationPolicyViewModel cancellationPolicyViewModel)
        {
            if (cancellationPolicyViewModel == null || cancellationPolicyViewModel.HotelId == 0)
            {
                return BadRequest(cancellationPolicyViewModel);
            }
            var LoggedInUserName = this.LoggedInUserName;
            var updateResponse = await iPolicies.SaveAndUpdateCancellationPolicy(cancellationPolicyViewModel, base.LoggedInUserId).ConfigureAwait(false);
            if (updateResponse.IsError && updateResponse.ExceptionMessage != null)
            {
                return StatusCode(500, updateResponse);
            }
            else if (updateResponse.Result == null)
            {
                return this.NoContent(); // 204
            }
            else if (updateResponse.Message != null)
            {
                return BadRequest(updateResponse);
            }
            return Ok(updateResponse); //200
        }

        /// <summary>
        /// Activate Or Deactivate Cancellation Policy
        /// </summary>
        /// <param name="cancellationPolicyId"></param>
        /// <returns>CancellationPolicy</returns>
        [HttpPost]
        public async Task<IActionResult> ActivateOrDeactivateCancellationPolicy([FromBody]int cancellationPolicyId)
        {
            BaseResult<CancellationPolicy> deactivateCancellationPolicyResult = new BaseResult<CancellationPolicy>();
            if (cancellationPolicyId <= default(int))
            {
                deactivateCancellationPolicyResult.IsError = true;
                deactivateCancellationPolicyResult.Message = string.Format(coreHelper.Constants.ErrorMessage.InvalidId, cancellationPolicyId);
                return BadRequest(deactivateCancellationPolicyResult);
            }
            deactivateCancellationPolicyResult = await iPolicies.ActivateOrDeactivateCancellationPolicy(cancellationPolicyId, base.LoggedInUserName).ConfigureAwait(false);
            if (deactivateCancellationPolicyResult.IsError || deactivateCancellationPolicyResult.ExceptionMessage != null)
            {
                return StatusCode(500, deactivateCancellationPolicyResult);
            }
            else if (deactivateCancellationPolicyResult.Result == null)
            {
                return new NoContentResult();
            }
            else if (deactivateCancellationPolicyResult.Message != null)
            {
                return BadRequest(deactivateCancellationPolicyResult);
            }
            return Ok(deactivateCancellationPolicyResult);
        }
        #endregion Cancellation Policy
    }
}