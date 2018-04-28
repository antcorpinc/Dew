using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.MasterData;
using System.Collections.Generic;

namespace MG.Jarvis.Api.Extranet.Mapper.Response
{
    public static class RestrictionsResponseMapper
    {
        /// <summary>
        /// Map RestrictionType to RestrictionTypeViewModel
        /// </summary>
        /// <param name="restrictionTypeListDetail"></param>
        /// <returns>RestrictionTypeViewModel</returns>
        public static BaseResult<List<RestrictionTypeViewModel>> MapRestrictionType(BaseResult<List<RestrictionType>> restrictionTypeListDetail)
        {
            BaseResult<List<RestrictionTypeViewModel>> mealsViewModelList = new BaseResult<List<RestrictionTypeViewModel>>();
            List<RestrictionTypeViewModel> modelList = new List<RestrictionTypeViewModel>();
            foreach (var item in restrictionTypeListDetail.Result)
            {

                RestrictionTypeViewModel model = new RestrictionTypeViewModel
                {
                    Id = item.Id,
                    Name = item.Name,
                };
                modelList.Add(model);

            }
            mealsViewModelList.Result = modelList;
            return mealsViewModelList;
        }
    }
}
