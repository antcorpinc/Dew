import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RateCategoryViewModel } from '../../../viewmodel/contracts/allocations/ratecategoryviewmodel';
import { RoomTypeViewModel } from '../../../viewmodel/contracts/allocations/roomtypeviewmodel';
import { DaysOfWeekViewModel } from '../../../viewmodel/contracts/allocations/daysofweekviewmodel';
import { AllotmentTypeViewModel } from '../../../viewmodel/contracts/allocations/allotmenttypeviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';


function ValidateAllocationRange(control: AbstractControl): { [key: string]: boolean } | null {
  const arr = [];
  const allocationRangeList = control;
  let result = '';
  // Validations for elements of the range allocation array []
  // Has to have atleast 2 elements to compare
  if ((allocationRangeList.value !== undefined) && (allocationRangeList.value !== null) &&
    (allocationRangeList.value.length > 1)) {
     allocationRangeList.value.forEach((element, index) => {
        if (index <= allocationRangeList.value.length) {
          result = traverseAllocationRangeList(<FormArray>allocationRangeList, index, ++index);
         if (result !== null && result !== undefined && result.length > 0) {
           arr.push(result);
         }
        }
      });

      if (arr !== null && arr !== undefined && arr.length > 0) {
        return { 'ValidateRateCategoryId': true };
      } else  {
        return null;
      }
}
}

function traverseAllocationRangeList(rangeList: FormArray, currentIndex: number , nextIndex: number):
string|null {
      // if (currentIndex === rangeList.length - 1 ) {
      //  return null;
      // }
  if (currentIndex < rangeList.length - 1) {
    const currentItem = rangeList.value[currentIndex];
    const nextItem = rangeList.value[nextIndex];

    if (currentItem.rateCategoryId !== undefined && currentItem.rateCategoryId !== null
      && currentItem.fromDate !== undefined && currentItem.fromDate !== null
      && currentItem.toDate !== undefined && currentItem.toDate !== null
      && currentItem.days !== undefined && currentItem.days !== null
      && currentItem.allocationTypeId !== undefined && currentItem.allocationTypeId !== null
      &&
      nextItem.rateCategoryId !== undefined && nextItem.rateCategoryId !== null
      && nextItem.fromDate !== undefined && nextItem.fromDate !== null
      && nextItem.toDate !== undefined && nextItem.toDate !== null
      && nextItem.days !== undefined && nextItem.days !== null
      && nextItem.allocationTypeId !== undefined && nextItem.allocationTypeId !== null

    ) {
      // Add Validation Rules -- Now Just Testing
      const currentrateCategoryId = currentItem.rateCategoryId;
      const nextrateCategoryId = nextItem.rateCategoryId;
      if (currentrateCategoryId === nextrateCategoryId) {
        return 'ValidateRateCategoryId';
      }
       ++nextIndex;
       if ( nextIndex === rangeList.length) {
        return null;
       }else {
      return traverseAllocationRangeList(rangeList, currentIndex, nextIndex);
       }
    } else {
      return null;
    }
  }
}

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css']
})
export class AllocationsComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  rateCategoryList:  RateCategoryViewModel[];
  roomTypeList: RoomTypeViewModel[];
  daysOfWeekList: DaysOfWeekViewModel[];
  allotmentTypeList: AllotmentTypeViewModel[];
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  contractAllocationForm: FormGroup;

    // To do change this according to whether there are any range allocation created
    // If none then create 1 by default else show the number created on init
  contractAllocationOperation= CONSTANTS.operation.create;

  ngOnInit() {

    // Get the master data
    // For testing
    this.rateCategoryList = [
      { id: 1, name: 'Standard Rate' },
      { id: 2, name: 'Read Only' },
      { id: 3, name: 'Non-Refundable' },
    ];
    this.roomTypeList = [
      { id: 1, name: 'Std-Haven-Double' },
      { id: 2, name: 'Std-Haven-Sunroof' },
      { id: 3, name: 'Std-Haven-Beach Front' },
      { id: 4, name: 'Stdd-Haven-Balcony' },

      { id: 5, name: 'Room Only-Haven-Double' },
      { id: 6, name: 'Room Only-Haven-Sunroof' },
      { id: 7, name: 'Room Only-Haven-Beach Front' },
      { id: 8, name: 'Room Only-Haven-Balcony' },

      { id: 9,  name: 'NRF-Haven-Double' },
      { id: 10, name: 'NRF-Haven-Sunroof' },
      { id: 11, name: 'NRF-Haven-Beach Front' },
      { id: 12, name: 'NRF-Haven-Balcony' }
    ];
    this.daysOfWeekList = [
      { id: 'Mon', name: 'Mon' },
      { id: 'Tue', name: 'Tue' },
      { id: 'Wed', name: 'Wed' },
      { id: 'Thu', name: 'Thu' },
      { id: 'Fri', name: 'Fri' },
      { id: 'Sat', name: 'Sat' },
      { id: 'Sun', name: 'Sun' },
    ];

    this.allotmentTypeList = [
      { id: 1, name: 'Room Level' },
      { id: 2, name: 'Rate Category' },
      { id: 3, name: 'Is Free Sale' },
    ];



    // Create the Form Model

    this.contractAllocationForm = new FormGroup({
      pooledAllotment: new FormControl(),
      rangeAllocation: new FormArray([], ValidateAllocationRange)
    });
    // To do get operation-- Api whether there was any or do we need this?
    if (this.contractAllocationOperation.toLowerCase().trim() === this.create) {
      this.addAllocationRange();
    }
  }

  get rangeAllocation():  FormArray {
    return <FormArray>this.contractAllocationForm.get('rangeAllocation');
   }

  addAllocationRange() {
    this.rangeAllocation.push(this.buildAllocationRange());
    this.cd.detectChanges();
  }

  buildAllocationRange(): FormGroup {
    let allocationRangeGroup: FormGroup;
    allocationRangeGroup = new FormGroup({
      rateCategoryId: new FormControl(),
      roomTypeId: new FormControl(),
      fromDate: new FormControl(),
      toDate: new FormControl(),
      days: new FormControl(),
      allocationTypeId: new FormControl(),
      allotment: new FormControl(),
      singleBed: new FormControl(),
      doubleBed: new FormControl(),
      tripleBed: new FormControl(),
      quadBed: new FormControl(),
      extraBed: new FormControl()
    });
    return allocationRangeGroup;

  }

   onPooledApply() {
   const pooledAllotment = this.contractAllocationForm.get('pooledAllotment').value;
   this.rangeAllocation.controls.forEach((control, index) => {
    control.get('allotment').setValue(pooledAllotment);
    control.get('allotment').disable();
   });
  }

  onPooledClear() {
    this.contractAllocationForm.get('pooledAllotment').setValue('');
    this.rangeAllocation.controls.forEach((control, index) => {
     control.get('allotment').setValue('');
     control.get('allotment').enable();
    });
   }
}
