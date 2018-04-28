// <copyright file="FacilitiesController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>
namespace MG.Jarvis.Api.Extranet.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using MG.Jarvis.Api.Extranet.Helper;
    using MG.Jarvis.Api.Extranet.Helper.Mapper;
    using MG.Jarvis.Api.Extranet.Interfaces;
    using MG.Jarvis.Api.Extranet.Mapper.Response;
    using MG.Jarvis.Api.Extranet.ViewModel;
    using MG.Jarvis.Core.Cache;
    using MG.Jarvis.Core.Model;
    using MG.Jarvis.Core.Model.Hotel;
    using MG.Jarvis.Core.Model.MasterData;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Facilities Controller
    /// </summary>
    public class FacilitiesController : BaseController
    {
        private IFacilities iFacilities;
      

        /// <summary>
        /// Initializes a new instance of the <see cref="FacilitiesController"/> class.
        /// </summary>
        /// <param name="iFacilities">iFacilities</param>
        public FacilitiesController(IFacilities iFacilities)
        {
            this.iFacilities = iFacilities;
            
        }

        /// <summary>
        ///  Returns the list of facility groups with thier respective facility type and facilities
        /// </summary>
        /// <param name="hotelId">hotel Id</param>
        /// <returns>Hotel Facility Group</returns>
        [HttpPost]
        public async Task<IActionResult> GetHotelFacilityGroups([FromBody]int hotelId)
        {
            BaseResult<List<HotelFacilityGroupViewModel>> hotelFacilityGroupResult = new BaseResult<List<HotelFacilityGroupViewModel>>
            {
                Result = RedisCacheHelper.Instance.Get<List<HotelFacilityGroupViewModel>>(Constants.CacheKeys.HotelFacilityGroupList)
            };
            if (hotelId < 1)
            {
                hotelFacilityGroupResult.IsError = true;
                hotelFacilityGroupResult.Message= Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return this.BadRequest(hotelFacilityGroupResult);
            }        
            BaseResult<List<HotelFacilityRelation>> facilitiesSelected = await this.iFacilities.GetSelectedFacilities(hotelId).ConfigureAwait(false);

            if (hotelFacilityGroupResult.Result == null || hotelFacilityGroupResult.Result.Count == 0) 
            {
                BaseResult<List<HotelFacilityGroup>> hotelFacilityGroup = await this.iFacilities.GeHotelFacilityGroup().ConfigureAwait(false);
                BaseResult<List<HotelFacilityType>> hotelFacilityType = await this.iFacilities.GeHotelFacilityType().ConfigureAwait(false);
                BaseResult<List<HotelFacility>> hotelFacility = await this.iFacilities.GeHotelFacility().ConfigureAwait(false);

                if ((hotelFacilityGroup.IsError && hotelFacilityGroup.ExceptionMessage != null) || (hotelFacilityType.IsError && hotelFacilityType.ExceptionMessage != null) || (hotelFacility.IsError && hotelFacility.ExceptionMessage != null))
                {
                    return new StatusCodeResult(500);
                }
                else if (hotelFacilityGroup.Result == null || hotelFacilityGroup.Result.Count == 0 || hotelFacilityType.Result == null || hotelFacilityType.Result.Count == 0 || hotelFacility.Result == null || hotelFacility.Result.Count == 0)
                {
                    return this.NoContent(); ////204
                }
                else
                {
                    var facilities = FacilitiesResponseMapper.MapHotelFacilities(hotelFacility); ////maps to facilityViewModel
                    var result = FacilitiesResponseMapper.MapHotelFacilityType(facilities, hotelFacilityType); ////maps to HotelFacilityTypeViewModel
                    var result1 = FacilitiesResponseMapper.MapHotelFacilityGroup(facilities, hotelFacilityGroup, result);  ////Maps to HotelFacilityGroupViewModel
                    RedisCacheHelper.Instance.Set<List<HotelFacilityGroupViewModel>>(Constants.CacheKeys.HotelFacilityGroupList, result1.Result);
                    var mappedFacility = FacilitiesResponseMapper.MapSelectedHotelFacilities(result1, facilitiesSelected);
                    return this.Ok(mappedFacility);
                }
            }

            if (facilitiesSelected.Result == null || facilitiesSelected.Result.Count == 0)
            {
                return this.Ok(hotelFacilityGroupResult);
            }
            else
            {
                var mappedFacilities = FacilitiesResponseMapper.MapSelectedHotelFacilities(hotelFacilityGroupResult, facilitiesSelected);
                return this.Ok(mappedFacilities); ////200
            }
        }

        /// <summary>
        /// Save Facilities
        /// </summary>
        /// <param name="hotelFacilityViewModel">hotel Facility View Model</param>
        /// <returns>Create and update hotel Facility relation</returns>
        [HttpPost]
        public async Task<IActionResult> CreateHotelFacilityRelation([FromBody] HotelFacilityViewModel hotelFacilityViewModel)
        {
            BaseResult<long> result = new BaseResult<long>();          
            if (hotelFacilityViewModel != null)
            {
                result = await this.iFacilities.InsertAndUpdateHotelFacilityRelation(hotelFacilityViewModel, base.LoggedInUserName);
                if (result.IsError || result.ExceptionMessage != null)
                {
                    return new StatusCodeResult(500);
                }

                return this.Ok(result); ////200
            }
            else
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.EmptyModel;
                return this.BadRequest(result);
            }
        }

        /// <summary>
        /// Returns true If Hotel has Facilities
        /// </summary>
        /// <param name="hotelId">hotelId</param>
        /// <returns>Boolean value weather facility exist fro hotel or not</returns>
        [HttpPost]
        public async Task<IActionResult> IsHotelFacilityExits([FromBody]int hotelId)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            if (hotelId < 1)
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return this.BadRequest(result);
            }           
            result = await this.iFacilities.IsHotelFacilityExits(hotelId);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return new StatusCodeResult(500);
            }           
            return this.Ok(result);
        }


        /// <summary>
        /// Get facilities for contracts
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> GetContractFacilityGroups([FromBody]int contractId)
        {
            BaseResult<List<HotelFacilityGroupViewModel>> hotelFacilityGroupResult = new BaseResult<List<HotelFacilityGroupViewModel>>
            {
                Result = RedisCacheHelper.Instance.Get<List<HotelFacilityGroupViewModel>>(Constants.CacheKeys.HotelFacilityGroupList)
            };
            if (contractId < 1)
            {
                hotelFacilityGroupResult.IsError = true;
                hotelFacilityGroupResult.Message = Constants.BadRequestErrorMessage.InvalidContractId;
                return this.BadRequest(hotelFacilityGroupResult);
            }
            var facilitiesSelected = await this.iFacilities.GetSelectedContractFacilities(contractId).ConfigureAwait(false);
            var contractFacilityGroupList = await this.iFacilities.GetFacilityGroupsForContract(contractId, base.LanguageId).ConfigureAwait(false);
            if ((facilitiesSelected.IsError && facilitiesSelected.ExceptionMessage != null) || (contractFacilityGroupList.IsError && contractFacilityGroupList.ExceptionMessage != null) || !contractFacilityGroupList.Result.Any() || contractFacilityGroupList.Result == null)
            {
                return StatusCode(500);
            }
            if (hotelFacilityGroupResult.Result == null || !hotelFacilityGroupResult.Result.Any())
            {
                BaseResult<List<HotelFacilityGroup>> hotelFacilityGroup = await this.iFacilities.GeHotelFacilityGroup().ConfigureAwait(false);
                BaseResult<List<HotelFacilityType>> hotelFacilityType = await this.iFacilities.GeHotelFacilityType().ConfigureAwait(false);
                BaseResult<List<HotelFacility>> hotelFacility = await this.iFacilities.GeHotelFacility().ConfigureAwait(false);
                if ((hotelFacilityGroup.IsError && hotelFacilityGroup.ExceptionMessage != null) || (hotelFacilityType.IsError && hotelFacilityType.ExceptionMessage != null) || (hotelFacility.IsError && hotelFacility.ExceptionMessage != null))
                {
                    return StatusCode(500);
                }
                else if (hotelFacilityGroup.Result == null || !hotelFacilityGroup.Result.Any() || hotelFacilityType.Result == null || !hotelFacilityType.Result.Any() || hotelFacility.Result == null || !hotelFacility.Result.Any())
                {
                    return this.NoContent(); ////204
                }
                else
                {
                    var facilities = FacilitiesResponseMapper.MapHotelFacilities(hotelFacility); ////maps to facilityViewModel
                    var result = FacilitiesResponseMapper.MapHotelFacilityType(facilities, hotelFacilityType); ////maps to HotelFacilityTypeViewModel
                    hotelFacilityGroupResult = FacilitiesResponseMapper.MapHotelFacilityGroup(facilities, hotelFacilityGroup, result);  ////Maps to HotelFacilityGroupViewModel              
                    RedisCacheHelper.Instance.Set<List<HotelFacilityGroupViewModel>>(Constants.CacheKeys.HotelFacilityGroupList, hotelFacilityGroupResult.Result);
                }
            }
            var mappedFacility = FacilitiesResponseMapper.MapSelectedContractFacilities(hotelFacilityGroupResult, facilitiesSelected, contractFacilityGroupList.Result);
            return this.Ok(mappedFacility); ////200

        }

        /// <summary>
        /// Save Facilities for contract
        /// </summary>
        /// <param name="hotelFacilityViewModel"> Facility View Model</param>
        /// <returns>Create and update contract Facility relation</returns>
        [HttpPost]
        public async Task<IActionResult> CreateContractFacilityRelation([FromBody] HotelFacilityViewModel hotelFacilityViewModel)
        {
            BaseResult<long> result = new BaseResult<long>();
            if (hotelFacilityViewModel != null)
            {
                result = await this.iFacilities.InsertAndUpdateContractFacilityRelation(hotelFacilityViewModel, base.LoggedInUserName);
                if (result.IsError || result.ExceptionMessage != null)
                {
                    return StatusCode(500, result);
                }
                return this.Ok(result); ////200
            }
            else
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.EmptyModel;
                return this.BadRequest(result);
            }
        }

        /// <summary>
        /// Returns true If Contract has Facilities
        /// </summary>
        /// <param name="contractId">contractId</param>
        /// <returns>Boolean value weather facility exist for contract or not</returns>
        [HttpPost]
        public async Task<IActionResult> IsContractFacilityExits([FromBody]int contractId)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            if (contractId <1)
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return this.BadRequest(result);
            }
            result = await this.iFacilities.IsContractFacilityExits(contractId);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return  StatusCode(500,result);
            }           
            return this.Ok(result);
        }

    }
}