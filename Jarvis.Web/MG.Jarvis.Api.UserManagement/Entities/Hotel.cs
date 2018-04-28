using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    public class Hotel
    {
 public Hotel()
        {
            HotelUserRelation = new HashSet<HotelUserRelation>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? HotelBrandId { get; set; }
        public Brand HotelBrand { get; set; }
        public Chain HotelChain { get; set; }
        public int? HotelChainId { get; set; }
        public ICollection<HotelUserRelation> HotelUserRelation { get; set; }

    }
}
