using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model.Contracts;
using MG.Jarvis.Core.Model.Hotel;
using System;
using System.Collections.Generic;

namespace MG.Jarvis.Api.Extranet.Mapper.Request
{
    public static class ContractsRequestMapper
    {
        /// <summary>
        /// Create Parameters for Template Clause Library Fields
        /// </summary>
        /// <param name="templateId">template Id</param>
        /// <param name="languageId">language Id</param>
        /// <returns>Parameters for Template Clause Library Fields</returns>
        public static DynamicParameters CreateTemplateClauseLibraryFieldsRequest(int templateId, int languageId)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add(Constants.StoredProcedureParameters.TemplateId, templateId);
            param.Add(Constants.StoredProcedureParameters.LanguageId, languageId);
            return param;
        }

        /// <summary>
        /// Update Template Clause Library Fields Request
        /// </summary>
        /// <param name="item">Clause Library Fields</param>
        /// <param name="userName">userName</param>
        /// <param name="templateId">templateId</param>
        /// <returns>Update Template Clause Library Fields Request</returns>
        public static DynamicParameters UpdateTemplateClauseLibraryFieldsRequest(TemplateClauseLibraryViewModel item, string userName, int templateId)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add(Constants.StoredProcedureParameters.TemplateId, templateId);
            param.Add(Constants.StoredProcedureParameters.ClauseLibraryId, item.ClauseLibraryId);
            param.Add(Constants.StoredProcedureParameters.IsSelected, item.IsSelected);
            param.Add(Constants.StoredProcedureParameters.UpdatedBy, userName);
            param.Add(Constants.StoredProcedureParameters.UpdatedDate, DateTime.Now.JakartaOffset());
            return param;
        }
        public static Contract MapToContractModel(ContractViewModel source,string userName)
        {
            var dest=AutoMapper.Mapper.Map<Contract>(source);
            dest.UpdatedBy = dest.CreatedBy = userName;
            dest.UpdatedDate = dest.CreatedDate = DateTime.Now.JakartaOffset();
            return dest;
        }
        public static ContractHotel MapToContractHotelModel(HotelDetailsViewModel source, string userName)
        {
            var dest = AutoMapper.Mapper.Map<ContractHotel>(source);
            dest.UpdatedBy = dest.CreatedBy = userName;
            dest.UpdatedDate = dest.CreatedDate = DateTime.Now.JakartaOffset();
            return dest;
        }
        public static ContractContact MapToContractContactModel(ContactDetailsViewModel source, string userName, int contractId, int hotelId)
        {
            var dest = AutoMapper.Mapper.Map<ContractContact>(source);
            dest.ContractId = contractId;
            dest.HotelId = hotelId;
            dest.UpdatedBy = dest.CreatedBy = userName;
            dest.UpdatedDate = dest.CreatedDate = DateTime.Now.JakartaOffset();
            return dest;
        }
        public static List<ContractContact> MapToContractContactModelList(List<ContactDetailsViewModel> source, string userName,int contractId,int hotelId)
        {
            var dest = new List<ContractContact>();
            foreach(var item in source)
            {
                dest.Add(MapToContractContactModel(item,userName, contractId, hotelId));
            }
            return dest;
        }
        public static ContractEmailReservation MapToContractEmailReservationModel(HotelDetailsViewModel source, int contractId, string userName)
        {
            var dest = AutoMapper.Mapper.Map<ContractEmailReservation>(source);
            dest.ContractId = contractId;
            dest.CreatedBy = dest.UpdatedBy=userName;
            dest.CreatedDate = dest.UpdatedDate = DateTime.Now.JakartaOffset();
            return dest;
        }
        internal static ContractTelephoneReservation MapToContractTelephoneReservationModel(string telephone, string userName, int contractId,int hotelId)
        {
            return new ContractTelephoneReservation()
            {
                Telephone = telephone,
                HotelId = hotelId,
                ContractId = contractId,
                CreatedBy = userName,
                UpdatedBy = userName,
                CreatedDate = DateTime.Now.JakartaOffset(),
                UpdatedDate = DateTime.Now.JakartaOffset()
            };
        }
        internal static IList<ContractTelephoneReservation> MapToContractTelephoneReservationModelList(string telephoneReservationString, string userName, int contractId, int hotelId)
        {
            var telephoneReservations = new List<ContractTelephoneReservation>();
            var telephones = telephoneReservationString.Split(',', StringSplitOptions.RemoveEmptyEntries);
            foreach(var telephone in telephones)
            {
                telephoneReservations.Add(MapToContractTelephoneReservationModel(telephone, userName,contractId, hotelId));
            }
            return telephoneReservations;
        }
        /// <summary>
        /// Maps dynamic parameters for the stored procedure to get Facility groups 
        /// </summary>
        /// <param name="contractId"></param>
        /// <param name="languageId"></param>
        /// <param name="IsFacility"></param>
        /// <returns></returns>
        public static DynamicParameters CreateContractFieldsRequestParams(int contractId, int languageId, bool IsFacility)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add(Constants.StoredProcedureParameters.ContractId, contractId);
            param.Add(Constants.StoredProcedureParameters.LanguageId, languageId);
            param.Add(Constants.StoredProcedureParameters.IsFacility, IsFacility);
            return param;
        }
    }
}
