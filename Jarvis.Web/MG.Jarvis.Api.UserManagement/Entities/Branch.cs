using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Branch
    {
        public Branch()
        {
            Agents = new HashSet<Agents>();
        }

        public int Id { get; set; }
        public int? AgencyId { get; set; }
       
        public string Name { get; set; }
       

        public Agency Agency { get; set; }
        public ICollection<Agents> Agents { get; set; }

    }
}
