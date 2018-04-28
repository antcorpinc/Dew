using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Controllers
{
    [Produces("application/json")]
    [Route("api/MGUser")]
    public class MGUserController : BaseUserController
    {
        private AppSettings AppSetting { get; set; }

        public MGUserController(UserManager<Entities.User> userManager, IOptions<AppSettings> settings) : base(userManager)
        {
            AppSetting = settings.Value;
        }

        [Route("Get")]
        [HttpGet]
        public IEnumerable<Models.MGUserList> Get()
        {
            var users = base.Get(AppSetting.MGUserType);
            return Mapper.Map<IEnumerable<Models.MGUserList>>(users);
        }

        [Route("GetById")]
        [HttpGet]
        public Models.MGUserList GetById(Guid userId)
        {
            var users = base.GetById(AppSetting.MGUserType, userId);
            return Mapper.Map<Models.MGUserList>(users);
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IdentityResult> Create([FromBody] Models.MGUser model)
        {
            return await base.Create(Map(model, new Entities.User(),'C'), AppSetting.MGUserType, AppSetting.MGDefaultPassword);
        }

        [Route("Update/{id}")]
        [HttpPut]
        public async Task<IdentityResult> Update([FromRoute]  Guid id,[FromBody] Models.MGUser model)
        {

           
            var user = base.Get(AppSetting.MGUserType).Find(u => u.Id == id);
            return await base.Update(Map(model, user,'U'));

        }

        [Route("Delete")]
        [HttpPut]
        public new async Task<IdentityResult> Delete([FromBody]string userId)
        {
            return await base.Delete(userId);
        }

        private Entities.User Map(Models.MGUser model, Entities.User user, char mode)
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
            user.DeActivateDate = model.DeActivationDate;
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
            user.EmployeeId = model.EmployeeId;
            user.InActivationType = model.InActivationType;
            user.TemporaryActivationDate = model.TemporaryActivationDate;
            user.TemporaryInActivationDate = model.TemporaryInActivationDate;
            user.IsDeleted = false;

            user.UserDepartments.Clear();
            foreach (var item in model.Departments)
            {
                user.UserDepartments.Add(new Entities.UserDepartments
                {
                    DepartmentId = item,
                    CreatedBy = model.CreatedBy,
                    CreatedDate = model.CreatedDate,
                    UpdatedBy = model.UpdatedBy,
                    UpdatedDate = model.UpdatedDate
                });
            }

            user.UserAppRoleMapping.Clear();
            foreach (var item in model.UserApplicationRole)
            {
                user.UserAppRoleMapping.Add(new Entities.UserAppRoleMapping
                {
                    CreatedBy = model.CreatedBy,
                    CreatedDate = model.CreatedDate,
                    UpdatedBy = model.UpdatedBy,
                    UpdatedDate = model.UpdatedDate,
                    ApplicationId = item.ApplicationId,
                    RoleId = item.RoleId,
                    IsActive = true
                });
            }


            return user;
        }


    }
}