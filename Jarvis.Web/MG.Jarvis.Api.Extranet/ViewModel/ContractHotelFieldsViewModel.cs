namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class ContractHotelFieldsViewModel
    {
        public int FacilityGroupId { get; set; }
        public bool IsSelected { get; set; }
        public bool IsConfigurable { get; set; }
        public string FacilityGroupName { get; set; }
        public int? ContractId { get; set; }
        public int FieldId { get; set; }
        public string FieldName { get; set; }
        public string Code { get; set; }
        public string IconPath { get; set; }
    }
}
