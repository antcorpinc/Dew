﻿using AutoMapper;
using MG.Jarvis.Api.UserManagement.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MG.Jarvis.Api.UserManagement.Controllers
{
    /// <summary>
    /// Controller to perform the CRUD operations for MG Application Entity
    /// </summary>
    [Produces("application/json")]
    [Route("api/Application")]
    public class ApplicationController : Controller
    {

        private readonly IRepository<Entities.Application> _repository;
        public ApplicationController(IRepository<Entities.Application> repository)
        {
            _repository = repository;
        }

        // GET: api/Application
        [HttpGet]
        [Route("Get")]
        public IEnumerable<Models.Application> Get()
        {
            var list = Mapper.Map<IEnumerable<Models.Application>>(_repository.Get());
            if (list != null && list.Count() > 0)
                return list.Where(a => a.IsActive == true);

            return list;
        }

        // PUT: api/Application/5
        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody] Models.Application model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var entity = _repository.GetById(model.Id);

            if (entity == null)
                return NoContent();

            Mapper.Map<Models.Application, Entities.Application>(model, entity);
            _repository.Update(entity);
            return Ok();
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] Models.Base.Application model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = Get().Where(a => a.Name.ToLower() == model.Name.ToLower()).FirstOrDefault();

            if (entity != null)
                return BadRequest("Duplicate,Application with same name already exists.");

            _repository.Insert(Mapper.Map<Entities.Application>(model));
            _repository.Save();

            return Ok();
        }

        [Route("Delete")]
        [HttpDelete]
        public IActionResult Delete([FromBody] Guid id)
        {
            if (id == null || id == Guid.Empty)
                    return BadRequest();

            var entity = Get().Where(a => a.Id == id).FirstOrDefault();

            if (entity == null)
                return NoContent();

            _repository.Delete(id);
            return Ok();
        }
    }


}



