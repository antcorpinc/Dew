import { forEach } from '@angular/router/src/utils/collection';
import { DateAdapter } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { MatSnackBar, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { CONSTANTS } from '../../../../common/constants';
import { EXTRANETCONSTANTS } from '../../../common/constants';
import { ObjectState } from '../../../../common/enums';
import { RoomsViewModel, RoomSoldViewModel } from './../../../viewmodel/allocationsviewmodel/roomsviewmodel';
import { RateCategoryViewModel, RoomToSell, AllocationStatus } from './../../../viewmodel/allocationsviewmodel/ratecategoryviewmodel';
import { OccupancyViewModel, OccupancyPrice } from './../../../viewmodel/allocationsviewmodel/occupancyviewmodel';
import { AllocationsDataService } from '../../../common/extranet-shared/services/allocations-data.service';
import { CalenderViewModel } from '../../../viewmodel/allocationsviewmodel/calenderviewmodel';
import { ContractViewModel } from '../../../viewmodel/allocationsviewmodel/contractviewmodel';
import { DateViewModel } from '../../../viewmodel/allocationsviewmodel/allocationdaterangeviewmodel';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';

const DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export class DatePickerDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    date.setHours(0, 0, 0, 0);
    date.setMinutes((date.getTimezoneOffset() * -1));
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'long' });
      const year = date.getFullYear();
      return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

