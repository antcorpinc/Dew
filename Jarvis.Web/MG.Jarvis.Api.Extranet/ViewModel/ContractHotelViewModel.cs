namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class ContractHotelViewModel : BaseViewModel
    {
        public int Id { get; set; }
        public int ContractId { get; set; }
        public HotelDetailsViewModel HotelDetailsViewModel { get; set; }
    }
}
