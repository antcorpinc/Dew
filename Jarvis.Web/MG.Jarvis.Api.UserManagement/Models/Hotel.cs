using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }

        public int? ChainId { get; set; }
        public string ChainName { get; set; }

        public int? BrandId { get; set; }
        public string BrandName { get; set; }
    }
}
