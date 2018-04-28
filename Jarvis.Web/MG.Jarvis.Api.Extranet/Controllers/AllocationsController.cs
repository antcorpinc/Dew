﻿using MG.Jarvis.Api.Extranet.Interfaces;
using MG.Jarvis.Api.Extranet.Mapper.Response;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using MG.Jarvis.Core.Model.Allocations;
using MG.Jarvis.Model.Request.Allocations;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreHelper = MG.Jarvis.Core.Model.Helper;

namespace MG.Jarvis.Api.Extranet.Controllers
{
    public class AllocationsController : Controller
    {
        #region Private Methods
        private IAllocations iAllocations;
        #endregion Private Methods

        public AllocationsController(IAllocations iAllocations)
        {
            this.iAllocations = iAllocations;
        }
        /// <summary>
        /// Get the dates for calendar view of allocations
        /// </summary>
        /// <param name="request"></param>
        /// <returns>list of dates</returns>
        [HttpPost]
        public async Task<IActionResult> GetDates([FromBody]DateViewModel request)
        {
            BaseResult<List<DateListViewModel>> response = new BaseResult<List<DateListViewModel>>();
            if (request == null)
            {
                response.IsError = true;
                response.Message = coreHelper.Constants.ErrorMessage.EmptyModel;
                return BadRequest(response);
            }
            var dates = await iAllocations.GetDates(request);
            if(dates.Message!=null && dates.IsError)
            {
                return BadRequest(dates);
            }
            if (dates.IsError && dates.ExceptionMessage != null)
            {
                return StatusCode(500, dates);
            }
            if (dates.Result == null || !dates.Result.Any())
            {
                return NoContent();
            }
            response.Result = AllocationsResponseMapper.MapDatesToDateListViewModel(dates.Result);
            return Ok(response);
        }
        [HttpPost]
        public async Task<IActionResult> GetStaticAllocationDetails([FromBody]DateViewModel request)
        {
            BaseResult<Allocations> response = new BaseResult<Allocations>();
            if (request == null)
            {
                response.IsError = true;
                response.Message = coreHelper.Constants.ErrorMessage.EmptyModel;
                return BadRequest(response);
            }
            BaseResult<List<AllocationDetails>> allocationDetails = await iAllocations.GetStaticAllocaitonDetails(request);
            if (allocationDetails.Message != null && allocationDetails.IsError)
            {
                return BadRequest(allocationDetails);
            }
            if (allocationDetails.IsError && allocationDetails.ExceptionMessage != null)
            {
                return StatusCode(500, allocationDetails);
            }
            if (allocationDetails.Result == null || !allocationDetails.Result.Any())
            {
                return NoContent();
            }
            response.Result = AllocationsResponseMapper.MapAllocationDetails(allocationDetails.Result);
            return Ok(response);
        }


    }
}