using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Request;
using MG.Jarvis.Api.Extranet.Mapper.Response;
using MG.Jarvis.Api.Extranet.Models.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Contracts;
using MG.Jarvis.Core.Model.Hotel;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class ContractRepository : IContract
    {
        #region private variable
        private IConnection<Contract> iContract;
        private IConfiguration iConfiguration;
        private IConnection<ContractOverview> iContractListing;
        private IConnection<ContractStatus> iContractStatus;
        private IConnection<ContractContact> iContractContact;
        private IConnection<ContractEmailReservation> iContractEmailReservation;
        private IConnection<ContractTelephoneReservation> iContractTelephoneReservation;
        private IConnection<ContractHotelFields> iContractHotelFieldsLibrary;
        private IConnection<ContractRoomFields> iContractRoomFieldsLibrary;
        private IConnection<ContractHotel> iContractHotel;
        private IConnection<HotelView> iHotelView;
        private IConnection<HotelContract> Contract;
        #endregion private variable

        public ContractRepository(
                                    IConnection<Contract> iContract,
                                    IConnection<ContractOverview> iContractListing,
                                    IConfiguration iConfiguration,
                                    IConnection<ContractHotel> iContractHotel,
                                    IConnection<ContractStatus> iContractStatus,
                                    IConnection<ContractContact> iContractContact,
                                    IConnection<ContractEmailReservation> iContractEmailReservation,
                                    IConnection<ContractTelephoneReservation> iContractTelephoneReservation,
                                    IConnection<ContractHotelFields> iContractHotelFieldsLibrary,
                                    IConnection<ContractRoomFields> iContractRoomFieldsLibrary,
                                    IConnection<ContractHotelFields> iContractHotelFields,
                                    IConnection<HotelView> iHotelView)
        {
            this.iContract = iContract;
            this.iContractListing = iContractListing;
            this.iConfiguration = iConfiguration;
            this.iContractHotel = iContractHotel;
            this.iContractStatus = iContractStatus;
            this.iContractContact = iContractContact;
            this.iContractEmailReservation = iContractEmailReservation;
            this.iContractTelephoneReservation = iContractTelephoneReservation;
            this.iContractHotelFieldsLibrary = iContractHotelFieldsLibrary;
            this.iContractRoomFieldsLibrary = iContractRoomFieldsLibrary;
            this.iHotelView = iHotelView;
        }

        /// <summary>
        /// Method to activate contracts by checking StartDate
        /// </summary>
        /// <param name="dateTime"></param>
        /// <returns></returns>
        public async Task<BaseResult<bool>> ActivateContract(DateTime dateTime)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            var parameters = new DynamicParameters();
            parameters.Add(Constants.StoredProcedureParameters.StartDate, dateTime.Date);
            var contractResult = await iContract.ExecuteStoredProcedure(Constants.StoredProcedure.ActivateContracts, parameters);
            result.Result = true;
            return result;
        }


        /// <summary>
        /// Method which deactivates the contract depending on the date.
        /// </summary>
        /// <param>DateTime</param>
        /// <returns>bool</returns>
        public async Task<BaseResult<bool>> DeActivateContract(DateTime dateTime)
        {
            BaseResult<bool> baseResult = new BaseResult<bool>();
            var parameters = new DynamicParameters();
            parameters.Add(Constants.StoredProcedureParameters.EndDate, dateTime.Date);
            var contracts = await iContract.ExecuteStoredProcedure(Constants.StoredProcedure.DeActivateContracts, parameters);
            if (!contracts.IsError)
            {
                baseResult.Result = true;
            }
            return baseResult;

        }

        public async Task<BaseResult<IEnumerable<dynamic>>> GetExpiredContract(ExpiredContracts request)
        {
            BaseResult<IEnumerable<dynamic>> contractList = new BaseResult<IEnumerable<dynamic>>();
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add("@AdvancementDays", request.ExpiryWarningDays);
            paramCollection.Add("@NotificationDate", request.NotificationDate);
            contractList = await iContract.ExecuteStoredProcedureDynamicModel(Constants.StoredProcedure.ExpriedContracts, paramCollection);
            return contractList;
        }
        /// <summary>
        /// Gets All contract lisiting
        /// </summary>
        /// <returns>List of contracts</returns>
        public async Task<BaseResult<List<ContractListingViewModel>>> GetAllContracts()
        {
            BaseResult<List<ContractOverview>> allContractList = new BaseResult<List<ContractOverview>>();
            DynamicParameters paramCollection = new DynamicParameters();
            allContractList = await iContractListing.ExecuteStoredProcedure(Constants.StoredProcedure.GetAllContracts, paramCollection);
            if (allContractList.IsError || allContractList.ExceptionMessage != null)
            {
                BaseResult<List<ContractListingViewModel>> baseResult = new BaseResult<List<ContractListingViewModel>>
                {
                    IsError = true,
                    ExceptionMessage = allContractList.ExceptionMessage
                };
                return baseResult;
            }
            else
            {
                BaseResult<List<ContractListingViewModel>> baseResult = ContractsResponseMapper.MapContractListingResponse(allContractList);
                if (allContractList.ExceptionMessage != null)
                {
                    baseResult.IsError = true;
                    baseResult.ExceptionMessage = allContractList.ExceptionMessage;
                    return baseResult;
                }
                else
                    return baseResult;
            }
        }
        /// <summary>
        /// create contract
        /// </summary>
        /// <param name="request"></param>
        /// <param name="userName"></param>
        /// <returns></returns>
        public async Task<BaseResult<long>> CreateContract(Contract request)
        {
            return await iContract.InsertEntity(request).ConfigureAwait(false);
        }
        /// <summary>
        /// Get contract statuses
        /// </summary>
        /// <returns></returns>
        public async Task<BaseResult<List<ContractStatus>>> GetContractStatuses()
        {
            return await iContractStatus.GetList().ConfigureAwait(false);
        }
        /// <summary>
        /// Insert hotel contract relation
        /// </summary>
        /// <param name="request"></param>
        /// <param name="userName"></param>
        /// <returns></returns>
        public async Task<BaseResult<long>> InsertContractHotel(ContractHotel request)
        {
            return await iContractHotel.InsertEntity(request).ConfigureAwait(false);
        }

        public async Task<BaseResult<long>> InsertContractContact(ContractContact request)
        {
            return await iContractContact.InsertEntity(request).ConfigureAwait(false);
        }

        public async Task<BaseResult<long>> InsertContractContacts(IList<ContractContact> request)
        {
            return await iContractContact.InsertEntityList(request).ConfigureAwait(false);
        }

        public async Task<BaseResult<long>> InsertContractEmailReservation(ContractEmailReservation request)
        {
            return await iContractEmailReservation.InsertEntity(request).ConfigureAwait(false);
        }

        public async Task<BaseResult<long>> InsertContractTelephoneReservation(ContractTelephoneReservation request)
        {
            return await iContractTelephoneReservation.InsertEntity(request).ConfigureAwait(false);
        }

        public async Task<BaseResult<long>> InsertContractTelephoneReservations(IList<ContractTelephoneReservation> request)
        {
            return await iContractTelephoneReservation.InsertEntityList(request).ConfigureAwait(false);
        }
        /// <summary>
        /// Get The count of facilities for selected template (while creating contract).
        /// </summary>
        /// <param name="templateId"></param>
        /// <param name="languageId"></param>
        /// <returns>Count of facilities</returns>
        public async Task<BaseResult<int>> GetCountOfFacilitiesForSelectedContract(int contractId, int languageId)
        {
            var result = new BaseResult<int>();
            DynamicParameters paramCollection = ContractsRequestMapper.CreateContractFieldsRequestParams(contractId, languageId, true);
            var list = await iContractHotelFieldsLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetHotelFieldsByContractId, paramCollection).ConfigureAwait(false);
            if (list.IsError == true && list.ExceptionMessage != null)
            {
                result.IsError = list.IsError;
                result.ExceptionMessage = list.ExceptionMessage;
                return result;
            }
            if (list != null && list.Result.Any())
            {
                var count = list.Result.Count(a => !a.IsConfigurable || (a.IsSelected && a.IsConfigurable));
                result.Result = count;
                return result;
            }
            return result;
        }
        /// <summary>
        /// Get The count of amenities for selected template (while creating contract).
        /// </summary>
        /// <param name="templateId"></param>
        /// <param name="languageId"></param>
        /// <returns> Count of amenities</returns>
        public async Task<BaseResult<int>> GetCountOfAmenitiesForSelectedContract(int contractId, int languageId)
        {
            var result = new BaseResult<int>();
            DynamicParameters paramCollection = ContractsRequestMapper.CreateContractFieldsRequestParams(contractId, languageId, true);
            var list = await iContractRoomFieldsLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetRoomFieldsByContractId, paramCollection).ConfigureAwait(false);
            if (list.IsError == true && list.ExceptionMessage != null)
            {
                result.IsError = list.IsError;
                result.ExceptionMessage = list.ExceptionMessage;
                return result;
            }
            if (list != null && list.Result.Any())
            {
                var count = list.Result.Count(a => !a.IsConfigurable || (a.IsSelected && a.IsConfigurable));
                result.Result = count;
                return result;
            }
            return result;
        }

        /// <summary>
        /// Get Contract HotelDetails By ContractId
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<HotelView>>> GetContractHotelDetailsByContractId(int contractId, int languageId)
        {
            int hotelId = 0;
            var contractHotelList = await iContractHotel.GetListByPredicate(id=>id.ContractId==contractId && id.IsActive && !id.IsDeleted).ConfigureAwait(false);
            if(contractHotelList.Result!=null && contractHotelList.Result.Any())
            {
                hotelId = contractHotelList.Result.First().HotelId;
            }
            DynamicParameters param = new DynamicParameters();
            param.Add(Constants.StoredProcedureParameters.HotelId, hotelId);
            param.Add(Constants.StoredProcedureParameters.ContractId, contractId);
            param.Add(Constants.StoredProcedureParameters.LanguageId, languageId);
            return await iHotelView.ExecuteStoredProcedure(Constants.StoredProcedure.GetContractHotelDetails, param).ConfigureAwait(false);
        }
        /// <summary>
        /// Gets selected facility groups for that contract
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<ContractHotelFields>>> GetHotelFieldsForContract(int contractId, int languageId)
        {
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.ContractId, contractId);
            paramCollection.Add(Constants.StoredProcedureParameters.IsFacility, false);
            paramCollection.Add(Constants.StoredProcedureParameters.LanguageId, languageId);
            return await iContractHotelFieldsLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetHotelFieldsByContractId, paramCollection).ConfigureAwait(false);
        }

        /// <summary>
        /// check if contract exist or not by contract name
        /// </summary>
        /// <param name="contractName"></param>
        /// <returns></returns>
        public async Task<BaseResult<bool>> IsContractExist(string contractName)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            result.Result = true;
            Func<Contract, bool> getContract = contract => contract.Name.Equals(contractName, StringComparison.OrdinalIgnoreCase) && contract.IsDeleted == false;
            var contractList = await iContract.GetListByPredicate(getContract).ConfigureAwait(false);
            if(contractList.Result.Count() == 0)
            {
                result.Result = false;
            }
            return result;
        }
      
    }
}
