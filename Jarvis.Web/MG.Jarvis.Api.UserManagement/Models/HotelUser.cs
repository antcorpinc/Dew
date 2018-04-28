using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class HotelUser : Base.User
    {
        public Byte DesignationId { get; set; }
        public string HotelUserType { get; set; }
        public string ContactNumber { get; set; }
        public int[] HotelId { get; set; }
        public Guid ExtranetRoleId { get; set; }
    }
}
