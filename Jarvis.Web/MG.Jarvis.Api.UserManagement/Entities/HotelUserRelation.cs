using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    /// <summary>
    /// User Hotel
    /// </summary>
    public class HotelUserRelation
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public Guid UserId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        //public DateTime SysStartTime { get; set; }
        //public DateTime SysEndTime { get; set; }

        public Hotel Hotel { get; set; }
        public User User { get; set; }
    }
}
