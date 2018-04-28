using MG.Jarvis.Api.Extranet.Attributes;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.Mapper.Response;
using MG.Jarvis.Api.Extranet.Models.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Cache;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Contracts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Controllers
{
    public class ContractsController : BaseController
    {
        #region Private Variable
        private readonly IContract contracts;
        private readonly IContractStatic _icontractsStatic;
        #endregion Private Variables

        public ContractsController(IContract contracts, IContractStatic contractStatic)
        {
            this.contracts = contracts;
            this._icontractsStatic = contractStatic;
        }

        /// <summary>
        /// Method to activate contract
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        [HttpPost]
        // [AutoValidateAntiforgeryToken]
        public async Task<IActionResult> ActivateContract([FromBody] DateTime date)
        {

            BaseResult<bool> activationResult;
            if (date.Date != DateTime.Now.Date)
            {
                activationResult = new BaseResult<bool>() { IsError = true };
                return new BadRequestObjectResult(activationResult);
            }
            activationResult = await this.contracts.ActivateContract(date);
            if (activationResult.IsError)
            {
                return new StatusCodeResult(500);
            }
            return Ok(activationResult);
        }
        /// <summary>
        /// Method which deactivates the contract depending on the date.
        /// </summary>
        /// <param>DateTime</param>
        /// <returns></returns>
        [HttpPost]
        // [AutoValidateAntiforgeryToken]
        public async Task<IActionResult> DeActivateContract([FromBody] DateTime date)
        {
            BaseResult<bool> deActivationResult;
            if (date.Date != DateTime.Now.Date)
            {
                deActivationResult = new BaseResult<bool>() { IsError = true, Result = false };
                return new BadRequestObjectResult(deActivationResult);
            }
            deActivationResult = await this.contracts.DeActivateContract(date);
            if (deActivationResult.IsError)
            {
                return new StatusCodeResult(500);
            }
            return Ok(deActivationResult);
        }

        /// <summary>
        /// Returns the List Of Expired Contracts
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> GetExpiredContract([FromBody]  ExpiredContracts request)
        {
            BaseResult<IEnumerable<dynamic>> expiryingContracts;
            #region Input Request Validation
            if (request == null || request.NotificationDate == DateTime.MinValue) //Need to check jakarta offset // || request.ExpiryWarningDays < 1 : Might Need old expired contract
            {
                expiryingContracts = new BaseResult<IEnumerable<dynamic>>
                {
                    IsError = true,
                    Message = Constants.BadRequestErrorMessage.InvalidRequest
                };
                return new BadRequestObjectResult(expiryingContracts);
            }

            #endregion Input Request Validation

            expiryingContracts = await this.contracts.GetExpiredContract(request).ConfigureAwait(false);

            if (expiryingContracts.IsError && expiryingContracts.ExceptionMessage != null)
            {
                return new StatusCodeResult(500);
            }
            else if (expiryingContracts.Result == null || !expiryingContracts.Result.Any())
            {
                return NoContent(); //204
            }
            return Ok(expiryingContracts); ;
        }

        /// <summary>
        /// Gets List of contracts
        /// </summary>
        /// <returns>List of contracts</returns>
        [HttpGet]
        public async Task<IActionResult> GetAllContracts()
        {
            BaseResult<List<ContractListingViewModel>> contractData;

            contractData = await this.contracts.GetAllContracts().ConfigureAwait(false);
            if (contractData.IsError && contractData.ExceptionMessage != null)
            {
                return StatusCode(500, contractData);
            }
            else if (contractData.Result == null || !contractData.Result.Any())
            {
                return NoContent(); //204
            }
            return Ok(contractData);
        }
        /// <summary>
        /// api for create non mg contract
        /// </summary>
        /// <param name="contractRequest"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateModel]
        public async Task<IActionResult> CreateNonMGContract([FromBody] ContractViewModel contractRequest)
        {
            if (contractRequest.ContractType != Enums.ContractType.NonMg)
            {
                return BadRequest();
            }
            return await CreateContract(contractRequest).ConfigureAwait(false);
        }
        /// <summary>
        /// api for create mg dynamic contract
        /// </summary>
        /// <param name="contractRequest"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateModel]
        public async Task<IActionResult> CreateMGDynamicContract([FromBody] ContractViewModel contractRequest)
        {
            if (contractRequest.ContractType != Enums.ContractType.MgDynamic)
            {
                return BadRequest();
            }
            return await CreateContract(contractRequest).ConfigureAwait(false);
        }
        /// <summary>
        /// PAi for  get contract statuses
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName("GetContractStatuses")]
        public async Task<IActionResult> GetContractStatusesAPI()
        {
            var contractStatusResult = await GetContractStatuses().ConfigureAwait(false);
            if (contractStatusResult.IsError && contractStatusResult.ExceptionMessage != null)
            {
                return StatusCode(500, contractStatusResult);
            }
            return Ok(contractStatusResult);
        }
        /// <summary>
        /// private common method for create contract
        /// </summary>
        /// <param name="contractRequest"></param>
        /// <returns></returns>
        private async Task<IActionResult> CreateContract(ContractViewModel contractRequest)
        {
            BaseResult<long> contractResult = null;
            if ((contractRequest.Id ?? default(int)) == default(int))
            {
                var contractStatusResult = await GetContractStatuses().ConfigureAwait(false);
                if (contractStatusResult.IsError && contractStatusResult.ExceptionMessage != null)
                {
                    return StatusCode(500, contractStatusResult);
                }
                //get status id for draft must present in DB
                contractRequest.StatusID = contractStatusResult.Result.First(x => x.Name.Equals(Constants.ContractStatuses.Draft, StringComparison.OrdinalIgnoreCase)).Id;
                var contract = ContractsRequestMapper.MapToContractModel(contractRequest, LoggedInUserName);
                contractResult = await this.contracts.CreateContract(contract).ConfigureAwait(false);
                if (contractResult.IsError && contractResult.ExceptionMessage != null)
                {
                    return StatusCode(500, contractResult);
                }
                contractRequest.Id = (int)contractResult.Result;
            }
            //else for update

            //non zero hotel id check!

            var contractHotel = ContractsRequestMapper.MapToContractHotelModel(contractRequest.HotelDetails, LoggedInUserName);
            contractHotel.ContractId = contractRequest.Id.Value;
            var contractHotelResult = await this.contracts.InsertContractHotel(contractHotel).ConfigureAwait(false);
            if (contractHotelResult.IsError && contractHotelResult.ExceptionMessage != null)
            {
                return StatusCode(500, contractHotelResult);
            }

            var contractContacts = ContractsRequestMapper.MapToContractContactModelList
                                    (
                                        contractRequest.HotelDetails.ContactDetails, LoggedInUserName,
                                        contractRequest.Id.Value, contractRequest.HotelDetails.HotelId
                                    );
            var contractContactResult = await this.contracts.InsertContractContacts(contractContacts).ConfigureAwait(false);
            if (contractContactResult.IsError && contractContactResult.ExceptionMessage != null)
            {
                return StatusCode(500, contractContactResult);
            }

            var contractEmailReservation = ContractsRequestMapper.MapToContractEmailReservationModel(contractRequest.HotelDetails, contractRequest.Id.Value, LoggedInUserName);
            contractEmailReservation.ContractId = contractRequest.Id.Value;
            var contractEmailReservationResult = await this.contracts.InsertContractEmailReservation(contractEmailReservation).ConfigureAwait(false);
            if (contractEmailReservationResult.IsError && contractEmailReservationResult.ExceptionMessage != null)
            {
                return StatusCode(500, contractEmailReservationResult);
            }

            var contractTelephoneReservation = ContractsRequestMapper.MapToContractTelephoneReservationModelList
                                                (
                                                    contractRequest.HotelDetails.ReservationContactNo, LoggedInUserName,
                                                    contractRequest.Id.Value, contractRequest.HotelDetails.HotelId
                                                );
            var contractTelephoneReservationResult = await this.contracts.InsertContractTelephoneReservations(contractTelephoneReservation).ConfigureAwait(false);
            if (contractTelephoneReservationResult.IsError && contractTelephoneReservationResult.ExceptionMessage != null)
            {
                return StatusCode(500, contractTelephoneReservationResult);
            }

            return Ok(contractResult);
        }

        private async Task<BaseResult<List<ContractStatus>>> GetContractStatuses()
        {
            var contractStatusResult = new BaseResult<List<ContractStatus>>();
            var contractStatusListCache =
                RedisCacheHelper.Instance.Get<List<ContractStatus>>(Constants.CacheKeys.ContractStatusList);
            if (contractStatusListCache != null && contractStatusListCache.Any())
            {
                contractStatusResult.Result = contractStatusListCache;
            }
            else
            {
                var contractStatusData = await this.contracts.GetContractStatuses().ConfigureAwait(false);
                if (contractStatusData.IsError && contractStatusData.ExceptionMessage != null)
                {
                    contractStatusResult.IsError = contractStatusData.IsError;
                    contractStatusData.ExceptionMessage = contractStatusData.ExceptionMessage;
                    return contractStatusResult;
                }
                contractStatusResult = contractStatusData;
                RedisCacheHelper.Instance.Set(Constants.CacheKeys.ContractStatusList, contractStatusData.Result);
            }
            return contractStatusResult;
        }

        /// <summary>
        /// CreateStaticContract
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <returns> Task<IActionResult>  </returns>
        [HttpPost]
        public async Task<IActionResult> CreateStaticContract([FromBody]ContractStaticViewModel contractStaticViewModel)
        {
            BaseResult<ContractStaticViewModel> insertResult = null;
            try
            {
                if(contractStaticViewModel.HotelDetailsViewModel.HotelId == 0)
                {
                    return this.BadRequest(contractStaticViewModel);
                }
                insertResult = await this._icontractsStatic.CreateContract(contractStaticViewModel, this.LoggedInUserName).ConfigureAwait(false);
                if (insertResult.IsError && insertResult.ExceptionMessage != null)
                {
                    return StatusCode(500, insertResult);
                }
                else if (insertResult.Result == null)
                {
                    return this.NoContent(); // 204
                }

                return this.Ok(insertResult);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        /// <summary>
        /// GetContractProperties
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> GetContractProperties([FromBody]int contractId)
        {
            BaseResult<List<ContractHotelPropertiesViewModel>> getResult = null;
            if(contractId == 0)
            {
                return this.BadRequest(contractId);
            }

            getResult = await this._icontractsStatic.GetContractProperties(contractId).ConfigureAwait(false);

            if (getResult.IsError && getResult.ExceptionMessage != null)
            {
                return StatusCode(500, getResult);
            }
            else if (getResult.Result == null)
            {
                return this.NoContent(); // 204
            }

            return this.Ok(getResult);
        }

        /// <summary>
        /// SaveContractTerm
        /// </summary>
        /// <param name="contractTermViewModel"></param>
        /// <returns>Task<IActionResult></returns>
        [HttpPost]
        public async Task<IActionResult> SaveContractTerm([FromBody] ContractTermViewModel contractTermViewModel)
        {
            if (contractTermViewModel == null)
            {
                return this.BadRequest(contractTermViewModel);
            }
            var result = await _icontractsStatic.SaveContractTerm(contractTermViewModel).ConfigureAwait(false);
            if (result < 0)
            {
                return StatusCode(500, result);
            }
            else if (result == 0)
            {
                return this.NoContent();
            }

            return this.Ok(result);
        }

        /// <summary>
        /// Get the count of  Facilities for selected  contract
        /// </summary>
        /// <param name="templateId"></param>
        /// <returns>Count of facilities</returns>
        [HttpPost]
        public async Task<IActionResult> GetCountOfFacilitiesForSelectedContract([FromBody]int contractId)
        {
            var result = new BaseResult<int>();
            if (contractId <= default(int))
            {
                result.IsError = true;
                result.Message = Constants.BadRequestErrorMessage.InvalidContractId;
                return BadRequest(result);
            }
            result = await contracts.GetCountOfFacilitiesForSelectedContract (contractId, base.LanguageId);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return StatusCode(500, result);
            }
            return Ok(result);
        }
        /// <summary>
        ///	Get The count of amenities for selected contract
        /// </summary>
        /// <param name="templateId"></param>
        /// <returns>Count of amenities</returns>
        [HttpPost]
        public async Task<IActionResult> GetCountOfAmenitiesForSelectedContract([FromBody]int contractId)
        {
            var result = new BaseResult<int>();
            if (contractId <= default(int))
            {
                result.IsError = true;
                result.Message = Constants.BadRequestErrorMessage.InvalidContractId;
                return BadRequest(result);
            }
            result = await contracts.GetCountOfAmenitiesForSelectedContract(contractId, base.LanguageId);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return StatusCode(500, result);
            }
            return Ok(result);
        }
        /// <summary>
        /// Get the count of  Facilities and  Amenities for selected contract
        /// </summary>
        /// <param name="templateId"></param>
        /// <returns>Count of facilities and amenities</returns>
        [HttpPost]
        public async Task<IActionResult> GetCountOfFacilitiesAndAmenitiesForSelectedContract([FromBody]int contractId)
        {
            var result = new BaseResult<HotelFacilityRoomAmenity>();
            if (contractId <= default(int))
            {
                result.IsError = true;
                result.Message = Constants.BadRequestErrorMessage.InvalidTemplateId;
                return BadRequest(result);
            }
            var facilityCount = await contracts.GetCountOfFacilitiesForSelectedContract(contractId, base.LanguageId);
            var amenityCount = await contracts.GetCountOfAmenitiesForSelectedContract(contractId, base.LanguageId);
            if (facilityCount.IsError && facilityCount.ExceptionMessage != null || amenityCount.IsError && amenityCount.ExceptionMessage != null)
            {
                return StatusCode(500, result);
            }
            result.Result = ContractsResponseMapper.MapCountOfHotelFacilityRoomAmenity(facilityCount.Result, amenityCount.Result);
            return Ok(result);
        }

        /// <summary>
        /// Get contract hotel details by contractId
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns>ContractHotelDetailsViewModel</returns>
        [HttpPost]
        public async Task<IActionResult> GetContractHotelDetailsByContractId([FromBody]int contractId)
        {
            BaseResult<ContractHotelDetailsViewModel> contractHotelDetailsResult = new BaseResult<ContractHotelDetailsViewModel>();
            ContractHotelDetailsViewModel result = new ContractHotelDetailsViewModel();

            if (contractId <= default(int))
            {
                contractHotelDetailsResult.IsError = true;
                contractHotelDetailsResult.Message = string.Format(coreHelper.Constants.ErrorMessage.InvalidId, contractId);
                return BadRequest(contractHotelDetailsResult);
            }
            var contractHotelDetails = await this.contracts.GetContractHotelDetailsByContractId(contractId, base.LanguageId).ConfigureAwait(false);
            if (contractHotelDetails.IsError && contractHotelDetails.ExceptionMessage != null)
            {
                return new StatusCodeResult(500);
            }
            else if (contractHotelDetails.Result == null || !contractHotelDetails.Result.Any())
            {
                return new NoContentResult();
            }
            result.ContractHotelDetailsModel = HotelManagementResponseMapper.MapHotelDetailsToHotelDetailsViewModel(contractHotelDetails);

            var contractHotelFields = await this.contracts.GetHotelFieldsForContract(contractId, base.LanguageId).ConfigureAwait(false);
            if (contractHotelFields.IsError && contractHotelFields.ExceptionMessage != null)
            {
                return new StatusCodeResult(500);
            }
            else if (contractHotelFields.Result == null || !contractHotelFields.Result.Any())
            {
                return new NoContentResult();
            }
            result.ContractHotelFieldsList.AddRange(ContractsResponseMapper.MapContractHotelFields(contractHotelFields.Result).Result);
            contractHotelDetailsResult.Result = result;
            return Ok(contractHotelDetailsResult);
        }

        /// <summary>
        /// check if contract exist or not by contract name
        /// </summary>
        /// <param name="contractName"></param>
        /// <returns>bool</returns>
        [HttpPost]
        public async Task<IActionResult> IsContractExist([FromBody] string contractName)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            
            if (contractName == null)
            {
                result.IsError = true;
                result.Message = Core.Model.Helper.Constants.ErrorMessage.InvalidId;
                return this.BadRequest(result);
            }
            result = await contracts.IsContractExist(contractName).ConfigureAwait(false);
            if (result.IsError && result.ExceptionMessage != null)
            {
                return StatusCode(500, result);
            }
            return this.Ok(result);
           
        }

    }
}
