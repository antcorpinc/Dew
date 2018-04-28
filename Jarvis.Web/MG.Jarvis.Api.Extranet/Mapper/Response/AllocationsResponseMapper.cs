using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model.Allocations;
using MG.Jarvis.Model.Request.Allocations;
using System.Collections.Generic;
using System.Linq;

namespace MG.Jarvis.Api.Extranet.Mapper.Response
{
    public static class AllocationsResponseMapper
    {
        /// <summary>
        /// Maps Calendar dates to DateListViewModel
        /// </summary>
        /// <param name="dates"></param>
        /// <returns> List<DateListViewModel> </returns>
        public static List<DateListViewModel> MapDatesToDateListViewModel(List<AllocationCalendar> dates)
        {
            List<DateListViewModel> response = new List<DateListViewModel>();
            foreach (var item in dates)
            {
                DateListViewModel date = new DateListViewModel()
                {
                    Date = string.Format(item.EnglishDayNameOfWeek.Substring(0, 3) + " " + item.FullDateAlternatekey.Day + " " + item.EnglishMonthName.Substring(0, 3)),
                    DateKey = item.DateKey,
                    IsWeekend = false                  
                };
                if(item.DayNumberOfWeek==1||item.DayNumberOfWeek==7)
                {
                    date.IsWeekend = true;
                }
                response.Add(date);
            }
            return response;
        }

