import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CONSTANTS } from '../../../../common/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RatecategoryDataService } from '../../../common/extranet-shared/services/ratecategory-data.service';
import { MarketDataService } from '../../../common/extranet-shared/services/market-data.service';
import { MatSnackBar } from '@angular/material';
import { ObjectState } from '../../../../common/enums';
import { RateCategoryInfoViewModel } from '../../../viewmodel/ratecategoryviewmodel/RateCategoryInfoViewModel';
import { RoomListViewModel } from '../../../viewmodel/ratecategoryviewmodel/roomlistviewmodel';
import { CancellationPolicyListViewModel } from '../../../viewmodel/ratecategoryviewmodel/CancellationPolicyListViewModel';
import { MealTypeViewModel } from '../../../viewmodel/associatemealplanviewmodel/MealTypeViewModel';
import { MarketCountryViewModel } from '../../../viewmodel/common/marketcountryviewmodel';
import { MarketContinentViewModel } from '../../../viewmodel/common/marketcontinentviewmodel';
import { MarketViewModel } from '../../../viewmodel/common/marketviewmodel';
import {MarketIncludedAndExcludedCountryViewModel} from '../../../viewmodel/common/marketincludedandexcludedcountryviewmodel';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';

function ValidateRoom(control: AbstractControl): { [key: string]: boolean } | null {
  const newRoomList = control.get('roomTypeList');
  let roomSelectflag = false;
  newRoomList.value.forEach(element => {
    const isRoomSelect = element.isSelected;
    if (isRoomSelect === true) {
      roomSelectflag = true;
    }
  });

  if (roomSelectflag === false) {
    return { 'ValidateArrangmentRoom': true };
  } else {
    return null;
  }
}

@Component({
  selector: 'app-rate-category-info',
  templateUrl: './rate-category-info.component.html',
  styleUrls: ['./rate-category-info.component.css']
})
export class RateCategoryInfoComponent implements OnInit {
  operation: string;
  isRead: boolean;
  rateOperation: string;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  hotelId: string;
  rateId: number;
  result: boolean;
  roomList: RoomListViewModel[];
  cancellationPolicyList: CancellationPolicyListViewModel[];
  mealList: MealTypeViewModel[];
  countries: MarketCountryViewModel[];
  continents: MarketContinentViewModel[];
  marketList: MarketViewModel[];
  marketIncludedAndExcludedCountriesList: MarketIncludedAndExcludedCountryViewModel[];
  rateCategoryInfo: RateCategoryInfoViewModel = <RateCategoryInfoViewModel>{};
  cancellationPolicyNameReiew: string;
  contractTypeReiew: string;
  mealNameReiew: string;
  marketNameReiew: string;
  includedcountryNames: string;
  excludedcountryNames: string;
  roomNameReview: any[];

  rateForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private rateCategoryDataService: RatecategoryDataService, private cd: ChangeDetectorRef,
    public snackBar: MatSnackBar, private dialogsService: DialogsService,
    private marketDataService: MarketDataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.rateOperation = this.activatedRoute.snapshot.params['operation'];
    this.rateId = this.activatedRoute.snapshot.params['id'];

    this.roomList = this.activatedRoute.snapshot.data['roomTypesData'];

    // this.getRooms(this.hotelId);
    this.getCancellationPolicies(this.hotelId);
    this.getMeal();
    this.getCountries();
    this.getContinents();
    this.getMarkets();

    if (this.rateOperation.toLowerCase().trim() === this.edit || this.rateOperation.toLowerCase().trim() === this.read) {
      this.getRateDetails(this.rateId);
    }

    if (this.rateOperation.toLowerCase().trim() === this.create) {
      this.contractTypeReiew = 'Static';
    }

