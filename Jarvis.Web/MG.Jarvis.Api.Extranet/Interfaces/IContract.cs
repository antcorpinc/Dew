using MG.Jarvis.Api.Extranet.Models.Request;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Contracts;
using MG.Jarvis.Core.Model.Hotel;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Interfaces
{
    public interface IContract
    {
        Task<BaseResult<bool>> ActivateContract(DateTime dateTime );
        Task<BaseResult<bool>> DeActivateContract(DateTime dateTime);
        Task<BaseResult<IEnumerable<dynamic>>> GetExpiredContract(ExpiredContracts request);
        Task<BaseResult<List<ContractListingViewModel>>> GetAllContracts();
        Task<BaseResult<long>> CreateContract(Contract request);
        Task<BaseResult<long>> InsertContractHotel(ContractHotel request);
        Task<BaseResult<long>> InsertContractContact(ContractContact request);
        Task<BaseResult<long>> InsertContractContacts(IList<ContractContact> request);
        Task<BaseResult<long>> InsertContractEmailReservation(ContractEmailReservation request);
        Task<BaseResult<long>> InsertContractTelephoneReservation(ContractTelephoneReservation request);
        Task<BaseResult<long>> InsertContractTelephoneReservations(IList<ContractTelephoneReservation> request);
        Task<BaseResult<List<ContractStatus>>> GetContractStatuses();
        Task<BaseResult<int>> GetCountOfFacilitiesForSelectedContract(int contractId, int languageId);
        Task<BaseResult<int>> GetCountOfAmenitiesForSelectedContract(int contractId, int languageId);

        Task<BaseResult<List<HotelView>>> GetContractHotelDetailsByContractId(int contractId, int languageId);
        Task<BaseResult<List<ContractHotelFields>>> GetHotelFieldsForContract(int contractId, int languageId);
        Task<BaseResult<bool>> IsContractExist(string contractName);
        
    }
}
