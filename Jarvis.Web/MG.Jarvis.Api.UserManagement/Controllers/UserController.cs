using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MG.Jarvis.Api.UserManagement.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace MG.Jarvis.Api.UserManagement.Controllers
{

    /// <summary>
    /// Use by STS service.
    /// </summary>
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : BaseUserController
    {

        private AppSettings AppSetting { get; set; }
        private UserMgmtContext _context = null;
        public UserController(UserMgmtContext context ,UserManager<Entities.User> userRepository, IOptions<AppSettings> settings) : base(userRepository)
        {
            AppSetting = settings.Value;
            _context = context;
        }


        [HttpGet("{id:Guid}", Name = "GetUserDetails")]
        public IActionResult GetUserDetails(Guid id)
        {
            var user = base.GetById(id);
            var userDetails = new Models.UserDetails()
            {
                Id = user.Id,
                Email = user.Email,
                UserName = user.UserName,
                Disabled = user.IsActive.Value,
                UserType = user.UserType,
                FirstName = user.FirstName,
                LastName = user.LastName
            };

            var applicationPermissions = new List<Models.ApplicationPermission>();
            foreach (var userAppRole in user.UserAppRoleMapping)
            {
                // Use this Join roleDetails -- It has all required details
                var roleDetails = GetRelatedPrivilegesForRoleAndApp(userAppRole.RoleId,
                    userAppRole.ApplicationId);

                if (roleDetails.Count > 0)
                {
                    var applicationPermission = new Models.ApplicationPermission();
                    applicationPermission.Id = userAppRole.ApplicationId;
                    applicationPermission.Name = roleDetails[0].ApplicationName;
                    applicationPermission.RoleId = userAppRole.Role.Id;
                    applicationPermission.Role = roleDetails[0].RoleName;

                    Dictionary<int, Models.FeaturePermission> featurePermissions = new Dictionary<int, Models.FeaturePermission>();
                    foreach (var roleDetail in roleDetails)
                    {
                        Models.FeaturePermission featurePermission = new Models.FeaturePermission();
                        featurePermission.FeatureTypeId = roleDetail.FeatureTypeId;
                        featurePermission.TypeName = roleDetail.FeatureTypeName;
                        featurePermission.Label = roleDetail.FeatureLabel;
                        featurePermission.ParentFeatureId = roleDetail.ParentFeatureId;
                        featurePermission.Order = roleDetail.Order;
                        featurePermission.Privileges = roleDetail.Privileges;

                        // Todo: May be no need to add the Dictionary -- The below array should be OK
                        applicationPermission.FeaturePermissions.Add(featurePermission.FeatureTypeId, featurePermission);

                        // Added if we need the fearures as an array
                        applicationPermission.FeaturesList.Add(featurePermission);
                    }

                    applicationPermissions.Add(applicationPermission);
                }
            }
            userDetails.ApplicationPermissions = applicationPermissions;
            return Ok(userDetails);
        }

        [HttpPost]
        [Route("ActiveUsersByDate")]
        public async Task<IActionResult> ActiveUsersByDate([FromBody] DateTime activationDate)
        {
            try
            { 
                await _context.Database.ExecuteSqlCommandAsync("usp_ActivateUsers_ByDate @p0", new object[] { activationDate });
                return Ok(true);
            }
            catch (Exception ex)
            {
                throw;
            }

        }


        [HttpPost]
        [Route("DeactiveUsersByDate")]
        public async Task<IActionResult> DeactiveUsersByDate([FromBody] DateTime activationDate)
        {
            try
            {
                await _context.Database.ExecuteSqlCommandAsync("usp_DeactivateUsers_ByDate @p0", new object[] { activationDate });
                return Ok(true);
            }
            catch (Exception ex)
            {
                throw;
            }

        }


        private List<Models.RolePrivilege> GetRelatedPrivilegesForRoleAndApp(Guid roleId, Guid appId)
        {
            List<Models.RolePrivilege> rolePrivileges = new List<Models.RolePrivilege>();
            var role = _context.Role.Where(r => r.Id == roleId).FirstOrDefault();

            rolePrivileges = _context.Entry(role).Collection(r => r.FeatureTypeRolePrivilege).Query()
                .Join(_context.ApplicationFeature, ftp => ftp.FeatureTypeId, ap => ap.FeatureTypeId, (r, ftp) => new { r, ftp })
                .Where(a => a.ftp.ApplicationId == appId)
                .Select(m => new Models.RolePrivilege
                {
                    FeatureTypeId = m.ftp.FeatureTypeId,
                    Privileges = m.r.Privileges,
                    RoleName = m.r.Role.Name,
                    FeatureTypeName = m.ftp.FeatureType.Name,
                    FeatureLabel = m.ftp.FeatureType.Description,
                    ParentFeatureId = m.ftp.FeatureType.ParentFeatureId,
                    Order = m.ftp.FeatureType.Order,
                    ApplicationName = m.ftp.Application.Name
                }).OrderBy(rp => rp.ParentFeatureId).ThenBy(p => p.Order).ToList();
            return rolePrivileges;
        }
    }
}