        public static Allocations MapAllocationDetails(List<AllocationDetails> allocationList)
        {
            
            Allocations response = new Allocations
            {
                ContractType = allocationList[0].ContractType == "static" ? true : false,
                HotelId = allocationList[0].HotelId,
                Currency = allocationList[0].CurrencyCode
            };

            List<AllocationDetails> distinctRoom = allocationList
                                           .GroupBy(r => new { r.RoomName, r.RoomId, r.RoomCode })
                                           .Select(r => r.FirstOrDefault()).ToList();

            AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationRoom>>(distinctRoom, response.Rooms);

            foreach (AllocationRoom room in response.Rooms)
            {
                List<AllocationDetails> rateList = allocationList.Where(a => a.RoomId == room.RoomId)

                                            .GroupBy(r => new { r.RateCategoryId, r.RatePlanName, r.Occupancy, r.IsExtrabedAllowed })
                                            .Select(r => r.FirstOrDefault()).ToList();
                AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationRateCategory>>(rateList, room.RateCategory);

                foreach (AllocationRateCategory rateCategory in room.RateCategory)
                {


                    // AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationRateCategory>>(rateList, room.RateCategory);

                    var singleOccupancyPrice = allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                               // .GroupBy(r => new AllocationOccupancyPrice{ Date=r.DateKey, Price=r.SingleBedPrice})
                               // .Select(r => r.FirstOrDefault()).ToList();
                               .Select(r => new AllocationOccupancyPrice { Date = r.DateKey, Price = r.SingleBedPrice });

                    var doubleOccupnacyPrice = allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                           //.GroupBy(r => new { r.DateKey, r.DoubleBedPrice})
                           // .Select(r => r.FirstOrDefault()).ToList();
                           .Select(r => new AllocationOccupancyPrice { Date = r.DateKey, Price = r.DoubleBedPrice });

                    var tripleOccupancyPrice = allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                            //.GroupBy(r => new { r.DateKey, r.SingleBedPrice, r.TripleBedPrice,})
                            //.Select(r => r.FirstOrDefault()).ToList();
                            .Select(r => new AllocationOccupancyPrice { Date = r.DateKey, Price = r.TripleBedPrice });

                    var quadOccupnacyPrice = allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                             // .GroupBy(r => new { r.DateKey, r.QuadBedPrice })
                             //.Select(r => r.FirstOrDefault()).ToList();
                             .Select(r => new AllocationOccupancyPrice { Date = r.DateKey, Price = r.QuadBedPrice });

                    var extraBedOccupancyPrice = allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                             //.GroupBy(r => new { r.DateKey,r.ExtraBedPrice })
                             // .Select(r => r.FirstOrDefault()).ToList();
                             .Select(r => new AllocationOccupancyPrice { Date = r.DateKey, Price = r.ExtraBedPrice });

                    //List<AllocationOccupancy> occupancyList = new List<AllocationOccupancy>();
                    AllocationOccupancy occupancy = new AllocationOccupancy
                    {
                        OccupancyName = "Single Bed Rate (" + response.Currency + ")"

                    };
                    // AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationOccupancyPrice>>(singleOccupnacyPrice, occupancy.OccupancyPrice);
                    occupancy.OccupancyPrice.AddRange(singleOccupancyPrice);
                    rateCategory.Occupancy.Add(occupancy);


                    if (rateCategory.NoOfGuest > 1)
                    {
                        occupancy = new AllocationOccupancy
                        {
                            OccupancyName = "Double Bed Rate (" + response.Currency + ")"
                        };
                        occupancy.OccupancyPrice.AddRange(doubleOccupnacyPrice);
                        rateCategory.Occupancy.Add(occupancy);
                        ///   AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationOccupancyPrice>>(doubleOccupnacyPrice, occupancy.OccupancyPrice);
                   
                    }
                    
                    if (rateCategory.NoOfGuest > 2)
                    {
                        occupancy = new AllocationOccupancy
                        {
                            OccupancyName = "Triple Bed Rate (" + response.Currency +")"
                        };
                        rateCategory.Occupancy.Add(occupancy);
                        // AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationOccupancyPrice>>(tripleOccupancyPrice, occupancy.OccupancyPrice);
                        occupancy.OccupancyPrice.AddRange(tripleOccupancyPrice);
                    }
               
                    if (rateCategory.NoOfGuest > 3)
                    {
                        occupancy = new AllocationOccupancy
                        {
                            OccupancyName = "Quad Bed Rate (" + response.Currency + ")"
                        };
                        rateCategory.Occupancy.Add(occupancy);
                       // AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationOccupancyPrice>>(quadOccupnacyPrice, occupancy.OccupancyPrice);
                        occupancy.OccupancyPrice.AddRange(quadOccupnacyPrice);
                    }

                    if (rateCategory.IsExtrabedAllowed)
                    {
                        occupancy = new AllocationOccupancy
                        {
                            OccupancyName = "Extra Bed Rate (" + response.Currency + ")"
                        };
                        rateCategory.Occupancy.Add(occupancy);
                        //AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationOccupancyPrice>>(extraBedOccupancyPrice, occupancy.OccupancyPrice);
                        occupancy.OccupancyPrice.AddRange(extraBedOccupancyPrice);
                    }
                    //rateCategory.Occupancy.AddRange(occupancyList);

                    List<AllocationDetails> roomToSell = //from r in reservationDetail
                                                         //                            where r.RoomReservationId == room.ReservationId
                                                         //                            select (new RoomPrice{ BasePrice = r.BasePrice, SellingPrice= r.SellingPrice, MealPrice= r.MealPrice, ExtraBedPrice= r.ExtraBedPrice });
                                        allocationList.Where(a => a.RoomId == room.RoomId && a.RateCategoryId == rateCategory.RateCategoryId)
                                        // .GroupBy(r=> new RoomPrice { Date = r.BookingDate,
                                        //    BasePrice = r.BasePrice, SellingPrice = r.SellingPrice, MealPrice = r.MealPrice, ExtraBedPrice = r.ExtraBedPrice })
                                        //.Distinct().ToList<RoomPrice>(); ;
                                        .GroupBy(r => new { r.DateKey, r.Availability, r.UsedAvailability, r.Status })
                                        .Select(r => r.FirstOrDefault()).ToList();

                    AutoMapper.Mapper.Map<List<AllocationDetails>, List<RoomsToSell>>(roomToSell, rateCategory.RoomsToSell);
                    AutoMapper.Mapper.Map<List<AllocationDetails>, List<AllocationStatus>>(roomToSell, rateCategory.Status);
                }
                List<AllocationDetails> roomToSold = //from r in reservationDetail
                                                     //                            where r.RoomReservationId == room.ReservationId
                                                     //                            select (new RoomPrice{ BasePrice = r.BasePrice, SellingPrice= r.SellingPrice, MealPrice= r.MealPrice, ExtraBedPrice= r.ExtraBedPrice });
                                        allocationList.Where(a => a.RoomId == room.RoomId)
                                        // .GroupBy(r=> new RoomPrice { Date = r.BookingDate,
                                        //    BasePrice = r.BasePrice, SellingPrice = r.SellingPrice, MealPrice = r.MealPrice, ExtraBedPrice = r.ExtraBedPrice })
                                        //.Distinct().ToList<RoomPrice>(); ;
                                        .GroupBy(r => new { r.DateKey, r.Availability, r.UsedAvailability, r.Status })
                                        .Select(r => r.FirstOrDefault()).ToList();

                AutoMapper.Mapper.Map<List<AllocationDetails>, List<RoomsSold>>(roomToSold, room.RoomsSold);
            }

            return response;

        }
    }
}
