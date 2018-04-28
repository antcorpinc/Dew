using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.MasterData;
using System.Collections.Generic;
using System.Threading.Tasks;
using MG.Jarvis.Core.Model.ChannelManager;

namespace MG.Jarvis.Api.Extranet.Interfaces
{
    public interface IMiscellaneous
    {
        Task<BaseResult<List<Langauges>>> GetLanguages();
        Task<BaseResult<List<ChannelManager>>> GetChannelManager();
        Task<BaseResult<List<Designation>>> GetDesignationByUserType(string userType);
    }
}
