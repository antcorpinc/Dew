using System.Collections.Generic;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class HotelBrandExtendedViewModel : HotelBrandViewModel
    {
        public HotelBrandExtendedViewModel()
        {
            this.Hotels = new List<HotelDetailsExtendedViewModel>();
        }

        public IList<HotelDetailsExtendedViewModel> Hotels { get; }
        public bool IsExpanded { get; set; }
    }
}
