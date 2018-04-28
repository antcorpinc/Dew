using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class ContractTermViewModel : BaseViewModel
    {
        public int ContractTermId { get; set; }
        public int ContractId { get; set; }
        public int Amount { get; set; }
        public int CurrencyId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int ReconciliationPeriodId { get; set; }
        public int BalanceRemaining { get; set; }
        public string Incentive { get; set; }
        public int PeriodId { get; set; }
        public int Reduction { get; set; }
        public string Scheme { get; set; }
        public int IncentivePeriodId { get; set; }
        public DateTime IncentiveValidFrom { get; set; }
        public DateTime IncentiveValidTo { get; set; }
        public int IncentiveClaimedPeriodId { get; set; }
        public int IncentiveUnclaimedPeriodId { get; set; }
        public int BookerSchemeAmount { get; set; }
        public DateTime BookerIncentiveValidFrom { get; set; }
        public DateTime BookerIncentiveValidTo { get; set; }
        public bool IsDeductNetRates { get; set; }
        public bool IsClaimToHotel { get; set; }
    }
}
