using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Brand
    {
        public Brand()
        {
            Hotel = new HashSet<Hotel>();
        }

        public int Id { get; set; }
        public int? HotelChainId { get; set; }
        public string Name { get; set; }

        public Chain HotelChain { get; set; }
        public ICollection<Hotel> Hotel { get; set; }
    }

    
}
