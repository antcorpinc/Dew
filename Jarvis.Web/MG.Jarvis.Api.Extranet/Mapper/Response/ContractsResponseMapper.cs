using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Contracts;
using MG.Jarvis.Core.Model.Hotel;
using System.Collections.Generic;
using System.Linq;

namespace MG.Jarvis.Api.Extranet.Mapper.Response
{
    public static class ContractsResponseMapper
    {
        /// <summary>
        /// Maps Contract listing details to contact listing view model 
        /// </summary>
        /// <param name="contractData">contractData</param>
        /// <returns>contact listing view model</returns>
        public static BaseResult<List<ContractListingViewModel>> MapContractListingResponse(BaseResult<List<ContractOverview>> contractData)
        {
            BaseResult<List<ContractListingViewModel>> result = new BaseResult<List<ContractListingViewModel>>();
            List<ContractListingViewModel> contracts = new List<ContractListingViewModel>();

            foreach (var item in contractData.Result)
            {
                if (item.ParentContractId == null)
                {
                    ContractListingViewModel contract = new ContractListingViewModel
                    {
                        Id = item.Id,
                        Name = item.Name,
                        StartDate = item.StartDate,
                        EndDate = item.EndDate,
                        Status = item.Status,
                        HotelName = item.HotelName,
                        Location = item.HotelLocation,
                        Designation = item.Designation,
                        ContractType=item.ContractType
                    };

                    ContactDetailsViewModel contact = new ContactDetailsViewModel
                    {
                        ContactPerson = item.ContactPerson,
                        ContactNumber = item.ContactNumber,
                        EmailAddress = item.EmailAddress
                    };

                    contract.Contacts.Add(contact);
                    contracts.Add(contract);
                }
                else
                {
                    ContractListingViewModel promo = contracts.Where(x => x.Id == item.ParentContractId).FirstOrDefault();
                    if (promo != null)
                    {
                        promo.PromoContracts.Add
                            (
                                new PromoContractsViewModel
                                {
                                    Id = item.Id,
                                    Name = item.Name,
                                    StartDate = item.StartDate,
                                    EndDate = item.EndDate,
                                    Status = item.Status,
                                    ContractType = item.ContractType
                                }
                            );
                    }
                }
            }

            result.Result = contracts;
            return result;
        }
        /// <summary>
        /// Map count of facilities and amenities
        /// </summary>
        /// <param name="facilityCount"></param>
        /// <param name="amenityCount"></param>
        /// <returns>HotelFacilityRoomAmenity</returns>
        public static HotelFacilityRoomAmenity MapCountOfHotelFacilityRoomAmenity(int facilityCount, int amenityCount)
        {
            var hoteFacilityRoomAmenity = new HotelFacilityRoomAmenity()
            {
                AmenityCount = amenityCount,
                FacilityCount = facilityCount
            };
            return hoteFacilityRoomAmenity;
        }

        /// <summary>
        /// Map ContractHotelFields to ContractHotelFieldsViewModel
        /// </summary>
        /// <param name="contractHotelFieldsList"></param>
        /// <returns></returns>
        public static BaseResult<List<ContractHotelFieldsViewModel>> MapContractHotelFields(List<ContractHotelFields> contractHotelFieldsList)
        {
            BaseResult<List<ContractHotelFieldsViewModel>> contractHotelFieldsViewModelResult = new BaseResult<List<ContractHotelFieldsViewModel>>();
            contractHotelFieldsViewModelResult.Result = new List<ContractHotelFieldsViewModel>();
            var contractHotelDetailsViewModel = AutoMapper.Mapper.Map<List<ContractHotelFields>, List<ContractHotelFieldsViewModel>>(contractHotelFieldsList);
            contractHotelFieldsViewModelResult.Result.AddRange(contractHotelDetailsViewModel);
            return contractHotelFieldsViewModelResult;
        }
    }
}
