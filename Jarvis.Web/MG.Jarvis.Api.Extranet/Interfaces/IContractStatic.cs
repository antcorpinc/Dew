
namespace MG.Jarvis.Api.Extranet.Interfaces
{
    using Dapper;
    using MG.Jarvis.Api.Extranet.ViewModel;
    using MG.Jarvis.Core.Model;
    using MG.Jarvis.Core.Model.Contracts;
    using MG.Jarvis.Core.Model.Hotel;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// The ContractStatic interface.
    /// </summary>
    public interface IContractStatic
    {
        /// <summary>
        /// CreateContract
        /// </summary>
        /// <param name="contractStaticViewModel"></param>
        /// <param name="loggedUser"></param>
        /// <returns>ContractStaticViewModel</returns>
        Task<BaseResult<ContractStaticViewModel>> CreateContract(ContractStaticViewModel contractStaticViewModel, string loggedUser);

        /// <summary>
        /// GetContractProperties
        /// </summary>
        /// <param name="contractId"></param>
        /// <returns>GetContractProperties</returns>
        Task<BaseResult<List<ContractHotelPropertiesViewModel>>> GetContractProperties(int contractId);

        /// <summary>
        /// SaveContractTerm
        /// </summary>
        /// <param name="contractTerm"></param>
        /// <returns>Task<long></returns>
        Task<long> SaveContractTerm(ContractTermViewModel contractTerm);
    }
}
