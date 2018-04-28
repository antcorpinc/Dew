using System;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class HotelRangeRestrictionViewModel
    {
        public int Id { get; set; }
        public int RateCategoryId { get; set; }
        public int RoomId { get; set; }
        public int RatePlanId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int RestrictionTypeId { get; set; }
        public int RestrictionTypeValue { get; set; } 
        public string Days { get; set; }
    }
}
