import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EXTRANETCONSTANTS } from '../../../../common/constants';
import { MatSnackBar } from '@angular/material';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { FacilityGroupViewModel } from '../../../../viewmodel/facilitiesservicesviewmodel/facilitygroupviewmodel';
import { FacilityTypeViewModel } from '../../../../viewmodel/facilitiesservicesviewmodel/facilitytypeviewmodel';
import { ObjectState } from '../../../../../common/enums';
// tslint:disable-next-line:max-line-length
import { ContractFacilitiesDataServiceService } from '../../../../common/extranet-shared/services/contracts/contract-facilities-data-service.service';
import { CONSTANTS } from '../../../../../common/constants';
import { ContractUrlNotificationService } from '../../../../common/extranet-shared/services/contracts/contract-url-notification.service';

const facilities = EXTRANETCONSTANTS.facilities;
const duration = CONSTANTS.toasterTimeOut.duration;

@Component({
  selector: 'app-facilities-services',
  templateUrl: './facilities-services.component.html',
  styleUrls: ['./facilities-services.component.css']
})
export class FacilitiesServicesComponent implements OnInit {

  facilityGroupList: FacilityGroupViewModel[];
  facilitiesList: FacilityGroupViewModel[];
  facilitiesForm: FormGroup;
  groupIndexOfInternet = 0;
  isFacilityExits: boolean;
  facilityOperation: string;
  contractId = this.route.parent.snapshot.params['id'];
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;

  internetGroupId = facilities.facilitiesGroupIds.internetGroupId;
  parkingGroupId = facilities.facilitiesGroupIds.parkingGroupId;
  petsGroupId = facilities.facilitiesGroupIds.petsGroupId;
  languagesGroupId = facilities.facilitiesGroupIds.languagesGroupId;
  activitiesGroupId = facilities.facilitiesGroupIds.activitiesGroupId;
  foodAndDrinkGroupId = facilities.facilitiesGroupIds.foodAndDrinkGroupId;
  poolAndWellnessGroupId = facilities.facilitiesGroupIds.poolAndWellnessGroupId;
  receptionServicesGroupId = facilities.facilitiesGroupIds.receptionServicesGroupId;
  transportGroupId = facilities.facilitiesGroupIds.transportGroupId;
  commonAreasGroupId = facilities.facilitiesGroupIds.commonAreasGroupId;
  entertainmentGroupId = facilities.facilitiesGroupIds.entertainmentGroupId;
  cleaningGroupId = facilities.facilitiesGroupIds.cleaningGroupId;
  businessGroupId = facilities.facilitiesGroupIds.businessGroupId;
  shopsGroupId = facilities.facilitiesGroupIds.shopsGroupId;
  miscellaneousGroupId = facilities.facilitiesGroupIds.miscellaneousGroupId;

