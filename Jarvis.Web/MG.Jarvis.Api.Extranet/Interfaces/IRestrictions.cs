using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.MasterData;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Interfaces
{
    public interface IRestrictions
    {
        Task<BaseResult<List<RestrictionType>>> GetRestrictionType();
        Task<BaseResult<HotelRangeRestrictionViewModel>> CreateHotelRangeRestriction(HotelRangeRestrictionViewModel hotelRangeRestrictionViewModel, string userName);
    }
}
