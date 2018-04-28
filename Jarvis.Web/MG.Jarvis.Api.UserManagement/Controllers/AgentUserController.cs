using AutoMapper;
using MG.Jarvis.Api.UserManagement.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using MG.Jarvis.Api.UserManagement.Context;
using Microsoft.EntityFrameworkCore;

namespace MG.Jarvis.Api.UserManagement.Controllers
{
    [Produces("application/json")]
    [Route("api/Agent")]
    public class AgentUserController : BaseUserController
    {
        private AppSettings AppSetting { get; set; }
        private IRepository<Entities.Application> _repository;
        private UserMgmtContext _context;

        public AgentUserController(UserMgmtContext context, IRepository<Entities.Application> repository, UserManager<Entities.User> userManager, IOptions<AppSettings> settings) : base(userManager)
        {
            AppSetting = settings.Value;
            _repository = repository;
            _context = context;
        }


        [Route("Get")]
        [HttpGet]
        public IEnumerable<Models.AgentUserList> Get()
        {
            //var users = base.Get(AppSetting.AgentUserType);

            var list = _context.User.Where(u => u.UserType == AppSetting.AgentUserType && !u.IsDeleted)
                       .Include(userRole => userRole.DesignationNavigation)
                      .Include(userRole => userRole.UserAppRoleMapping)
                      .ThenInclude(role => role.Application)
                      .ThenInclude(role => role.ApplicationRole)
                       .ThenInclude(role => role.Role)
                       .Include(dept => dept.Agents).ThenInclude(d => d.Agency)
                       .ThenInclude(d => d.Branch).ToList();
            return Mapper.Map<IEnumerable<Models.AgentUserList>>(list);
        }

        [Route("GetById")]
        [HttpGet]
        public Models.AgentUserList GetById(Guid userId)
        {
            var user = _context.User.Where(u => u.UserType == AppSetting.AgentUserType && u.Id == userId && !u.IsDeleted)
                        .Include(userRole => userRole.DesignationNavigation)
                        .Include(userRole => userRole.UserAppRoleMapping)
                        .ThenInclude(role => role.Application)
                        .ThenInclude(role => role.ApplicationRole)
                        .ThenInclude(role => role.Role)
                        .Include(dept => dept.Agents).ThenInclude(d => d.Agency).ThenInclude(d => d.Branch).FirstOrDefault();
            return Mapper.Map<Models.AgentUserList>(user);
        }


        [Route("Create")]
        [HttpPost]
        public async Task<IdentityResult> Create([FromBody] Models.AgentUser model)
        {
            try
            {
                var appId = _repository.Get(app => app.Name.ToLower() == AppSetting.BookingEngineAppName.ToLower()).FirstOrDefault();
                if (appId == null)
                    throw new Exception("B2B Application not found in the application table.");

                return await base.Create(Map(model, new Entities.User(), appId.Id, 'C'), AppSetting.AgentUserType, AppSetting.AgentDefaultPassword);
            }
            catch (Exception ex)
            {
                throw;
            }
        }


        [Route("Update/{id}")]
        [HttpPut]
        public async Task<IdentityResult> Update([FromRoute] Guid id, [FromBody] Models.AgentUser model)
        {
            var appId = _repository.Get(app => app.Name.ToLower() == AppSetting.BookingEngineAppName.ToLower()).FirstOrDefault();
            if (appId == null)
                throw new Exception("B2B Application not found in the application table.");

            var user = base.Get(AppSetting.AgentUserType).Find(u => u.Id == id);

            return await base.Update(Map(model, user, appId.Id, 'U'));

        }

        [Route("Delete")]
        [HttpPut]
        public new async Task<IdentityResult> Delete([FromBody]string userId)
        {
            return await base.Delete(userId);
        }

        private Entities.User Map(Models.AgentUser model, Entities.User user, Guid b2bApplicationId, char mode)
        {
            if (user == null)
                throw new Exception("User not found");

            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.PhotoUrl = model.ProfilePictureUri;
            user.UserName = model.UserName;
            user.Email = model.Email;
            user.NormalizedEmail = model.Email;
            user.ActivationDate = model.ActivationDate;
            user.DeActivateDate = (model.DeActivationDate.HasValue)? model.DeActivationDate.Value.ToUniversalTime().Add(TimeSpan.FromHours(7)) : (DateTime?)null;

            if (mode == 'C')
            {
                user.IsActive = (DateTime.UtcNow.AddHours(7).Date >= model.ActivationDate.Date) ? true : false;
            }
            else if (mode == 'U')
            {
                if (!string.IsNullOrEmpty(model.InActivationType))
                {
                    if (model.InActivationType.ToUpperInvariant() == "P")
                        user.IsActive = (DateTime.UtcNow.AddHours(7).Date >= model.DeActivationDate.Value.Date) ? false : true;
                    else if (model.InActivationType.ToUpperInvariant() == "T")
                        user.IsActive = (DateTime.UtcNow.AddHours(7).Date >= model.TemporaryInActivationDate.Value.Date) ? false : true;
                }
            }

            user.CreatedBy = model.CreatedBy;
            user.CreatedDate = model.CreatedDate;
            user.UpdatedBy = model.UpdatedBy;
            user.UpdatedDate = model.UpdatedDate;
            user.DesignationId = model.DesignationId;
            user.InActivationType = model.InActivationType;
            user.TemporaryActivationDate = model.TemporaryActivationDate;
            user.TemporaryInActivationDate = model.TemporaryInActivationDate;
            user.IsDeleted = false;
            user.PhoneNumber = model.ContactNumber;
            user.Agents = new Entities.Agents
            {
                AgencyBranchId = model.BranchId,
                AgencyId = model.AgencyId,
                IsActive = true,
                CreatedBy = model.CreatedBy,
                CreatedDate = model.CreatedDate,
                UpdatedBy = model.UpdatedBy,
                UpdatedDate = model.UpdatedDate,
                IsDeleted = false,
            };

            //user.Agents.Add(new Entities.Agents
            //{
            //    AgencyBranchId = model.BranchId,
            //    AgencyId = model.AgencyId,
            //    IsActive = model.IsActive,
            //    CreatedBy = model.CreatedBy,
            //    CreatedDate = model.CreatedDate,
            //    UpdatedBy = model.UpdatedBy,
            //    UpdatedDate = model.UpdatedDate,
            //    IsDeleted = false,
            //});

            if (!user.UserAppRoleMapping.Where(u => u.ApplicationId == b2bApplicationId && u.RoleId == model.B2BRoleId).Any())
            {
                user.UserAppRoleMapping.Clear();
                user.UserAppRoleMapping.Add(new Entities.UserAppRoleMapping
                {
                    CreatedBy = model.CreatedBy,
                    CreatedDate = model.CreatedDate,
                    UpdatedBy = model.UpdatedBy,
                    UpdatedDate = model.UpdatedDate,
                    ApplicationId = b2bApplicationId,
                    RoleId = model.B2BRoleId,
                    IsActive = true
                });
            }
            return user;
        }
    }
}