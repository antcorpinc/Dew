using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class RoleList : Base.Role
    {
        public Guid Id { get; set; }
        public new List<Models.Application> ApplicationList { get; set; }
    }
}
