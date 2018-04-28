using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class ContractHotelPaymentMethodRelationViewModel
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public int ContractId { get; set; }
        public int PaymentMethodId { get; set; }
        public bool IsDeleted { get; set; }
        public int CurrencyId { get; set; }
        public int RateTypeId { get; set; }
    }
}
