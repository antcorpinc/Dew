﻿using Dapper;
using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Core.DAL.Interfaces;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.ChannelManager;
using MG.Jarvis.Core.Model.Hotel;
using MG.Jarvis.Core.Model.MasterData;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class MiscellaneousDataRepository:IMiscellaneous
    {
        private IConnection<Designation> iDesignationLibrary;
        private IConnection<ChannelManagers> iChannelManagerConnectionLibrary;
        private IConnection<Langauges> iLanguageLibrary;
        private IConnection<ChannelManager> iChannelManagerLibrary;

        public MiscellaneousDataRepository(IConnection<Designation> iDesignationLibrary,
                                            IConnection<ChannelManagers> iChannelManagerConnectionLibrary
            , IConnection<Langauges> iLanguageLibrary, IConnection<ChannelManager> iChannelManagerLibrary)
        {
            this.iDesignationLibrary = iDesignationLibrary;
            this.iChannelManagerConnectionLibrary = iChannelManagerConnectionLibrary;
            this.iLanguageLibrary = iLanguageLibrary;
            this.iChannelManagerLibrary = iChannelManagerLibrary;
        }

        /// <summary>
        /// Retrun all ChannelManagers
        /// </summary>
        /// <returns></returns>
        public async Task<BaseResult<List<ChannelManager>>> GetChannelManager()
        {
            return await iChannelManagerLibrary.GetListByPredicate(p => p.IsActive == true && p.IsDeleted == false).ConfigureAwait(false);
        }

        /// <summary>
        /// Return list of languages
        /// </summary>
        /// <returns></returns>
        public async Task<BaseResult<List<Langauges>>> GetLanguages()
        {
            return await iLanguageLibrary.GetList().ConfigureAwait(false);
        }

        /// <summary>
        /// Get designation by user type
        /// </summary>
        /// <param name="userType"></param>
        /// <returns></returns>
        public async Task<BaseResult<List<Designation>>> GetDesignationByUserType(string userType)
        {
            BaseResult<List<Designation>> designationsList = new BaseResult<List<Designation>>();
            DynamicParameters paramCollection = new DynamicParameters();
            paramCollection.Add(Constants.StoredProcedureParameters.UserType, userType);
            designationsList = await iDesignationLibrary.ExecuteStoredProcedure(Constants.StoredProcedure.GetDesignationByUserType, paramCollection).ConfigureAwait(false);
            return designationsList;
        }

    }
}
