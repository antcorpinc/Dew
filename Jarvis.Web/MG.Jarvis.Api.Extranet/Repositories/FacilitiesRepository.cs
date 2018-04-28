//// <copyright file="FacilitiesRepository.cs" company="PlaceholderCompany">
//// Copyright (c) PlaceholderCompany. All rights reserved.
//// </copyright>

namespace MG.Jarvis.Api.Extranet.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Dapper;
    using MG.Jarvis.Api.Extranet.Helper;
    using MG.Jarvis.Api.Extranet.Interfaces;
    using MG.Jarvis.Api.Extranet.ViewModel;
    using MG.Jarvis.Core.DAL.Interfaces;
    using MG.Jarvis.Core.Model;
    using MG.Jarvis.Core.Model.Contracts;
    using MG.Jarvis.Core.Model.Hotel;
    using MG.Jarvis.Core.Model.MasterData;

    public class FacilitiesRepository : IFacilities
    {
        private IConnection<HotelFacilityGroup> iHotelFacilityGroupLibrary;
        private IConnection<HotelFacilityType> iHotelFacilityTypeLibrary;
        private IConnection<HotelFacility> iHotelFacilityLibrary;
        private IConnection<HotelFacilityRelation> iHotelFacilityRelationLibrary;
        private IConnection<InOutTime> inOutTimeLibrary;
        private IConnection<ContractFacilityRelation> iContractFacilityRelationLibrary;
        private IConnection<ContractHotelFields> iContractHotelFieldsLibrary;

        public FacilitiesRepository(
                                    IConnection<HotelFacilityGroup> iHotelFacilityGroupLibrary,
                                    IConnection<HotelFacilityType> iHotelFacilityTypeLibrary,
                                    IConnection<HotelFacility> iHotelFacilityLibrary,
                                    IConnection<HotelFacilityRelation> iHotelFacilityRelationLibrary,
                                    IConnection<InOutTime> inOutTimeLibrary,
                                    IConnection<ContractFacilityRelation> iContractFacilityRelationLibrary,
                                    IConnection<ContractHotelFields> iContractHotelFieldsLibrary)
        {
            this.iHotelFacilityGroupLibrary = iHotelFacilityGroupLibrary;
            this.iHotelFacilityTypeLibrary = iHotelFacilityTypeLibrary;
            this.iHotelFacilityLibrary = iHotelFacilityLibrary;
            this.iHotelFacilityRelationLibrary = iHotelFacilityRelationLibrary;
            this.inOutTimeLibrary = inOutTimeLibrary;
            this.iContractFacilityRelationLibrary = iContractFacilityRelationLibrary;
            this.iContractHotelFieldsLibrary = iContractHotelFieldsLibrary;
        }

        /// <summary>
        /// Returns list of Hotel Facility Group list
        /// </summary>
        /// <returns>List<HotelFacilityGroup></returns>
        public async Task<BaseResult<List<HotelFacilityGroup>>> GeHotelFacilityGroup()
        {
            return await this.iHotelFacilityGroupLibrary.GetListByPredicate(x => x.IsActive == true && x.IsDeleted == false).ConfigureAwait(false);
        }

        /// <summary>
        /// Returns list of Hotel Facility type list
        /// </summary>
        /// <returns>List<HotelFacilityType></returns>
        public async Task<BaseResult<List<HotelFacilityType>>> GeHotelFacilityType()
        {
            return await this.iHotelFacilityTypeLibrary.GetListByPredicate(x => x.IsActive == true && x.IsDeleted == false).ConfigureAwait(false);
        }

        /// <summary>
        /// Returns list of Hotel Facility list
        /// </summary>
        /// <returns>List of Hotel Facility</returns>
        public async Task<BaseResult<List<HotelFacility>>> GeHotelFacility()
        {
            return await this.iHotelFacilityLibrary.GetListByPredicate(x => x.IsActive == true && x.IsDeleted == false).ConfigureAwait(false);
        }

        /// <summary>
        /// Returns list of facilities in hotels
        /// </summary>
        /// <returns>List of Selected Facilities</returns>
        public async Task<BaseResult<List<HotelFacilityRelation>>> GetSelectedFacilities(int hotelId)
        {
            return await this.iHotelFacilityRelationLibrary.GetListByPredicate(x => x.IsDeleted == false && x.HotelId == hotelId).ConfigureAwait(false);
        }

        /// <summary>
        /// Saves The Facilities of that specific hotel
        /// </summary>
        /// <param name="hotelFacilityViewModel">hotel Facility View Model</param>
        /// <returns>long</returns>
        public async Task<BaseResult<long>> InsertAndUpdateHotelFacilityRelation(HotelFacilityViewModel hotelFacilityViewModel, string userName)
        {
            BaseResult<long> result = new BaseResult<long>();

            if (hotelFacilityViewModel != null)
            {
                foreach (var item in hotelFacilityViewModel.FacilityGroupList)
                {
                    foreach (var facilityType in item.HotelFacilityTypes)
                    {
                        foreach (var facility in facilityType.FacilityList)
                        {
                            if (facility.ObjectState == ObjectState.Added)
                            {
                                if (facility.IsSelected == true)
                                {
                                    HotelFacilityRelation hotelFacilityRelation = new HotelFacilityRelation
                                    {
                                        HotelId = hotelFacilityViewModel.HotelId,
                                        FacilityId = facility.Id,
                                        FacilityTypeId = facility.FacilityTypeId,
                                        FacilityGroupId = facility.FacilityGroupId,
                                        IsDeleted = false,
                                        IsProvisioned = facility.IsSelected,
                                        CreatedBy = userName,
                                        UpdatedBy = userName,
                                        StartDate = DateTime.Now,
                                        EndDate = DateTime.Now
                                    };
                                    result = await this.iHotelFacilityRelationLibrary.InsertEntity(hotelFacilityRelation);
                                    if (result.IsError)
                                    {
                                        return result;
                                    }
                                }
                            }

                            if (facility.ObjectState == ObjectState.Deleted)
                            {
                                BaseResult<bool> updateResult = new BaseResult<bool>();
                                var facilities = this.iHotelFacilityRelationLibrary.GetListByPredicate(x => x.HotelId == hotelFacilityViewModel.HotelId && x.Id == facility.FacilityRelationId && x.FacilityId == facility.Id && x.IsDeleted==false).Result.Result.FirstOrDefault();
                                if (facilities != null)
                                {
                                    facilities.IsDeleted = true;
                                    facilities.UpdatedBy = userName;
                                    facilities.UpdatedDate = DateTime.Now.JakartaOffset();
                                    updateResult = await this.iHotelFacilityRelationLibrary.UpdateEntityByDapper(facilities);
                                    if(updateResult.IsError && updateResult.ExceptionMessage!=null)
                                    {
                                        result.IsError = updateResult.IsError;
                                        result.ExceptionMessage = updateResult.ExceptionMessage;
                                        return result;
                                    }
                                    result.Result = facilities.Id;
                                }

                                if (result.IsError)
                                {
                                    return result;
                                }
                            }
                        }
                    }
                }
            }

            return result;
        }

        /// <summary>
        /// returns Whether the hotel has facilities or not
        /// </summary>
        /// <param name="hotelId"></param>
        /// <returns>Task<BaseResult<bool>></returns>
        public async Task<BaseResult<bool>> IsHotelFacilityExits(int hotelId)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            result.Result = false;
            var selectedFacilities = await this.GetSelectedFacilities(hotelId);
            if (selectedFacilities.ExceptionMessage != null || selectedFacilities.IsError)
            {
                result.IsError = true;
                return result;
            }

            if (selectedFacilities != null)
            {
                if (selectedFacilities.Result.Count > 0)
                {
                    result.Result = true;
                }
            }

            return result;
        }
        /// <summary>
        /// Gets Selected facilities for that contract
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<ContractFacilityRelation>>> GetSelectedContractFacilities(int contractId)
        {
            return await this.iContractFacilityRelationLibrary.GetListByPredicate(x => !x.IsDeleted && x.ContractId == contractId && x.IsProvisioned).ConfigureAwait(false);
        }

        /// <summary>
        /// Gets selected facility groups for that contract
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<ContractHotelFields>>> GetFacilityGroupsForContract(int contractId, int languageId)
        {
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.ContractId, contractId);
            paramCollection.Add(Constants.StoredProcedureParameters.IsFacility, true);
            paramCollection.Add(Constants.StoredProcedureParameters.LanguageId, languageId);
            return await this.iContractHotelFieldsLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetHotelFieldsByContractId, paramCollection);
        }

        /// <summary>
        /// Saves The Facilities of that specific contract
        /// </summary>
        /// <param name="hotelFacilityViewModel">hotel Facility View Model</param>
        /// <returns>long</returns>
        public async Task<BaseResult<long>> InsertAndUpdateContractFacilityRelation(HotelFacilityViewModel facilityViewModel, string userName)
        {
            BaseResult<long> result = new BaseResult<long>();

            if (facilityViewModel != null)
            {
                foreach (var item in facilityViewModel.FacilityGroupList)
                {
                    foreach (var facilityType in item.HotelFacilityTypes)
                    {
                        foreach (var facility in facilityType.FacilityList)
                        {
                            if (facility.ObjectState == ObjectState.Added)
                            {
                                if (facility.IsSelected == true)
                                {
                                    ContractFacilityRelation contractFacilityRelation = new ContractFacilityRelation
                                    {
                                        ContractId = facilityViewModel.ContractId,
                                        FacilityId = facility.Id,
                                        FacilityTypeId = facility.FacilityTypeId,
                                        FacilityGroupId = facility.FacilityGroupId,
                                        IsDeleted = false,
                                        IsProvisioned = facility.IsSelected,
                                        CreatedBy = userName,
                                        UpdatedBy = userName,

                                    };
                                    result = await this.iContractFacilityRelationLibrary.InsertEntity(contractFacilityRelation);
                                    if (result.IsError)
                                    {
                                        return result;
                                    }
                                }
                            }

                            if (facility.ObjectState == ObjectState.Deleted)
                            {
                                BaseResult<bool> updateResult = new BaseResult<bool>();
                                var contractFacility = this.iContractFacilityRelationLibrary.GetListByPredicate(x => x.ContractId == facilityViewModel.ContractId && x.Id == facility.FacilityRelationId && x.FacilityId == facility.Id && x.IsDeleted == false).Result.Result.FirstOrDefault();
                                if (facility != null)
                                {
                                    contractFacility.IsDeleted = true;
                                    contractFacility.UpdatedBy = userName;
                                    contractFacility.UpdatedDate = DateTime.Now.JakartaOffset();
                                    updateResult = await this.iContractFacilityRelationLibrary.UpdateEntityByDapper(contractFacility);
                                    if (updateResult.IsError && updateResult.ExceptionMessage != null)
                                    {
                                        result.IsError = updateResult.IsError;
                                        result.ExceptionMessage = updateResult.ExceptionMessage;
                                        return result;
                                    }

                                }

                            }
                        }
                    }
                }
            }

            return result;
        }
        /// <summary>
        /// If facilities for contract exits or not
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns></returns>
        public async Task<BaseResult<bool>> IsContractFacilityExits(int contractId)
        {
            BaseResult<bool> result = new BaseResult<bool>();
            result.Result = false;
            var selectedFacilities = await this.GetSelectedContractFacilities(contractId);
            if (selectedFacilities.ExceptionMessage != null || selectedFacilities.IsError)
            {
                result.IsError = true;
                return result;
            }
            if (selectedFacilities != null || selectedFacilities.Result.Any())
            {
                if (selectedFacilities.Result.Count > 0)
                {
                    result.Result = true;
                }
            }
            return result;
        }
    }
}
