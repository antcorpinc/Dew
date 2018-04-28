﻿using AutoMapper;
using MG.Jarvis.Api.UserManagement.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MG.Jarvis.Api.UserManagement.Controllers
{
    [Produces("application/json")]
    [Route("api/Department")]
    public class DepartmentController : Controller
    {
        private readonly IRepository<Entities.Department> _repository;
        public DepartmentController(IRepository<Entities.Department> repository)
        {
            _repository = repository;
        }

        // GET: api/Application
        [HttpGet]
        [Route("Get")]
        public IEnumerable<Models.Department> Get()
        {
            var list = Mapper.Map<IEnumerable<Models.Department>>(_repository.Get());
            if (list != null && list.Count() > 0)
                return list.Where(a => a.IsActive == true);

            return list;
        }

        // PUT: api/Application/5
        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody] Models.Department model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = _repository.GetById(model.Id);

            if (entity == null)
                return NoContent();

            
            Mapper.Map<Models.Department, Entities.Department>(model, entity);
            _repository.Update(entity);
            return Ok();
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] Models.Base.Department model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = Get().Where(a => a.Name.ToLower() == model.Name.ToLower()).FirstOrDefault();

            if (entity != null)
                return BadRequest("Duplicate,Department with same name already exists.");

            _repository.Insert(Mapper.Map<Entities.Department>(model));
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