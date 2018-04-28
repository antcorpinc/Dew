using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Helper.Mapper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Contracts;
using MG.Jarvis.Core.Model.Hotel;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace MG.Jarvis.Api.Extranet.Repositories
{

    public class ContractStaticRepository : IContractStatic
    {
        #region private variable
        private IConnection<Contract> iContract;
        private IConfiguration iConfiguration;
        private IConnection<ContractOverview> iContractListing;
        private IConnection<ContractHotelProperties> iContractHotelProperties;
        private IConnection<TemplateHotelField> iTemplateHotelProperties;
        private IConnection<TemplateRoomField> iTemplateRoomProperties;
        private IConnection<TemplateClauseLibraryRelation> iTemplateClauseLibraryRelation;
        private IConnection<ContractRoomProperties> iContractRoomProperties;
        private IConnection<ContractHotel> iContractHotel;
        private IConnection<Hotel> iHotel;
        private IConnection<Contacts> iContacts;
        private IConnection<ContractContact> iContractContact;
        private IConnection<ContractHotelTaxRelation> iContractHotelTaxRelation;
        private IConnection<ContractHotelPaymentMethodRelation> iContractHotelPaymentMethodRelation;
        private IConnection<ContractEmailReservation> iContractEmailReservation;
        private IConnection<ContractTelephoneReservation> iContractTelephoneReservation;
        private IConnection<ContractClauseLibraryRelation> iContractClauseLibraryRelation;
        private IConnection<ClauseLibrary> iClauseLibrary;
        private IConnection<ContractTerm> iContractTermLibrary;
        #endregion private variable

        #region ctor
        public ContractStaticRepository(
            IConnection<Contract> iContract,
            IConnection<ContractOverview> iContractListing,
            IConfiguration iConfiguration,
            IConnection<ContractHotelProperties> iContractHotelProperties,
            IConnection<TemplateHotelField> iTemplateHotelProperties,
            IConnection<TemplateRoomField> iTemplateRoomProperties,
            IConnection<ContractRoomProperties> iContractRoomProperties,
            IConnection<ContractHotel> iContractHotel,
            IConnection<Hotel> iHotel,
            IConnection<ContractHotelTaxRelation> iContractHotelTaxRelation,
            IConnection<ContractContact> iContractContact,
            IConnection<ContractHotelPaymentMethodRelation> iContractHotelPaymentMethodRelation,
            IConnection<ContractEmailReservation> iContractEmailReservation,
            IConnection<ContractTelephoneReservation> iContractTelephoneReservation,
            IConnection<TemplateClauseLibraryRelation> iTemplateClauseLibraryRelation,
            IConnection<ContractClauseLibraryRelation> iContractClauseLibraryRelation,
            IConnection<ClauseLibrary> iClauseLibrary,
            IConnection<ContractTerm> iContractTermLibrary
            )
        {
            this.iContract = iContract;
            this.iContractListing = iContractListing;
            this.iConfiguration = iConfiguration;
            this.iContractHotelProperties = iContractHotelProperties;
            this.iContractRoomProperties = iContractRoomProperties;
            this.iTemplateHotelProperties = iTemplateHotelProperties;
            this.iTemplateRoomProperties = iTemplateRoomProperties;
            this.iContractHotel = iContractHotel;
            this.iHotel = iHotel;
            this.iContractHotelTaxRelation = iContractHotelTaxRelation;
            this.iContractContact = iContractContact;
            this.iContractHotelPaymentMethodRelation = iContractHotelPaymentMethodRelation;
            this.iContractEmailReservation = iContractEmailReservation;
            this.iContractTelephoneReservation = iContractTelephoneReservation;
            this.iTemplateClauseLibraryRelation = iTemplateClauseLibraryRelation;
            this.iContractClauseLibraryRelation = iContractClauseLibraryRelation;
            this.iClauseLibrary = iClauseLibrary;
            this.iContractTermLibrary = iContractTermLibrary;
        }
        #endregion ctor

        /// <summary>
        /// CreateContract
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<ContractStaticViewModel>></returns>
        public async Task<BaseResult<ContractStaticViewModel>> CreateContract(ContractStaticViewModel contractStaticViewModel,string loggedUser)
        {
            var result = new BaseResult<ContractStaticViewModel>() { Result = new ContractStaticViewModel() };
            var insertResult = new BaseResult<long>();
            var updateResult = new BaseResult<bool>();
            var contract = this.iContract.GetEntity(id: contractStaticViewModel.ContractId).Result.Result;
            result.Result.Id = contractStaticViewModel.ContractId;
            contract = DbMapperMasterdata.AutomapperContract(contractStaticViewModel, contract, loggedUser, contractStaticViewModel.ObjectState);

            if (contractStaticViewModel.ObjectState == ObjectState.Added)
            {
                contract.StatusID = 1;  /// draft
                insertResult = await this.iContract.InsertEntity(contract).ConfigureAwait(false);
                contractStaticViewModel.ContractId = (int)insertResult.Result;
                result.Result.Id = (int)insertResult.Result;
            }
            if(contractStaticViewModel.ObjectState == ObjectState.Modified)
            {
                var contractModified = AutoMapper.Mapper.Map<Contract>(contractStaticViewModel);
                updateResult = await iContract.UpdateEntityByDapper(contractModified).ConfigureAwait(false);
                result.Result.Id = contractStaticViewModel.ContractId;
            }

            var insertResultHotelFields = await 
                this.InsertTemplateFieldsToContractFieldsHotel(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            var insertResultRoomFields = await 
                this.InsertTemplateFieldsToContractFieldsRoom(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            var insertContractClausesLibraryRelation = await 
                this.InsertTemplateClausesToContractClausesLibrary(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            await this.SaveContractHotel(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            await this.SaveContractContact(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            await this.SaveContractHotelTax(contractStaticViewModel, loggedUser).ConfigureAwait(false);

            await this.SaveContractPaymentMethod(contractStaticViewModel).ConfigureAwait(false);

            if (contractStaticViewModel.ObjectState == ObjectState.Added && insertResult.IsError && insertResult.ExceptionMessage != null)
            {
                result.IsError = insertResult.IsError;
                result.ExceptionMessage = insertResult.ExceptionMessage;
                result.Result.Id = (int)insertResult.Result;
                return result;
            }
            if(contractStaticViewModel.ObjectState == ObjectState.Modified && updateResult.IsError && updateResult.ExceptionMessage != null )
            {
                result.IsError = updateResult.IsError;
                result.ExceptionMessage = updateResult.ExceptionMessage;
                result.Result.Id = contractStaticViewModel.ContractId;
                return result;
            }
           
            return result;
        }

        /// <summary>
        /// GetContractProperties
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns>Task<BaseResult<List<ContractHotelPropertiesViewModel>>></returns>
        public async Task<BaseResult<List<ContractHotelPropertiesViewModel>>> GetContractProperties(int contractId)
        {

            var result = new BaseResult<List<ContractHotelPropertiesViewModel>>() { Result = new List<ContractHotelPropertiesViewModel>() };

            List<ContractHotelProperties> hotelList;
            List<ContractRoomProperties> roomList;
            List<ContractClauseLibraryRelation> clauseList;

            this.GetContractProperties(contractId, out hotelList, out roomList, out clauseList);
            List<ContractHotelPropertiesViewModel> mainList1 = new List<ContractHotelPropertiesViewModel>();
            List<ContractHotelPropertiesViewModel> mainList2 = new List<ContractHotelPropertiesViewModel>();
            List<ContractHotelPropertiesViewModel> mainList3 = new List<ContractHotelPropertiesViewModel>();
            ContractHotelPropertiesViewModel
                mappedHotelList = new ContractHotelPropertiesViewModel() { FeildIdList = new List<FieldViewModel>() },
                mappedRoomList = new ContractHotelPropertiesViewModel() { FeildIdList = new List<FieldViewModel>() },
                mappedClauseLibraryList = new ContractHotelPropertiesViewModel() { FeildIdList = new List<FieldViewModel>() };

            foreach (var item in hotelList)
            {
                var model = new FieldViewModel();
                model.Id = item.FieldId;
                mappedHotelList.FeildIdList.Add(model);
            }
            mappedHotelList.Name = "HotelList";
            mainList1.Add(mappedHotelList);
           

            foreach (var item in roomList)
            {
                var model = new FieldViewModel();
                model.Id = item.FieldId;
                mappedRoomList.FeildIdList.Add(model);
            }
            mappedRoomList.Name = "mappedRoomList";
            mainList2.Add(mappedRoomList);
       
            foreach (var item in clauseList)
            {
                var model = new FieldViewModel();
                model.ClauseLibraryId = item.ClauseLibraryId;
                mappedClauseLibraryList.FeildIdList.Add(model);
            }
            mappedClauseLibraryList.Name = "mappedClauseLibraryList";
            mainList3.Add(mappedClauseLibraryList);
            result.Result.AddRange(mainList1);
            result.Result.AddRange(mainList2);
            result.Result.AddRange(mainList3);

            return result;
        }

        /// <summary>
        /// GetRoomAndHotelProperties
        /// </summary>
        /// <param name="contractId"></param>
        /// <param name="hotelList"></param>
        /// <param name="roomList"></param>
        /// <returns></returns>
        private void GetContractProperties(int contractId, out List<ContractHotelProperties> hotelList, out List<ContractRoomProperties> roomList, out List<ContractClauseLibraryRelation> clauseList)
        {
            var result = new BaseResult<Contract>() { Result = new Contract() };

            var paramsDynamicParameters = new DynamicParameters();
            paramsDynamicParameters.Add(Constants.StoredProcedureParameters.ContractId, contractId);
            hotelList = this.iContractHotelProperties.ExecuteStoredProcedure(
                Constants.StoredProcedure.GetHotelFieldsByContractId,
                paramsDynamicParameters).Result.Result;
            roomList = this.iContractRoomProperties.ExecuteStoredProcedure(
                Constants.StoredProcedure.GetRoomFieldsByContractId,
                paramsDynamicParameters).Result.Result;
            clauseList = this.iContractClauseLibraryRelation.ExecuteStoredProcedure(
                Constants.StoredProcedure.GetContractHotelClausesByContractId,
                paramsDynamicParameters).Result.Result;
        }

        /// <summary>
        /// SaveContractHotel
        /// </summary>
        /// <param name="contractStaticViewModel"/>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<ContractHotel>></returns>
        private async Task<BaseResult<ContractHotel>> SaveContractHotel(ContractStaticViewModel contractStaticViewModel,string loggedUser)
        {
            var result = new BaseResult<ContractHotel>() { Result = new ContractHotel() };
            var hotel = this.iHotel.GetEntity(contractStaticViewModel.HotelDetailsViewModel.HotelId).Result.Result;

            if (contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Added)
            {
                var model = new ContractHotel();
                var mappedModel = DbMapperMasterdata.AutomapperContractHotel(contractStaticViewModel, model, hotel, loggedUser, contractStaticViewModel.HotelDetailsViewModel.ObjectState);

                await this.SaveContractEmailReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);

                await this.SaveContractTelephoneReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);

                var insertResult = await this.iContractHotel.InsertEntity(mappedModel).ConfigureAwait(false);
                if (insertResult.IsError && insertResult.ExceptionMessage != null)
                {
                    result.IsError = insertResult.IsError;
                    result.ExceptionMessage = insertResult.ExceptionMessage;
                }
                else if (insertResult == null)
                {
                    result = null;
                    return result;
                }
                result.Result.Id = (int)insertResult.Result;
            }
            if(contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Modified)
            {
                var model1 = await this.iContractHotel.GetEntity(contractStaticViewModel.ContractId).ConfigureAwait(false);
                var model = await iContractHotel.GetListByPredicate(p => p.HotelId == contractStaticViewModel.HotelDetailsViewModel.HotelId && p.ContractId == contractStaticViewModel.ContractId).ConfigureAwait(false);
                var mappedModel = DbMapperMasterdata.AutomapperContractHotel(contractStaticViewModel, model.Result[0], hotel, loggedUser,contractStaticViewModel.HotelDetailsViewModel.ObjectState);
                var updateResult = await this.iContractHotel.UpdateEntityByDapper(mappedModel).ConfigureAwait(false);

                await this.SaveContractEmailReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);

                await this.SaveContractTelephoneReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);

                if (updateResult.IsError && updateResult.ExceptionMessage != null)
                {
                    result.IsError = updateResult.IsError;
                    result.ExceptionMessage = updateResult.ExceptionMessage;
                }
                else if (updateResult == null)
                {
                    result = null;
                    return result;
                }
                if (updateResult.Result == true)
                {
                    result.Result.ContractId = contractStaticViewModel.ContractId;
                }
            }
            return result;
        }

        /// <summary>
        /// SaveContractContact
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> SaveContractContact(ContractStaticViewModel contractStaticViewModel,string loggedUser)
        {
            var insertList = new List<ContractContact>();
            var updateList = new List<ContractContact>();
            var result = new BaseResult<long>();
            foreach (var item in contractStaticViewModel.HotelDetailsViewModel.ContactDetails)
            {
                if(item.ObjectState== ObjectState.Added)
                {
                    item.HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId;
                    var contractContactViewModel = DbMapperMasterdata.AutomapperContractContactViewModel(item);
                    var contractContactModel = DbMapperMasterdata.AutomapperContractContact(contractContactViewModel, loggedUser);
                    contractContactModel.ContractId = contractStaticViewModel.ContractId;
                    insertList.Add(contractContactModel);
                }
            
                if (item.ObjectState == ObjectState.Modified)
                {
                    item.HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId;
                    var contractContactViewModel = DbMapperMasterdata.AutomapperContractContactViewModel(item);
                    var contractContactModel = DbMapperMasterdata.AutomapperContractContact(contractContactViewModel, loggedUser);
                    contractContactModel.ContractId = contractStaticViewModel.ContractId;
                    updateList.Add(contractContactModel);
                }
            }

            if(insertList.Count>0)
            {
                result = await iContractContact.InsertEntityList(insertList).ConfigureAwait(false);
                if (result != null && result.Result > 0)
                    result.Result = contractStaticViewModel.ContractId;
                else result.IsError = true;
            }
            if(updateList.Count>0)
            {
              var updateResult =  await iContractContact.UpdateEntityList(updateList).ConfigureAwait(false);
                if (updateResult.Result)
                    result.Result = contractStaticViewModel.ContractId;
                else result.IsError = true;
            }
            return result;
        }

        /// <summary>
        /// SaveContractHotelTax
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> SaveContractHotelTax(ContractStaticViewModel contractStaticViewModel,string loggedUser)
        {
            var result = new BaseResult<long>();
            var contractHotelTaxList = new List<ContractHotelTaxRelation>();
            foreach (var item in contractStaticViewModel.HotelDetailsViewModel.TaxDetails)
            {
                if (item.ObjectState == ObjectState.Added)
                {
                    var model = new ContractHotelTaxRelation();
                    var mappedmodel = DbMapperMasterdata.AutomapperContractHotelTaxRelation(item, model, contractStaticViewModel, loggedUser, contractStaticViewModel.ObjectState);
                    contractHotelTaxList.Add(mappedmodel);
                }
                if(item.ObjectState == ObjectState.Modified)
                {
                    var param = new DynamicParameters();
                    param.Add(Constants.StoredProcedureParameters.ContractId, contractStaticViewModel.ContractId);
                    param.Add(Constants.StoredProcedureParameters.HotelId, contractStaticViewModel.HotelDetailsViewModel.HotelId);
                    param.Add(Constants.StoredProcedureParameters.TaxTypeId, item.TaxTypeId);
                    param.Add(Constants.StoredProcedureParameters.TaxApplicabilityId, item.TaxApplicabilityId);
                    param.Add(Constants.StoredProcedureParameters.Amount, item.Amount);
                    param.Add(Constants.StoredProcedureParameters.IsIncludedInRates, item.IsIncludedInRates);
                    param.Add(Constants.StoredProcedureParameters.IsDeleted, item.IsDeleted);
                    await iContractHotelTaxRelation.ExecuteStoredProcedureDynamicModel(Constants.StoredProcedure.UpdateContractHotelTaxRelation, param).ConfigureAwait(false);
                } 
            }
            if(contractHotelTaxList != null && contractHotelTaxList.Count>0)
            {
                result = await this.iContractHotelTaxRelation.InsertEntityList(contractHotelTaxList).ConfigureAwait(false);
            }
            return result;
        }

        /// <summary>
        /// SaveContractPaymentMethod
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> SaveContractPaymentMethod(ContractStaticViewModel contractStaticViewModel)
        {
            BaseResult<long> result = new BaseResult<long>();
            if (contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.ObjectState == ObjectState.Added)
            {
                var model = new ContractHotelPaymentMethodRelation()
                {
                    ContractId = contractStaticViewModel.ContractId,
                    CurrencyId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.CurrencyId,
                    HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId,
                    IsDeleted = false,
                    PaymentMethodId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.PaymentMethodId,
                    RateTypeId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.RateTypeId
                };

                result = await this.iContractHotelPaymentMethodRelation.InsertEntity(model).ConfigureAwait(false);
                return result;
            }
            else if(contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.ObjectState == ObjectState.Modified)
            {
                var model = new ContractHotelPaymentMethodRelation()
                {
                    Id = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.HotelPaymentMethodRelationId,
                    ContractId = contractStaticViewModel.ContractId,
                    CurrencyId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.CurrencyId,
                    HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId,
                    IsDeleted = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.IsDeleted,
                    PaymentMethodId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.PaymentMethodId,
                    RateTypeId = contractStaticViewModel.HotelDetailsViewModel.HotelPaymentMethodRelation.RateTypeId
                };
                await this.iContractHotelPaymentMethodRelation.UpdateEntityByDapper(model).ConfigureAwait(false);
            }
            return result;
        }

        /// <summary>
        /// SaveContractEmailReservation
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> SaveContractEmailReservation(ContractStaticViewModel contractStaticViewModel, string loggedUser)
        {
            BaseResult<long> result = new BaseResult<long>();

            if (contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Added)
            {
                result = await CreateContractEmailReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);
                return result;
            }
            if (contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Modified)
            {
                var listDb = await this.iContractEmailReservation.GetListByPredicate(p => p.HotelId == contractStaticViewModel.HotelDetailsViewModel.HotelId && p.ContractId == contractStaticViewModel.ContractId).ConfigureAwait(false);
            var contractEmails = contractStaticViewModel.HotelDetailsViewModel.ReservationEmail.Split(',');
            var list = new List<ContractEmailReservation>();

                foreach (var item in listDb.Result)
                {
                    item.IsDeleted = true;
                    item.UpdatedBy = loggedUser;
                    item.UpdatedDate = DateTime.Now.JakartaOffset();
                    var model = new ContractEmailReservation()
                    {
                        Id = item.Id,
                        IsDeleted = true,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset()
                    };
                    list.Add(model);
                }
                await this.iContractEmailReservation.UpdateEntityList(listDb.Result).ConfigureAwait(false);
                await CreateContractEmailReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);
            }
            return result;
        }

        /// <summary>
        /// CreateContractEmailReservation
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> CreateContractEmailReservation(ContractStaticViewModel contractStaticViewModel, string loggedUser)
        {
            BaseResult<long> result = new BaseResult<long>();
            var contractEmails = contractStaticViewModel.HotelDetailsViewModel.ReservationEmail.Split(',');

            var list = new List<ContractEmailReservation>();

            foreach (var item in contractEmails)
            {
                var model = new ContractEmailReservation()
                {
                    ContractId = contractStaticViewModel.ContractId,
                    Email = item,
                    HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId,
                    IsDeleted = false,
                    CreatedBy = loggedUser,
                    CreatedDate = DateTime.Now.JakartaOffset(),
                    UpdatedBy = loggedUser,
                    UpdatedDate = DateTime.Now.JakartaOffset()
                };
                list.Add(model);
            }
         
            result = await this.iContractEmailReservation.InsertEntityList(list).ConfigureAwait(false);
            return result;
        }

        /// <summary>
        /// SaveContractTelephoneReservation
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> SaveContractTelephoneReservation(ContractStaticViewModel contractStaticViewModel, string loggedUser)
        {
            BaseResult<long> result = new BaseResult<long>();

            if (contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Added)
            {
                result = await CreateContractTelephoneReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);
                return result;
            }
            if (contractStaticViewModel.HotelDetailsViewModel.ObjectState == ObjectState.Modified)
            {

                var listDb = await this.iContractTelephoneReservation.GetListByPredicate(p => p.HotelId == contractStaticViewModel.HotelDetailsViewModel.HotelId && p.ContractId == contractStaticViewModel.ContractId).ConfigureAwait(false);
                var contractEmails = contractStaticViewModel.HotelDetailsViewModel.ReservationContactNo.Split(',');
                var list = new List<ContractTelephoneReservation>();

                foreach (var item in listDb.Result)
                {
                    item.IsDeleted = true;
                    item.UpdatedBy = loggedUser;
                    item.UpdatedDate = DateTime.Now.JakartaOffset();
                    var model = new ContractTelephoneReservation()
                    {
                        IsDeleted = true,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset()
                    };
                    list.Add(model);
                }
                await this.iContractTelephoneReservation.UpdateEntityList(listDb.Result).ConfigureAwait(false);
                await CreateContractTelephoneReservation(contractStaticViewModel, loggedUser).ConfigureAwait(false);
            }
            return result;
        }

        /// <summary>
        /// CreateContractTelephoneReservation
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>Task<BaseResult<long>></returns>
        private async Task<BaseResult<long>> CreateContractTelephoneReservation(ContractStaticViewModel contractStaticViewModel, string loggedUser)
        {
            BaseResult<long> result = new BaseResult<long>();
            var contractEmails = contractStaticViewModel.HotelDetailsViewModel.ReservationContactNo.Split(',');

            var list = new List<ContractTelephoneReservation>();

            foreach (var item in contractEmails)
            {
                var model = new ContractTelephoneReservation()
                {
                    ContractId = contractStaticViewModel.ContractId,
                    Telephone = item,
                    HotelId = contractStaticViewModel.HotelDetailsViewModel.HotelId,
                    IsDeleted = false,
                    CreatedBy = loggedUser,
                    CreatedDate = DateTime.Now.JakartaOffset(),
                    UpdatedBy = loggedUser,
                    UpdatedDate = DateTime.Now.JakartaOffset()
                };
                list.Add(model);
            }

            result = await this.iContractTelephoneReservation.InsertEntityList(list).ConfigureAwait(false);
            return result;
        }

        /// <summary>
        /// InsertTemplateFieldsToContractFieldsHotel
        /// </summary>
        /// <param name="contractViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns></returns>
        private async Task<BaseResult<long>> InsertTemplateFieldsToContractFieldsHotel(ContractStaticViewModel contractViewModel, string loggedUser)
        {
            var insertResult = new BaseResult<long>();
            if (contractViewModel.ObjectState == ObjectState.Added)
            {
                var hotelTemplateFields = await this.iTemplateHotelProperties.GetListByPredicate(p => p.IsSelected == true && p.TemplateId == contractViewModel.TemplateId).ConfigureAwait(false);
                var insertList = new List<ContractHotelProperties>();
                foreach (var item in hotelTemplateFields.Result)
                {
                    var entity = new ContractHotelProperties
                    {
                        ContractId = contractViewModel.ContractId,
                        IsDeleted = item.IsDeleted,
                        FieldId = item.FieldId,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = loggedUser,
                        CreatedDate = DateTime.Now.JakartaOffset()
                    };
                    insertList.Add(entity);
                }
                insertResult = await this.iContractHotelProperties.InsertEntityList(insertList).ConfigureAwait(false);
            }
            if (contractViewModel.ObjectState == ObjectState.Modified)
            {
                var hotelContractProperties = await this.iContractHotelProperties.GetListByPredicate(p => p.ContractId == contractViewModel.ContractId && p.IsDeleted == false).ConfigureAwait(false);
                var updateList = new List<ContractHotelProperties>();
                foreach (var item in hotelContractProperties.Result)
                {
                    var model = new ContractHotelProperties
                    {
                        ContractId = contractViewModel.ContractId,
                        IsDeleted = item.IsDeleted,
                        FieldId = item.FieldId,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = item.CreatedBy,
                        CreatedDate = item.CreatedDate
                    };
                    updateList.Add(item);
                }
                await this.iContractHotelProperties.UpdateEntityList(updateList).ConfigureAwait(false);
            }
            return insertResult;
        }

        /// <summary>
        /// InsertTemplateFieldsToContractFieldsRoom
        /// </summary>
        /// <param name="contractViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns></returns>
        private async Task<BaseResult<long>> InsertTemplateFieldsToContractFieldsRoom(ContractStaticViewModel contractViewModel, string loggedUser)
        {

            var insertResult = new BaseResult<long>();
            if (contractViewModel.ObjectState == ObjectState.Added)
            {
                var roomFields = await this.iTemplateRoomProperties
                                     .GetListByPredicate(
                                         p => p.IsSelected == true && p.TemplateId == contractViewModel.TemplateId)
                                     .ConfigureAwait(false);

                var insertList = new List<ContractRoomProperties>();

                foreach (var item in roomFields.Result)
                {
                    var entity = new ContractRoomProperties
                    {
                        ContractId = contractViewModel.ContractId,
                        IsDeleted = item.IsDeleted,
                        FieldId = item.FieldId,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = loggedUser,
                        CreatedDate = DateTime.Now.JakartaOffset()
                    };
                    insertList.Add(entity);
                }

                insertResult = await this.iContractRoomProperties.InsertEntityList(insertList).ConfigureAwait(false);
            }
            if(contractViewModel.ObjectState == ObjectState.Modified )
            {
                var roomFields = await this.iContractRoomProperties
                                     .GetListByPredicate(
                                         p => p.ContractId == contractViewModel.ContractId && p.IsDeleted == false)
                                     .ConfigureAwait(false);

                var updateList = new List<ContractRoomProperties>();

                foreach (var item in roomFields.Result)
                {
                    var entity = new ContractRoomProperties
                    {
                        ContractId = contractViewModel.ContractId,
                        IsDeleted = item.IsDeleted,
                        FieldId = item.FieldId,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = item.CreatedBy,
                        CreatedDate = item.CreatedDate
                    };
                    updateList.Add(entity);
                }

                await this.iContractRoomProperties.UpdateEntityList(updateList).ConfigureAwait(false);
            }

            return insertResult;
        }

        /// <summary>
        /// InsertTemplateFieldsToContractFieldsHotel
        /// </summary>
        /// <param name="contractViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns></returns>
        private async Task<BaseResult<long>> InsertTemplateClausesToContractClausesLibrary(ContractStaticViewModel contractViewModel, string loggedUser)
        {
            var insertResult = new BaseResult<long>();
            if (contractViewModel.ObjectState == ObjectState.Added)
            {
                var param = new DynamicParameters();
                param.Add(Constants.StoredProcedureParameters.TemplateId, contractViewModel.TemplateId);
                var clauseFields = await this.iClauseLibrary.ExecuteStoredProcedure(
                Constants.StoredProcedure.GetContractHotelClauses,
                param).ConfigureAwait(false);
                
                var insertList = new List<ContractClauseLibraryRelation>();

                foreach (var item in clauseFields.Result)
                {
                    var entity = new ContractClauseLibraryRelation
                    {
                        ContractId = contractViewModel.ContractId,
                        ClauseLibraryId = item.Id,
                        IsDeleted = item.IsDeleted,
                        IsActive = item.IsActive,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = loggedUser,
                        CreatedDate = DateTime.Now.JakartaOffset()
                    };
                    insertList.Add(entity);
                }

                insertResult = await this.iContractClauseLibraryRelation.InsertEntityList(insertList).ConfigureAwait(false);
            }

            if (contractViewModel.ObjectState == ObjectState.Modified)
            {
                var clauseFields = await this.iContractClauseLibraryRelation
                                     .GetListByPredicate(
                                         p => p.ContractId == contractViewModel.ContractId && p.IsDeleted == false)
                                     .ConfigureAwait(false);

                var updateList = new List<ContractClauseLibraryRelation>();

                foreach (var item in clauseFields.Result)
                {
                    var entity = new ContractClauseLibraryRelation
                    {
                        ContractId = contractViewModel.ContractId,
                        IsDeleted = item.IsDeleted,
                        UpdatedBy = loggedUser,
                        UpdatedDate = DateTime.Now.JakartaOffset(),
                        CreatedBy = item.CreatedBy,
                        CreatedDate = item.CreatedDate
                    };
                    updateList.Add(entity);
                }

                await this.iContractClauseLibraryRelation.UpdateEntityList(updateList).ConfigureAwait(false);
            }

            return insertResult;
        }

        /// <summary>
        /// SaveContractTerm
        /// </summary>
        /// <param name="contractTerm"></param>
        /// <returns>Task<long></returns>
        public async Task<long> SaveContractTerm(ContractTermViewModel contractTerm)
        {
            var model = AutoMapper.Mapper.Map<ContractTerm>(contractTerm);
            var result = new BaseResult<long>();
            if(contractTerm.ObjectState == ObjectState.Added)
            {
                result = await iContractTermLibrary.InsertEntity(model).ConfigureAwait(false);
                return result.Result;
            }
            else if(contractTerm.ObjectState == ObjectState.Modified)
            {
                var updateResult = await iContractTermLibrary.UpdateEntityByDapper(model).ConfigureAwait(false);
                if(updateResult.Result)
                {
                    result.Result = model.Id;
                    return result.Result;
                }
            }
            return result.Result;
        }

        /// <summary>
        /// UpdateContractTerm
        /// </summary>
        /// <param name="contractTerm"></param>
        /// <returns>Task<bool></returns>
        private async Task<bool> UpdateContractTerm(ContractTerm contractTerm)
        {
            var result = await iContractTermLibrary.UpdateEntityByDapper(contractTerm).ConfigureAwait(false);
            return result.Result;
        }
    }
}
