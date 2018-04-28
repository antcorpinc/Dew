using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Chain
    {
        public Chain()
        {
            Brand = new HashSet<Brand>();
            Hotel = new HashSet<Hotel>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }


        public ICollection<Brand> Brand { get; set; }
        public ICollection<Hotel> Hotel { get; set; }
    }

    
}
