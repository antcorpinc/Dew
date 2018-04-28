using System;
using System.Collections.Generic;
using System.Text;

namespace MG.Jarvis.Model.Request.Allocations
{
    public class RoomsToSell
    {
        public string Date { get; set; }
        public int RoomToSell { get; set; }
    }

    public class RoomsSold
    {
        public string Date { get; set; }
        public int Roomsold { get; set; }
    }

    public class AllocationStatus
    {
        public string Date { get; set; }
        public string BookingStatus { get; set; }
    }

    public class AllocationOccupancy
    {
        public AllocationOccupancy()
        {
           OccupancyPrice = new List<AllocationOccupancyPrice>();
        }

        public string OccupancyName { get; set; }
        public object ObjectState { get; set; }
        public List<AllocationOccupancyPrice> OccupancyPrice { get; set; }
    }
    public class AllocationOccupancyPrice
    {
        public string Date { get; set; }
        public double Price { get; set; }
    }
    public class AllocationRateCategory
    {
        public AllocationRateCategory()
        {
            RoomsToSell = new List<Request.Allocations.RoomsToSell>();
 
            Status = new List<AllocationStatus>();
            Occupancy = new List<AllocationOccupancy>();
        }
        public int RateCategoryId { get; set; }
        public string RateCategoryName { get; set; }
        public bool IsPromotional { get; set; }
        public bool IsExpanded { get; set; }
        public object ObjectState { get; set; }
        public List<RoomsToSell> RoomsToSell { get; set; }
       
        public List<AllocationStatus> Status { get; set; }
        public int NoOfGuest { get; set; }
        public bool IsExtrabedAllowed { get; set; }
        public List<AllocationOccupancy> Occupancy { get; set; }
    }

    public class AllocationRoom
    {
        public AllocationRoom()
        {
            RateCategory = new List<AllocationRateCategory>();
            RoomsSold = new List<Request.Allocations.RoomsSold>();
        }
        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public object ObjectState { get; set; }
        public List<AllocationRateCategory> RateCategory { get; private set; }
        public List<RoomsSold> RoomsSold { get; set; }
    }

    public class Allocations
    {
        public Allocations()
        {
            Rooms = new List<AllocationRoom>();
        }
        public List<AllocationRoom> Rooms { get; private set; }
        public int HotelId { get; set; }
        public bool ContractType { get; set; }

        public string Currency { get; set; }
    }

    //public class RootObject
    //{
    //    public bool IsError { get; set; }
    //    public object exceptionMessage { get; set; }
    //    public Result result { get; set; }
    //    public object message { get; set; }
    //    public int errorCode { get; set; }
    //}
}