@Component({
  selector: 'app-allocations-info',
  templateUrl: './allocations-info.component.html',
  styleUrls: ['./allocations-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class AllocationsInfoComponent implements OnInit {

  todaysDate = new Date();
  defaultMaxDate = new Date();
  defaultMinDate = new Date();
  maxDate = new Date();
  minDate = new Date();
  minDate1 = new Date();
  maxDate1 = new Date();
  roomsSold: number;
  edit = CONSTANTS.operation.edit;
  read = CONSTANTS.operation.read;
  create = CONSTANTS.operation.create;
  hotelId: number;
  operation: string;
  loading: boolean = false;
  noDataAvailable: boolean;
  allocationsArray: ContractViewModel;
  allocationsCopyArray: ContractViewModel;
  isDataLoaded: boolean;
  allocationInfo: ContractViewModel = <ContractViewModel>{};
  /* allocationsArray: ContractViewModel[] = [{
    "rooms": [
      {
        "roomId": 145,
        "roomName": "Suite 3 bedrooms (ST.TBD)",
        "objectState": null,
        "rateCategory": [
          {
            "rateCategoryId": 3,
            "rateCategoryName": "new rate category",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": null,
            "roomsToSell": [
              {
                "date": "20180416",
                "roomToSell": 100
              },
              {
                "date": "20180417",
                "roomToSell": 100
              },
              {
                "date": "20180418",
                "roomToSell": 100
              },
              {
                "date": "20180419",
                "roomToSell": 0
              },
              {
                "date": "20180420",
                "roomToSell": 0
              },
              {
                "date": "20180421",
                "roomToSell": 100
              },
              {
                "date": "20180422",
                "roomToSell": 100
              },
              {
                "date": "20180423",
                "roomToSell": 100
              },
              {
                "date": "20180424",
                "roomToSell": 100
              },
              {
                "date": "20180425",
                "roomToSell": 100
              },
              {
                "date": "20180426",
                "roomToSell": 0
              },
              {
                "date": "20180427",
                "roomToSell": 100
              },
              {
                "date": "20180428",
                "roomToSell": 100
              },
              {
                "date": "20180429",
                "roomToSell": 100
              },
              {
                "date": "20180430",
                "roomToSell": 0
              }
            ],
            "status": [
              {
                "date": "20180416",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180417",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180418",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180419",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180420",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180421",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180422",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              }
            ],
            "noOfGuest": 2,
            "isExtrabedAllowed": false,
            "occupancy": [
              {
                "occupancyName": "Double Bed Rate",
                "objectState": null,
                "occupancyPrice": [
                  {
                    "date": "20180416",
                    "price": 150
                  },
                  {
                    "date": "20180417",
                    "price": 150
                  },
                  {
                    "date": "20180418",
                    "price": 150
                  },
                  {
                    "date": "20180419",
                    "price": 0
                  },
                  {
                    "date": "20180420",
                    "price": 0
                  },
                  {
                    "date": "20180421",
                    "price": 200
                  },
                  {
                    "date": "20180422",
                    "price": 200
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  }
                ]
              }
            ]
          }
        ],
        "roomsSold": [
          {
            "date": "20180416",
            "roomsold": 2
          },
          {
            "date": "20180417",
            "roomsold": 2
          },
          {
            "date": "20180418",
            "roomsold": 2
          },
          {
            "date": "20180419",
            "roomsold": 1
          },
          {
            "date": "20180420",
            "roomsold": 1
          },
          {
            "date": "20180421",
            "roomsold": 2
          },
          {
            "date": "20180422",
            "roomsold": 2
          },
          {
            "date": "20180423",
            "roomsold": 2
          },
          {
            "date": "20180424",
            "roomsold": 2
          },
          {
            "date": "20180425",
            "roomsold": 2
          },
          {
            "date": "20180426",
            "roomsold": 1
          },
          {
            "date": "20180423",
            "roomsold": 2
          },
          {
            "date": "20180424",
            "roomsold": 2
          },
          {
            "date": "20180425",
            "roomsold": 2
          },
          {
            "date": "20180426",
            "roomsold": 1
          }
        ]
      },
      {
        "roomId": 146,
        "roomName": "Suite 2 bedrooms (ST.DBD)",
        "objectState": null,
        "rateCategory": [
          {
            "rateCategoryId": 4,
            "rateCategoryName": "new rate category 1",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": null,
            "roomsToSell": [
              {
                "date": "20180416",
                "roomToSell": 100
              },
              {
                "date": "20180417",
                "roomToSell": 100
              },
              {
                "date": "20180418",
                "roomToSell": 100
              },
              {
                "date": "20180419",
                "roomToSell": 0
              },
              {
                "date": "20180420",
                "roomToSell": 0
              },
              {
                "date": "20180421",
                "roomToSell": 100
              },
              {
                "date": "20180422",
                "roomToSell": 100
              },
              {
                "date": "20180423",
                "roomToSell": 100
              },
              {
                "date": "20180424",
                "roomToSell": 100
              },
              {
                "date": "20180425",
                "roomToSell": 100
              },
              {
                "date": "20180426",
                "roomToSell": 0
              },
              {
                "date": "20180423",
                "roomToSell": 100
              },
              {
                "date": "20180424",
                "roomToSell": 100
              },
              {
                "date": "20180425",
                "roomToSell": 100
              },
              {
                "date": "20180426",
                "roomToSell": 0
              }
            ],
            "status": [
              {
                "date": "20180416",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180417",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180418",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180419",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180420",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180421",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180422",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              }
            ],
            "noOfGuest": 2,
            "isExtrabedAllowed": false,
            "occupancy": [
              {
                "occupancyName": "Double Bed Rate",
                "objectState": null,
                "occupancyPrice": [
                  {
                    "date": "20180416",
                    "price": 150
                  },
                  {
                    "date": "20180417",
                    "price": 150
                  },
                  {
                    "date": "20180418",
                    "price": 150
                  },
                  {
                    "date": "20180419",
                    "price": 0
                  },
                  {
                    "date": "20180420",
                    "price": 0
                  },
                  {
                    "date": "20180421",
                    "price": 200
                  },
                  {
                    "date": "20180422",
                    "price": 200
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  }
                ]
              }
            ]
          }
        ],
        "roomsSold": [
          {
            "date": "20180416",
            "roomsold": 2
          },
          {
            "date": "20180417",
            "roomsold": 2
          },
          {
            "date": "20180418",
            "roomsold": 2
          },
          {
            "date": "20180419",
            "roomsold": 1
          },
          {
            "date": "20180420",
            "roomsold": 1
          },
          {
            "date": "20180421",
            "roomsold": 2
          },
          {
            "date": "20180422",
            "roomsold": 2
          },
          {
            "date": "20180423",
            "roomsold": 2
          },
          {
            "date": "20180424",
            "roomsold": 2
          },
          {
            "date": "20180425",
            "roomsold": 2
          },
          {
            "date": "20180426",
            "roomsold": 1
          },
          {
            "date": "20180423",
            "roomsold": 2
          },
          {
            "date": "20180424",
            "roomsold": 2
          },
          {
            "date": "20180425",
            "roomsold": 2
          },
          {
            "date": "20180426",
            "roomsold": 1
          }
        ]
      },
      {
        "roomId": 148,
        "roomName": "Suite 4 bedrooms (ST.QD)",
        "objectState": null,
        "rateCategory": [
          {
            "rateCategoryId": 4,
            "rateCategoryName": "new rate category 1",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": null,
            "roomsToSell": [
              {
                "date": "20180416",
                "roomToSell": 100
              },
              {
                "date": "20180417",
                "roomToSell": 100
              },
              {
                "date": "20180418",
                "roomToSell": 100
              },
              {
                "date": "20180419",
                "roomToSell": 0
              },
              {
                "date": "20180420",
                "roomToSell": 0
              },
              {
                "date": "20180421",
                "roomToSell": 0
              },
              {
                "date": "20180422",
                "roomToSell": 0
              },
              {
                "date": "20180423",
                "roomToSell": 100
              },
              {
                "date": "20180424",
                "roomToSell": 100
              },
              {
                "date": "20180425",
                "roomToSell": 100
              },
              {
                "date": "20180426",
                "roomToSell": 0
              },
              {
                "date": "20180423",
                "roomToSell": 100
              },
              {
                "date": "20180424",
                "roomToSell": 100
              },
              {
                "date": "20180425",
                "roomToSell": 100
              },
              {
                "date": "20180426",
                "roomToSell": 0
              }
            ],
            "status": [
              {
                "date": "20180416",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180417",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180418",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180419",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180420",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180421",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180422",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              },
              {
                "date": "20180423",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180424",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180425",
                "bookingStatus": "Bookable"
              },
              {
                "date": "20180426",
                "bookingStatus": "NotAvailable"
              }
            ],
            "noOfGuest": 2,
            "isExtrabedAllowed": false,
            "occupancy": [
              {
                "occupancyName": "Double Bed Rate",
                "objectState": null,
                "occupancyPrice": [
                  {
                    "date": "20180416",
                    "price": 150
                  },
                  {
                    "date": "20180417",
                    "price": 150
                  },
                  {
                    "date": "20180418",
                    "price": 150
                  },
                  {
                    "date": "20180419",
                    "price": 0
                  },
                  {
                    "date": "20180420",
                    "price": 0
                  },
                  {
                    "date": "20180421",
                    "price": 0
                  },
                  {
                    "date": "20180422",
                    "price": 0
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  },
                  {
                    "date": "20180423",
                    "price": 150
                  },
                  {
                    "date": "20180424",
                    "price": 150
                  },
                  {
                    "date": "20180425",
                    "price": 150
                  },
                  {
                    "date": "20180426",
                    "price": 0
                  }
                ]
              }
            ]
          }
        ],
        "roomsSold": [
          {
            "date": "20180416",
            "roomsold": 1
          },
          {
            "date": "20180417",
            "roomsold": 1
          },
          {
            "date": "20180418",
            "roomsold": 1
          },
          {
            "date": "20180419",
            "roomsold": 1
          },
          {
            "date": "20180420",
            "roomsold": 1
          },
          {
            "date": "20180421",
            "roomsold": 1
          },
          {
            "date": "20180422",
            "roomsold": 1
          },
          {
            "date": "20180423",
            "roomsold": 1
          },
          {
            "date": "20180424",
            "roomsold": 1
          },
          {
            "date": "20180425",
            "roomsold": 1
          },
          {
            "date": "20180426",
            "roomsold": 1
          },
          {
            "date": "20180423",
            "roomsold": 1
          },
          {
            "date": "20180424",
            "roomsold": 1
          },
          {
            "date": "20180425",
            "roomsold": 1
          },
          {
            "date": "20180426",
            "roomsold": 1
          }
        ]
      }
    ],
    "hotelId": 1032,
    "contractType": false
  }
  ]; */
  /* allocationsArray: ContractViewModel[] = [
    {
      "hotelId": 1032,
      "contractType": true,
      "contractStartDate": "01-1-2015",
      "contractEndDate": "31-12-2017",
      "pooledAllotment": null,
      "rooms": [
        {
          "roomId": 1,
          "roomName": "Delux",
          "roomSold": [
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 4
            },
            {
              "date": "04-3-2018",
              "roomSold": 7
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 4
            },
            {
              "date": "04-3-2018",
              "roomSold": 7
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 4
            },
            {
              "date": "04-3-2018",
              "roomSold": 7
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 4
            }],
          "objectState": 1,
          "rateCategory": [{
            "rateCategoryId": 11,
            "rateCategoryName": "Standard",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": 1,
            "roomsToSell": [
              {
                "date": "01-3-2018",
                "roomToSell": 2
              },
              {
                "date": "02-3-2018",
                "roomToSell": 7
              },
              {
                "date": "03-3-2018",
                "roomToSell": 6
              },
              {
                "date": "04-3-2018",
                "roomToSell": 8
              },
              {
                "date": "01-3-2018",
                "roomToSell": 2
              },
              {
                "date": "02-3-2018",
                "roomToSell": 7
              },
              {
                "date": "03-3-2018",
                "roomToSell": 6
              },
              {
                "date": "04-3-2018",
                "roomToSell": 8
              },
              {
                "date": "01-3-2018",
                "roomToSell": 2
              },
              {
                "date": "02-3-2018",
                "roomToSell": 7
              },
              {
                "date": "03-3-2018",
                "roomToSell": 6
              },
              {
                "date": "04-3-2018",
                "roomToSell": 8
              },
              {
                "date": "01-3-2018",
                "roomToSell": 2
              },
              {
                "date": "02-3-2018",
                "roomToSell": 7
              },
              {
                "date": "03-3-2018",
                "roomToSell": 6
              }],
            "status": [{
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "SoldOut"
            }],
            "occupancy": [
              {
                "occupancyName": "Single Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Double Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Triple Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Quad Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              }
            ]
          },
          {
            "rateCategoryId": 12,
            "rateCategoryName": "Non-Refundable",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": 1,
            "roomsToSell": [
              {
                "date": "01-3-2018",
                "roomToSell": 5
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 5
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 5
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 5
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              }],
            "status": [{
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Closed"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Closed"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Closed"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Closed"
            }],
            "occupancy": [
              {
                "occupancyName": "Single Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 3623500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3622345235500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462252352500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 3623500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3622345235500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462252352500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 3623500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3622345235500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462252352500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 3623500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3622345235500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Double Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 36223532500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3625252500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36223532500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3625252500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36223532500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3625252500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36223532500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 3625252500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Triple Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Quad Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 3625052534320
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 3625052534320
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 3625052534320
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 3625052534320
                  }
                ]
              }
            ]
          }
          ]
        },
        {
          "roomId": 2,
          "roomName": "Super Delux",
          "roomSold": [
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 5
            },
            {
              "date": "04-3-2018",
              "roomSold": 6
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 5
            },
            {
              "date": "04-3-2018",
              "roomSold": 6
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 5
            },
            {
              "date": "04-3-2018",
              "roomSold": 6
            },
            {
              "date": "01-3-2018",
              "roomSold": 2
            },
            {
              "date": "02-3-2018",
              "roomSold": 5
            },
            {
              "date": "03-3-2018",
              "roomSold": 5
            }],
          "objectState": 1,
          "rateCategory": [{
            "rateCategoryId": 13,
            "rateCategoryName": "Standard",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": 1,
            "roomsToSell": [
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 6
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 4
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              }],
            "status": [{
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "NotAvailable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "NotAvailable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "NotAvailable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "NotAvailable"
            }],
            "occupancy": [
              {
                "occupancyName": "Single Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462523523500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462523523500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462523523500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Double Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Triple Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Quad Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 36235352500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 36255253500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36235352500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 36255253500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36235352500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 36255253500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 36235352500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 36255253500
                  }
                ]
              }
            ]
          },
          {
            "rateCategoryId": 14,
            "rateCategoryName": "Non-Refundable",
            "isPromotional": false,
            "isExpanded": false,
            "objectState": 1,
            "roomsToSell": [
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 1
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 2
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 1
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 2
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 1
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              },
              {
                "date": "04-3-2018",
                "roomToSell": 2
              },
              {
                "date": "01-3-2018",
                "roomToSell": 7
              },
              {
                "date": "02-3-2018",
                "roomToSell": 1
              },
              {
                "date": "03-3-2018",
                "roomToSell": 8
              }],
            "status": [{
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Bookable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Bookable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Bookable"
            },
            {
              "date": "04-3-2018",
              "status": "SoldOut"
            },
            {
              "date": "01-3-2018",
              "status": "Bookable"
            },
            {
              "date": "02-3-2018",
              "status": "BookableWith Restrictions"
            },
            {
              "date": "03-3-2018",
              "status": "Bookable"
            }],
            "occupancy": [
              {
                "occupancyName": "Single Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 32523562500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 46232535500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 32523562500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 46232535500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 32523562500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 46232535500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 32523562500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Double Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362352352500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Triple Bed Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              },
              {
                "occupancyName": "Quad Rate",
                "objectState": 1,
                "occupancyPrice": [
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500123456
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500123456
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "04-3-2018",
                    "price": 462500123456
                  },
                  {
                    "date": "01-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "02-3-2018",
                    "price": 362500
                  },
                  {
                    "date": "03-3-2018",
                    "price": 362500
                  }
                ]
              }
            ]
          }]
        }]
    }
  ]; */
  date: DateViewModel = <DateViewModel>{};
  dateArray: CalenderViewModel[];
  appliedDateArray: CalenderViewModel[];
  isDateApplied: boolean = false;
  contractTypeForm: FormGroup;
  allocationsForm: FormGroup;
  allocationsDateRangeForm: FormGroup;

  constructor(private router: Router,
    private allocationsDataService: AllocationsDataService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar, private dialogsService: DialogsService) { }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.isDataLoaded = false;
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.date.hotelId = this.hotelId;
    this.date.contractType = 'Static';
    this.allocationsDateRangeForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    this.contractTypeForm = new FormGroup({
      contractType: new FormControl(this.date.contractType)
    });
    this.getDefaultDates();
    this.getDateRange(this.date);
    this.getAllocationData();

    this.maxDate.setMonth(this.todaysDate.getMonth() + 2);
    this.minDate = new Date(2018, 0, 1);
    this.allocationInfo.hotelId = this.hotelId;
  }

  buildForm(allocationsArray: ContractViewModel) {
    this.noDataAvailable = false;
    console.log(allocationsArray);
    this.allocationsForm = new FormGroup({
      hotelId: new FormControl(),
      contractType: new FormControl(this.contractTypeForm.get('contractType').value),
      rooms: (this.buildRoomsForm(allocationsArray.rooms))
    });
    console.log(this.allocationsForm);
  }

  buildRoomsForm(roomList: RoomsViewModel[]): FormArray {
    let roomGroup: FormGroup;
    let roomArray: FormArray;
    roomList.forEach((room, index) => {
      roomGroup = new FormGroup({
        roomId: new FormControl(room.roomId, Validators.required),
        roomName: new FormControl(room.roomName, Validators.required),
        roomsSold: (this.buildroomSoldForm(room.roomsSold)),
        objectState: new FormControl(),
        rateCategory: this.buildRateCategoryForm(room.rateCategory)
      });
      if (roomArray === null || roomArray === undefined) {
        roomArray = new FormArray([roomGroup]);
      } else {
        roomArray.push(roomGroup);
      }
    });
    return roomArray;
  }

  buildroomSoldForm(roomSoldList: RoomSoldViewModel[]): FormArray {
    let roomSoldGroup: FormGroup;
    let roomSoldArray: FormArray;
    roomSoldList.forEach(room => {
      roomSoldGroup = new FormGroup({
        date: new FormControl(room.date),
        roomsSold: new FormControl(room.roomsold, Validators.required)
      });
      if (roomSoldArray === null || roomSoldArray === undefined) {
        roomSoldArray = new FormArray([roomSoldGroup]);
      } else {
        roomSoldArray.push(roomSoldGroup);
      }
    });
    return roomSoldArray;
  }

  buildRateCategoryForm(rate: RateCategoryViewModel[]): FormArray {
    let rateCategoryGroup: FormGroup;
    let rateCategoryArray: FormArray;
    rate.forEach(rate => {
      rateCategoryGroup = new FormGroup({
        rateCategoryId: new FormControl(rate.rateCategoryId, Validators.required),
        rateCategoryName: new FormControl(rate.rateCategoryName, Validators.required),
        isPromotional: new FormControl(rate.isPromotional),
        isExpanded: new FormControl(rate.isExpanded),
        objectState: new FormControl(),
        roomsToSell: (this.buildRoomToSellForm(rate.roomsToSell)),
        status: (this.buildStatusForm(rate.status)),
        occupancy: (this.buildOccupancyForm(rate.occupancy))
      });
      if (rateCategoryArray === null || rateCategoryArray === undefined) {
        rateCategoryArray = new FormArray([rateCategoryGroup]);
      } else {
        rateCategoryArray.push(rateCategoryGroup);
      }
    });
    return rateCategoryArray;
  }

  buildRoomToSellForm(roomToSellList: RoomToSell[]): FormArray {
    let roomToSellGroup: FormGroup;
    let roomToSellArray: FormArray;
    roomToSellList.forEach(room => {
      roomToSellGroup = new FormGroup({
        date: new FormControl(room.date, Validators.required),
        roomToSell: new FormControl(room.roomToSell, Validators.required)
      });
      if (roomToSellArray === null || roomToSellArray === undefined) {
        roomToSellArray = new FormArray([roomToSellGroup]);
      } else {
        roomToSellArray.push(roomToSellGroup);
      }
    });
    return roomToSellArray;
  }

  buildStatusForm(statusList: AllocationStatus[]): FormArray {
    let statusGroup: FormGroup;
    let statusArray: FormArray;
    statusList.forEach(status => {
      statusGroup = new FormGroup({
        date: new FormControl(status.date, Validators.required),
        bookingStatus: new FormControl(status.bookingStatus)
      });
      if (statusArray === null || statusArray === undefined) {
        statusArray = new FormArray([statusGroup]);
      } else {
        statusArray.push(statusGroup);
      }
    });
    return statusArray;
  }

  buildOccupancyForm(occupancyList: OccupancyViewModel[]): FormArray {
    let occupancyGroup: FormGroup;
    let occupancyArray: FormArray;
    occupancyList.forEach(occupancy => {
      occupancyGroup = new FormGroup({
        occupancyName: new FormControl(occupancy.occupancyName, Validators.required),
        objectState: new FormControl(),
        occupancyPrice: (this.buildOccupancyPriceForm(occupancy.occupancyPrice))
      });
      if (occupancyArray === null || occupancyArray === undefined) {
        occupancyArray = new FormArray([occupancyGroup]);
      } else {
        occupancyArray.push(occupancyGroup);
      }
    });
    return occupancyArray;
  }

  buildOccupancyPriceForm(occupancyPriceList: OccupancyPrice[]): FormArray {
    let occupancyPriceGroup: FormGroup;
    let occupancyPriceArray: FormArray;
    occupancyPriceList.forEach(occupancy => {
      occupancyPriceGroup = new FormGroup({
        date: new FormControl(occupancy.date, Validators.required),
        price: new FormControl(occupancy.price, Validators.required)
      });
      if (occupancyPriceArray === null || occupancyPriceArray === undefined) {
        occupancyPriceArray = new FormArray([occupancyPriceGroup]);
      } else {
        occupancyPriceArray.push(occupancyPriceGroup);
      }
    });
    return occupancyPriceArray;
  }

  get rooms(): FormArray {
    return <FormArray>this.allocationsForm.get('rooms');
  }

  getRateCategoryArray(index: number): FormArray {
    return <FormArray>this.rooms.controls[index].get('rateCategory');
  }

  getRoomSoldArray(index: number) {
    return <FormArray>this.rooms.controls[index].get('roomsSold');
  }

  getRoomToSellArray(rateCategoryIndex: number, roomToSellIndex: number) {
    return <FormArray>this.getRateCategoryArray(rateCategoryIndex).controls[roomToSellIndex].get('roomsToSell');
  }

  getStatusArray(rateCategoryIndex: number, statusIndex: number) {
    return <FormArray>this.getRateCategoryArray(rateCategoryIndex).controls[statusIndex].get('status');
  }

  getOccupancyArray(rateCategoryIndex: number, occupancyIndex: number) {
    return <FormArray>this.getRateCategoryArray(rateCategoryIndex).controls[occupancyIndex].get('occupancy');
  }

  getOccupancyPriceArray(rateCategoryIndex: number, occupancyIndex: number, occupancyPriceIndex: number) {
    return <FormArray>this.getOccupancyArray(rateCategoryIndex, occupancyIndex).controls[occupancyPriceIndex].get('occupancyPrice');
  }

  getDateRange(dateArray: DateViewModel) {
    this.allocationsDataService.getDateRange(dateArray).subscribe((dateRange) => {
      this.dateArray = dateRange;
    });
  }


  getAllocationData() {
    this.allocationsDataService.getAllocationData(this.date).subscribe((contractData) => {
      if (contractData) {
        setTimeout(() => {
          this.isDataLoaded = true;
        }, 1000);

      }
      this.allocationsArray = contractData;
      this.allocationsCopyArray = contractData;
      if (this.allocationsArray === null) {
        this.noDataAvailable = true;
      }
      else {
        this.buildForm(contractData);
      }
      console.log("%%%%%#####$$$$$" + this.allocationsArray);
    });
  }

  getDates(contractType) {
    this.setMaxDate();
    this.date.startDate = this.allocationsDateRangeForm.get('startDate').value;
    this.date.endDate = this.allocationsDateRangeForm.get('endDate').value;
    this.date.contractType = contractType;
    if (this.date.startDate && this.date.endDate) {
      this.allocationsDataService.getDateRange(this.date).subscribe((dateRange) => {
        this.appliedDateArray = dateRange;
        this.isDateApplied = true;
        this.getAllocationData();
      });
    }
  }

  setMaxDate() {
    this.maxDate1 = new Date(this.allocationsDateRangeForm.get('startDate').value);
    this.maxDate1.setMonth(new Date(this.allocationsDateRangeForm.get('startDate').value).getMonth() + 2);
  }

  getDefaultDates() {
    this.allocationsDateRangeForm.get('startDate').setValue(this.todaysDate);
    this.setMaxDate();
    this.defaultMaxDate.setDate(this.todaysDate.getDate() + 14);
    this.allocationsDateRangeForm.get('endDate').setValue(this.defaultMaxDate);
    this.date.startDate = this.allocationsDateRangeForm.get('startDate').value;
    this.date.endDate = this.allocationsDateRangeForm.get('endDate').value;
  }

  getForwardDates() {
    let dt1 = this.allocationsDateRangeForm.get('startDate').value;
    let dt2 = this.allocationsDateRangeForm.get('endDate').value;
    if (dt1 && dt2) {
      let days = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
      dt2.setDate(new Date(this.allocationsDateRangeForm.get('endDate').value).getDate() + 1);
      this.allocationsDateRangeForm.get('startDate').setValue(dt2);
      let startDateObject = new Date(this.allocationsDateRangeForm.get('startDate').value);
      startDateObject.setDate(startDateObject.getDate() + days);
      this.allocationsDateRangeForm.get('endDate').setValue(startDateObject);
      this.getDates(this.date.contractType);
    }
  }

  getBackwardDates() {
    let dt1 = this.allocationsDateRangeForm.get('startDate').value;
    let dt2 = this.allocationsDateRangeForm.get('endDate').value;
    if (dt1 && dt2) {
      let days = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
      dt1.setDate(new Date(this.allocationsDateRangeForm.get('startDate').value).getDate() - 1);
      this.allocationsDateRangeForm.get('endDate').setValue(dt1);
      let endDateObject = new Date(this.allocationsDateRangeForm.get('endDate').value);
      endDateObject.setDate(endDateObject.getDate() - days);
      this.allocationsDateRangeForm.get('startDate').setValue(endDateObject);
      this.getDates(this.date.contractType);
    }
  }

  copy(price, i, j, k, l) {
    for (let a = l; a < this.allocationsArray.rooms[i].rateCategory[j].occupancy[k].occupancyPrice.length; a++) {
      //this.allocationsArray.rooms[i].rateCategory[j].occupancy[k].occupancyPrice[a].price = price;
      this.getOccupancyPriceArray(i, j, k).controls[a].get('price').setValue(price);
      // array[a].price = price;
    }
  }

  reset(i, j) {
    this.getRateCategoryArray(i).controls[j].get('roomsToSell').setValue(this.allocationsCopyArray.rooms[i].rateCategory[j].roomsToSell);
    this.getRateCategoryArray(i).controls[j].get('status').setValue(this.allocationsCopyArray.rooms[i].rateCategory[j].status);
    this.getRateCategoryArray(i).controls[j].get('occupancy').setValue(this.allocationsCopyArray.rooms[i].rateCategory[j].occupancy);
  }

  bulkUpdateDialog() {
    this.dialogsService
      .openBulkUpdateModal(this.hotelId).subscribe(res => {
      });
  }
}
