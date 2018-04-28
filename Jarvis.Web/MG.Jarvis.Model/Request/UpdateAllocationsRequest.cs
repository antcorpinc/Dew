using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace MG.Jarvis.Api.Extranet.Models.Request
{
    [XmlRoot(ElementName = "UpdateAllocationsRequest")]
    public class UpdateAllocationsRequest : RoomTypeByHotelAndChannelManger
    {
        [XmlAttribute(AttributeName = "RecordId")]
        public short RecordId { get; set; }
        [XmlAttribute(AttributeName = "AllocationStartDate")]
        public DateTime AllocationStartDate { get; set; }
        [XmlAttribute(AttributeName = "AllocationEndDate")]
        public DateTime AllocationEndDate { get; set; }
        [XmlAttribute(AttributeName = "RoomTypeId")]
        public string RoomTypeId { get; set; }
        [XmlAttribute(AttributeName = "RatePlanId")]
        public string RatePlanId { get; set; }
        [XmlAttribute(AttributeName = "DoubleRoomAvailability")]
        public int DoubleRoomAvailability { get; set; }
        [XmlAttribute(AttributeName = "TwinRoomAvailability")]
        public int TwinRoomAvailability { get; set; }
        [XmlAttribute(AttributeName = "UsedDoubleRoomAvailability")]
        public int UsedDoubleRoomAvailability { get; set; }
        [XmlAttribute(AttributeName = "UsedTwinRoomAvailability")]
        public int UsedTwinRoomAvailability { get; set; }
        [XmlElement(ElementName = "AllocationRestrictions")]
        public AllocationRestrictions AllocationRestrictions { get; set; }
    }
}
