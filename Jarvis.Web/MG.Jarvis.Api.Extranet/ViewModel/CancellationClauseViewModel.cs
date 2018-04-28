using MG.Jarvis.Api.Extranet.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class CancellationClauseViewModel
    {
        public int CancellationPolicyClausesId { get; set; }
        public int CancellationPolicyId { get; set; }
        public int DaysBeforeArrival { get; set; }
        public decimal PercentageCharge { get; set; }
        public bool IsDeleted { get; set; }
        public ObjectState ObjectState { get; set; }
    }
}