    this.rateForm = new FormGroup({
      isActive: new FormControl('true'),
      isStatic: new FormControl(true, Validators.required),
      name: new FormControl('', Validators.required),
      cancellationPolicyId: new FormControl('', Validators.required),
      mealId: new FormControl('', Validators.required),
      marketId: new FormControl('', Validators.required),
      objectState: new FormControl(ObjectState.Added),
      roomTypeList: this.buildRoomTypeOptions()
    }, ValidateRoom);

  }

   get roomTypeList(): FormArray {
    return <FormArray>this.rateForm.get('roomTypeList');
   }

  buildRoomTypeOptions() {
    let roomTypeArray: FormArray;
    let roomTypeOptionsFormGroup: FormGroup;
    this.roomList.forEach(roomtype => {
      roomTypeOptionsFormGroup = new FormGroup({
        id: new FormControl(0),
        roomId: new FormControl(roomtype.roomId),
        roomName: new FormControl(roomtype.roomName),
        isSelected: new FormControl(false),
        objectState: new FormControl(ObjectState.Added)
      });
      if (roomTypeArray === null || roomTypeArray === undefined) {
        roomTypeArray = new FormArray([roomTypeOptionsFormGroup]);
      } else {
        roomTypeArray.push(roomTypeOptionsFormGroup);
      }
    });
    return roomTypeArray;
  }

  cancelRateCategory() {
    if (this.rateForm.dirty) {
      this.dialogsService.confirm('Confirm', 'If you cancel, the current data will be lost').subscribe(res => {
        this.result = res;
        if (this.result) {
          this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'ratecategory']);
        }
      });
    } else {
      this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'ratecategory']);
    }
  }

  getRooms(hotelId) {
    this.rateCategoryDataService.getRooms(hotelId).subscribe(roomList => {
      this.roomList = roomList;
    });
  }

  getCountries() {
    this.marketDataService.getCountries().subscribe(countryList => {
      this.countries = countryList;
    });
  }

  getContinents() {
    this.marketDataService.getContinents().subscribe(continentList => {
      this.continents = continentList;
    });
  }

  getMarkets() {
    this.marketDataService.getMarkets().subscribe(marketList => {
      this.marketList = marketList;
      this.cd.detectChanges();
    });
  }

  getCancellationPolicies(hotelId) {
    this.rateCategoryDataService.getCancellationPolicies(hotelId).subscribe(policylist => {
    this.cancellationPolicyList = policylist;
    });
  }

  getMeal() {
    this.rateCategoryDataService.getMeal().subscribe(mealList => {
      this.mealList = mealList;
    });
  }

  createMarket() {
    this.dialogsService.market('Create Market', this.countries, this.continents).subscribe(res => {
      this.result = res;
      if (this.result) {
        this.getMarkets();
      }
    });
  }

  flagControlsAsEdited() {
    if (this.rateOperation.toLowerCase().trim() === this.edit) {
      this.rateForm.get('objectState').setValue(ObjectState.Modified);
    }
  }

  flagContractTypeAsEdited() {
    const contractType = this.rateForm.get('isStatic').value;
      if (contractType === true) {
        this.contractTypeReiew = 'Static';
      } else {
        this.contractTypeReiew = 'Dynamic';
      }
    this.flagControlsAsEdited();
  }

  flagCancellationPolicyAsEdited() {
    const cpId = this.rateForm.get('cancellationPolicyId').value;
    this.cancellationPolicyList.forEach(policyList => {
      if (cpId == policyList.cancellationPolicyId) {
        this.cancellationPolicyNameReiew = policyList.name;
      }
    });
    this.flagControlsAsEdited();
  }

  flagMealTypeAsEdited() {
    const hmId = this.rateForm.get('mealId').value;
    this.mealList.forEach(mealTypeList => {
      if (hmId == mealTypeList.id) {
        this.mealNameReiew = mealTypeList.meal;
      }
    });
    this.flagControlsAsEdited();
  }

  flagMarketAsEdited() {
    const mId = this.rateForm.get('marketId').value;
    this.getMarketIncludedAndExcludedCountry(mId);

    this.marketList.forEach(marketTypeList => {
      if (mId == marketTypeList.marketId) {
        this.marketNameReiew = marketTypeList.marketName;
      }
    });
    this.flagControlsAsEdited();
  }

  flagRoomTypeAsEdited(ind) {
    this.roomNameReview = [];
    this.roomTypeList.controls.forEach((control, index) => {
      const rtId = control.get('isSelected').value;
      if (rtId === true) {
        const rtName = control.get('roomName').value;
        this.roomNameReview.push(rtName);
      }
    });
    if (this.rateOperation.toLowerCase().trim() === this.edit) {
      if (this.roomTypeList.controls[ind].get('objectState').value !== ObjectState.Added) {
        this.roomTypeList.controls[ind].get('objectState').setValue(ObjectState.Modified);
      }
    }
  }

  getMarketIncludedAndExcludedCountry(mId) {
    this.includedcountryNames = '';
    this.excludedcountryNames = '';
    this.cd.detectChanges();
    this.marketDataService.getMarketIncludedAndExcludedCountry(mId).subscribe(includedAndExcludedCountriesList => {
      this.marketIncludedAndExcludedCountriesList = includedAndExcludedCountriesList;

      this.marketIncludedAndExcludedCountriesList.forEach(countryTypeList => {
        this.cd.detectChanges();
        if (countryTypeList.isIncluded === true) {
          this.includedcountryNames += ', ' + countryTypeList.countryName;
        } else {
          this.excludedcountryNames += ', ' + countryTypeList.countryName;
        }
      });
      this.includedcountryNames = this.includedcountryNames.substr(2);
      this.excludedcountryNames = this.excludedcountryNames.substr(2);
    });
  }

  private getRateDetails(rateId) {
    this.rateCategoryDataService.getRateDetails(rateId).subscribe(rateData => {
      const roomTypevalue = rateData.roomTypeList;
      this.getMarketIncludedAndExcludedCountry(rateData.marketId);

      if (this.rateOperation.toLowerCase().trim() === this.edit || this.rateOperation.toLowerCase().trim() === this.read) {
        this.rateForm.get('isActive').setValue(rateData.isActive);
        this.rateForm.get('isStatic').setValue(rateData.isStatic);
        this.rateForm.get('name').setValue(rateData.name);
        this.rateForm.get('cancellationPolicyId').setValue(rateData.cancellationPolicyId);
        this.rateForm.get('mealId').setValue(rateData.mealId);
        this.rateForm.get('marketId').setValue(rateData.marketId);
        this.rateForm.get('objectState').setValue(ObjectState.Unchanged);

        this.roomTypeList.controls.forEach((control, index) => {
          roomTypevalue.forEach((rtvalue) => {
              if (control.get('roomId').value === rtvalue.roomId) {
                control.get('id').setValue(rtvalue.id);
                control.get('roomId').setValue(rtvalue.roomId);
                control.get('isSelected').setValue(rtvalue.isSelected);
                control.get('objectState').setValue(ObjectState.Unchanged);
              }
            });
        });

        if (this.rateOperation.toLowerCase().trim() === this.read) {
          this.isRead = true;
          this.rateForm.disable();
        }
      }

      if (rateData.isStatic === true) {
        this.contractTypeReiew = 'Static';
      } else {
        this.contractTypeReiew = 'Dynamic';
      }

      this.roomNameReview = [];
      this.roomTypeList.controls.forEach((control, index) => {
        const rtId = control.get('isSelected').value;
        if (rtId === true) {
          const rtName = control.get('roomName').value;
          this.roomNameReview.push(rtName);
        }
      });

      if (this.mealList !== undefined) {
        this.mealList.forEach(mealTypeList => {
          if (rateData.mealId === mealTypeList.id) {
            this.mealNameReiew = mealTypeList.meal;
          }
        });
      }

      if (this.marketList !== undefined) {
        this.marketList.forEach(marketTypeList => {
          if (rateData.marketId === marketTypeList.marketId) {
            this.marketNameReiew = marketTypeList.marketName;
          }
        });
      }

      if (this.cancellationPolicyList !== undefined) {
        this.cancellationPolicyList.forEach(policyList => {
          if (rateData.cancellationPolicyId === policyList.cancellationPolicyId) {
            this.cancellationPolicyNameReiew = policyList.name;
          }
        });
      }
    });
  }

  saveRate() {
    if (this.rateForm.valid) {
      const ratetypes = Object.assign({}, this.rateCategoryInfo, this.rateForm.value);
      if (this.rateOperation.toLowerCase().trim() === this.create) {
        ratetypes.id = 0;
        ratetypes.hotelId = this.hotelId;
      }
      if (this.rateOperation.toLowerCase().trim() === this.edit) {
        ratetypes.id = this.rateId;
        ratetypes.hotelId = this.hotelId;
      }

       this.rateCategoryDataService.addRateCategory(ratetypes as RateCategoryInfoViewModel)
        .subscribe(data => {
          this.snackBar.open('Rate Category Saved Successfully',  '',
            { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'ratecategory']);
       });
    }
  }

}
