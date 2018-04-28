using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Agency
    {
		public Agency()
        {
            Agents = new HashSet<Agents>();
            Branch = new HashSet<Branch>();
        }

        public int Id { get; set; }
        public string  Code { get; set; }

        public string Name { get; set; }

        public ICollection<Agents> Agents { get; set; }
        public ICollection<Branch> Branch { get; set; }
    }
}
