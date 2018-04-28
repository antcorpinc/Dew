using System.Collections.Generic;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class ContractHotelDetailsViewModel
    {
        public ContractHotelDetailsViewModel()
        {
            this.ContractHotelFieldsList = new List<ContractHotelFieldsViewModel>();
        }
        public HotelDetailsViewModel ContractHotelDetailsModel { get; set; }
        public List<ContractHotelFieldsViewModel> ContractHotelFieldsList { get; }
    }
}
