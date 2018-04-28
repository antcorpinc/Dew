using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Designation
    {
        public Designation()
        {
            User = new HashSet<User>();
        }

        public Byte Id { get; set; }

        public string Title { get; set; }

        public ICollection<User> User { get; set; }
    }
}
