using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class UserDetails
    {
        public UserDetails()
        {
            ApplicationPermissions = new List<ApplicationPermission>();
        }

        public Guid Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public bool Disabled { get; set; }
        public int UserType { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }


        public List<ApplicationPermission> ApplicationPermissions { get; set; }
    }
}
