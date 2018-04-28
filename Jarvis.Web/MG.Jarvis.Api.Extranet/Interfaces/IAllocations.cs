using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Allocations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Interfaces
{
    public interface IAllocations
    {
        Task<BaseResult<List<AllocationCalendar>>> GetDates(DateViewModel request);
        Task<BaseResult<List<AllocationDetails>>> GetStaticAllocaitonDetails(DateViewModel request);
    }
}