  isInternetAvailableTypeId = facilities.facilitiesTypeId.isInternetAvailableTypeId;
  connectionTypeTypeId = facilities.facilitiesTypeId.connectionTypeTypeId;
  connectionLocationTypeId = facilities.facilitiesTypeId.connectionLocationTypeId;
  isParkingAvailableTypeId = facilities.facilitiesTypeId.isParkingAvailableTypeId;
  reserveParkingTypeId = facilities.facilitiesTypeId.reserveParkingTypeId;
  petsAllowedTypeId = facilities.facilitiesTypeId.petsAllowedTypeId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public snackBar: MatSnackBar,
              public contractFacilitiesDataServiceService: ContractFacilitiesDataServiceService,
              private activatedRoute: ActivatedRoute,
              public contractUrlNotificationService: ContractUrlNotificationService
            ) {
                contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
               }

  ngOnInit() {
    this.getFacilitiesServices();
    window.scrollTo(0, 0);

    this.contractFacilitiesDataServiceService.isContractFacilityExits(this.contractId).subscribe( isFacilityExits => {
      this.isFacilityExits = isFacilityExits.result;
      if (this.isFacilityExits === false) {
        this.facilityOperation = this.create;
      } else {
        this.facilityOperation = this.edit;
      }
    });
  }

  getFacilitiesServices() {
    this.facilityGroupList = this.route.snapshot.data['contractFacilityData'];

    this.facilitiesForm = new FormGroup({
      facilitiesGroupArray: this.buildFacilityGroupsForm(this.facilityGroupList)
    });

    // To disable dropdown if internet connection is NO
    let isInternet = null;
    this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(facilityTypeControl => {
      if (facilityTypeControl.value.facilityTypeId === 1) {
        const facilitySelected = facilityTypeControl.value.selectedFacilityId;
        facilityTypeControl.value.facilityList.forEach(facility => {
          if (facility.id === +(facilitySelected)) {
            if (facility.name === 'No') {
              isInternet = 'No';
            } else {
              isInternet = 'Yes';
            }
          }
        });
      }
      if (isInternet === 'No') {
        if (facilityTypeControl.value.facilityTypeId === this.connectionTypeTypeId ||
                      facilityTypeControl.value.facilityTypeId === this.connectionLocationTypeId) {
          facilityTypeControl.disable();
        }
      }
    });
    // To disable dropdown if internet connection is NO Ends
  }

  get facilitiesGroupArray(): FormArray{
    return <FormArray>this.facilitiesForm.get('facilitiesGroupArray');
  }

  getTypeArrayForGroup(groupIndex: number): FormArray {
      return <FormArray>this.facilitiesGroupArray.controls[groupIndex].get('hotelFacilityTypes');
  }

  getFacilityArrayForGroupAndType(groupIndex: number , typeIndex: number) {
    return <FormArray> this.getTypeArrayForGroup(groupIndex).controls[typeIndex].get('facilityList');
  }

  buildFacilityGroupsForm(facilityGroups: FacilityGroupViewModel[]): FormArray {
    let groupFormGroup: FormGroup;
    let groupFormArray: FormArray;

    facilityGroups.forEach(facilityGroup => {
      groupFormGroup = new FormGroup({
        facilityGroupId: new FormControl(facilityGroup.facilityGroupId),
        facilityGroupName: new FormControl(facilityGroup.facilityGroupName),
        isSelected: new FormControl(facilityGroup.isSelected),
        hotelFacilityTypes : this.buildFacilityTypesForm(facilityGroup)
      });
      if (groupFormArray === null || groupFormArray === undefined) {
        groupFormArray = new FormArray([groupFormGroup]);
      } else {
        groupFormArray.push(groupFormGroup);
      }
    });

    return groupFormArray;
  }

  buildFacilityTypesForm(facilityGroup: FacilityGroupViewModel): FormArray {
    let typeFormGroup: FormGroup;
    let typeFormArray: FormArray;

    facilityGroup.hotelFacilityTypes.forEach(facilityType => {
      typeFormGroup = new FormGroup({
        facilityTypeId: new FormControl(facilityType.facilityTypeId),
        facilityGroupId: new FormControl(facilityType.facilityGroupId),
        facilityTypeName: new FormControl(facilityType.facilityTypeName),
        selectedAll: new FormControl(false),
        selectedFacilityId: new FormControl,
        multiSelectedFacilityIds: new FormControl,
        facilityList : this.buildFacilitiesForm(facilityType)
      });


      // for single select dropdowns
      if (facilityType.facilityTypeId === this.isInternetAvailableTypeId ||
          facilityType.facilityTypeId === this.connectionTypeTypeId ||
          facilityType.facilityTypeId === this.connectionLocationTypeId ||
          facilityType.facilityTypeId === this.isParkingAvailableTypeId ||
          facilityType.facilityTypeId === this.reserveParkingTypeId ||
          facilityType.facilityTypeId === this.petsAllowedTypeId) {
        facilityType.facilityList.forEach(facility => {
          if (facility.isSelected === true) {
            typeFormGroup.patchValue({
              selectedFacilityId: String(facility.id)
            });
          }
        });
      }

      const selectedAll = facilityType.facilityList.every(function (item: any){
        return item.isSelected === true;
      });
      typeFormGroup.patchValue({
        selectedAll: selectedAll
      });

      // for multi select dropdown
      if (facilityGroup.facilityGroupId === this.languagesGroupId) {
        const multiselectedFacilityIds = [];
        facilityType.facilityList.forEach(facility => {
          if (facility.isSelected === true) {
            multiselectedFacilityIds.push(String(facility.id));
            typeFormGroup.patchValue({
              multiSelectedFacilityIds: multiselectedFacilityIds
            });
          }
        });
      }

      if (typeFormArray === null || typeFormArray === undefined) {
        typeFormArray = new FormArray([typeFormGroup]);
      } else {
        typeFormArray.push(typeFormGroup);
      }
    });
    return typeFormArray;
  }

  buildFacilitiesForm(facilityType: FacilityTypeViewModel): FormArray {
    let facilityFormGroup: FormGroup;
    let facilityFormArray: FormArray;

    facilityType.facilityList.forEach(facility => {
      facilityFormGroup = new FormGroup({
        facilityRelationId: new FormControl(facility.facilityRelationId),
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        facilityTypeId: new FormControl(facility.facilityTypeId),
        facilityGroupId: new FormControl(facility.facilityGroupId),
        isSelected: new FormControl(facility.isSelected)
      });
      if (facilityFormArray === null || facilityFormArray === undefined) {
        facilityFormArray = new FormArray([facilityFormGroup]);
      } else {
        facilityFormArray.push(facilityFormGroup);
      }

    });

    return facilityFormArray;
  }

  selectAll(facilityGroupIndex, facilityTypeIndex) {
      this.getFacilityArrayForGroupAndType(facilityGroupIndex, facilityTypeIndex).controls.forEach
      ( facility => {
        facility.patchValue({
          isSelected: this.facilitiesForm.value.facilitiesGroupArray[facilityGroupIndex].
                              hotelFacilityTypes[facilityTypeIndex].selectedAll
        });
      });
  }
  checkIfAllSelected(facilityGroupIndex, facilityTypeIndex) {
    this.getTypeArrayForGroup(facilityGroupIndex).controls.forEach((facilityType, i) => {
      if (facilityTypeIndex === i) {
        facilityType.patchValue({
          selectedAll: this.facilitiesForm.value.facilitiesGroupArray[facilityGroupIndex].
                    hotelFacilityTypes[facilityTypeIndex].facilityList.every(function (item: any) {
                        return item.isSelected === true;
                         })
        });
      }
    });
  }

  saveFacilities() {

    this.updateFacilitiesList();

    const saveContractFacilities = {
      facilityGroupList: this.facilitiesList,
      contractId: this.contractId
    };

    this.contractFacilitiesDataServiceService.addContractFacilities(saveContractFacilities as any)
        .subscribe(data => {
          this.router.navigate(['/contractmgmt/contracts']);
          this.snackBar.open('Contract Facilities & Services Saved Successfully', '',
                     { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          window.scrollTo(0, 0);
        }
      );
  }

  saveAndContinue() {

    this.updateFacilitiesList();

    const saveContractFacilities = {
      facilityGroupList: this.facilitiesList,
      contractId: this.contractId
    };

    this.contractFacilitiesDataServiceService.addContractFacilities(saveContractFacilities as any)
        .subscribe(data => {
          this.router.navigate(['contractmgmt/contract', this.contractId, this.edit, 'roomtypelist']);
          this.snackBar.open('Contract Facilities & Services Saved Successfully', '',
                     { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          window.scrollTo(0, 0);
        }
      );
  }

  updateFacilitiesList() {
    // to convert dropdown facilities in true or false
    this.facilitiesForm.value.facilitiesGroupArray.forEach(facilityGroup => {
      facilityGroup.hotelFacilityTypes.forEach(facilityType => {
        if (facilityType.selectedFacilityId != null) {
          facilityType.facilityList.forEach(facility => {
            if (facility.id === +(facilityType.selectedFacilityId)) {
              facility.isSelected = true;
            } else {
              facility.isSelected = false;
            }
          });
        } else if (facilityType.multiSelectedFacilityIds != null) {
          facilityType.facilityList.forEach(facility => {
            facility.isSelected = false;
          });
          facilityType.multiSelectedFacilityIds.forEach(selectedId => {
            facilityType.facilityList.forEach(facility => {
              if (facility.id === +(selectedId)) {
                facility.isSelected = true;
              }
            });
          });
        }
      });
    });

    this.facilitiesList = Object.assign([], this.facilityGroupList, this.facilitiesForm.value.facilitiesGroupArray);

    this.updateObjectState();

  }

  updateObjectState() {
    if (this.facilityOperation === this.create) {
      this.facilitiesList.forEach(grp => {
        grp.hotelFacilityTypes.forEach(type => {
          type.facilityList.forEach(facility => {
            if (facility.isSelected) {
              facility.objectState = ObjectState.Added;
            } else {
              facility.objectState = ObjectState.Unchanged;
            }
          });
        });
      });
    } else if (this.facilityOperation === this.edit) {
      this.facilitiesList.forEach((grp, i) => {
        grp.hotelFacilityTypes.forEach((type, j) => {
          type.facilityList.forEach((facility, k) => {
            if (facility.isSelected !== this.checkOriginalObjectState(i, j, k)) {
              if (facility.isSelected) {
                facility.objectState = ObjectState.Added;
              } else {
                facility.objectState = ObjectState.Deleted;
              }
            } else {
              facility.objectState = ObjectState.Unchanged;
            }
          });
        });
      });
    }
  }

  checkOriginalObjectState(grpindex: number, typeindex: number, facilityindex: number): boolean {
    return this.facilityGroupList[grpindex].hotelFacilityTypes[typeindex].
    facilityList[facilityindex].isSelected;
  }

  cancelFacilities() {
    this.router.navigate(['/contractmgmt/contracts']);
    window.scrollTo(0, 0);
  }

  isInternetDropdownChange(event) {
      // 2 is for 'NO'
      if (+(event.value) === 2) {
          this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(facilityTypeControl => {
            if (facilityTypeControl.value.facilityTypeId === this.connectionTypeTypeId ||
                                  facilityTypeControl.value.facilityTypeId === this.connectionLocationTypeId) {
              facilityTypeControl.disable();
              facilityTypeControl.patchValue({
                selectedFacilityId : null
              });
            }
          });
      } else {
        this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(facilityTypeControl => {
            if (facilityTypeControl.value.facilityTypeId === this.connectionTypeTypeId ||
                               facilityTypeControl.value.facilityTypeId === this.connectionLocationTypeId) {
              facilityTypeControl.enable();
            }
        });
      }
  }
}
