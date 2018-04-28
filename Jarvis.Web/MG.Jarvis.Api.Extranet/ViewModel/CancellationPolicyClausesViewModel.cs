using MG.Jarvis.Api.Extranet.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class CancellationPolicyClausesViewModel
    {
        public int? CancellationClauseChargeId { get; set; }
        public List<CancellationClauseViewModel> PolicyClausesList { get; set; }
        public ObjectState? ObjectState { get; set; }
    }
}
