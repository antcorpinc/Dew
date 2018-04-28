import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { Observable } from 'rxjs/Observable';
import { ContractUrlNotificationService } from '../../../common/extranet-shared/services/contracts/contract-url-notification.service';
import { ContractNameDataService } from '../../../common/extranet-shared/services/contracts/contract-name-data.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ContractDataService } from '../../../common/extranet-shared/services/contracts/contract-data.service';
import { ContractType } from '../../../../common/enums';
import { DatePipe } from '@angular/common';
import {
  DateAdapter,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import { ContractsListViewModel } from '../../../viewmodel/contracts/contractslistviewmodel';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/observable/of';

const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create;

const DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

export class DatePickerDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    date.setMinutes(date.getTimezoneOffset() * -1);
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



function contractExists(contractDataService: ContractDataService)  {
  return  (c: AbstractControl) => {
    if (c.value !== undefined && c.value !== null ) {
   return  contractDataService.contractNameExist(c.value).map(
      data => data.result ? { 'contractExists': true } : null
    );
  }else {
    return Observable.of(null);
  }
};
}

@Component({
  selector: 'app-contract-nav-menu',
  templateUrl: './contract-nav-menu.component.html',
  styleUrls: ['./contract-nav-menu.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }
  ]
})
export class ContractNavMenuComponent implements OnInit {
  path: string;
  // @Input() contractName: string;
  isRead: boolean;
  operation: string;
  contractId: number;
  isDisabledTab: boolean;
  colorClass = '';
  state1 = true;
  state2 = false;
  state3 = false;
  state4 = false;
  contractName: string;
  showhotelinfo: boolean;
  showRate: boolean;
  isNameEditable = false;
  contractEnteredName: string;
  createContract: FormGroup;
  contractType: ContractType;
  showMenuChips: boolean;
  breadcrumbs: string;
  contractTypeName: string;
  startDate = new Date();
  startNonMGDate = new Date();
  contractsList: ContractsListViewModel[];
  contractBasicData: string[] = [];
  uniqueNameError = false;

  chipsList = [
    {
      chipId: 1,
      chipname: 'Hotel Info',
      chipcolor: 'primary',
      chipchild: 'hotelinfo',
      routerLink: 'hoteldetails',
      selected: true
    },
    {
      chipId: 2,
      chipname: 'Rate',
      chipcolor: 'accent',
      chipchild: 'Rate',
      routerLink: 'roomtypelist',
      selected: false
    },
    {
      chipId: 3,
      chipname: 'Allocations',
      chipcolor: 'accent',
      chipchild: 'allocation',
      routerLink: 'allocations',
      selected: false
    },
    {
      chipId: 4,
      chipname: 'Contract Terms',
      chipcolor: 'accent',
      chipchild: '',
      routerLink: 'contractterms',
      selected: false
    }
  ];
  params: any;
  coming: any;
  events: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public contractNameDataService: ContractNameDataService,
    public contractDataService: ContractDataService,
    public contractUrlNotificationService: ContractUrlNotificationService,
    public datepipe: DatePipe
  ) {}

  DateFunction(toDay): Date {
    const year = toDay.getFullYear();
    const month = toDay.getMonth();
    const day = toDay.getDate();
    const updatedDate = new Date(year - 1, month, day);
    return updatedDate;
  }
  ngOnInit() {
    this.isNameEditable = false;
    this.contractName = '';
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.contractId = +this.activatedRoute.snapshot.params['id'];
    this.createContract = new FormGroup({
      contractNameEntered: new FormControl('', [Validators.required],
        [contractExists(this.contractDataService)]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
    if (this.operation === edit) {
      this.contractTypeName = ' (MG - Static)';
      this.showMenuChips = true;
      this.breadcrumbs = 'Edit ';
      this.contractType = ContractType.MGStatic;
    } else if (this.operation === create) {
      this.isDisabledTab = true;
      this.contractType = this.contractDataService.contractType;
      switch (this.contractType) {
        case 0:
          this.contractTypeName = ' (MG - Static)';
          this.showMenuChips = true;
          break;
        case 1:
          this.contractTypeName = ' (MG - Dynamic)';
          this.showMenuChips = false;
          break;
        case 2:
          this.contractTypeName = ' (Non - MG)';
          this.showMenuChips = false;
          this.startNonMGDate = this.DateFunction(new Date());
          break;
      }
      this.breadcrumbs = 'Create New ';
      this.showhotelinfo = true;
      this.showRate = false;
    }

    this.contractUrlNotificationService.urlPath.subscribe(path => {
      this.path = path;
      if (this.router.url.indexOf('hoteldetails') >= 0) {
        this.isNameEditable = false;
      } else {
        this.isNameEditable = true;
      }
      if (
        this.operation.trim().toLocaleLowerCase() === create && this.contractId === 0) {
        this.isDisabledTab = true;
      } else {
        this.isDisabledTab = false;
      }
      if (this.contractType === ContractType.MGStatic) {
        if (
          this.path === 'hoteldetails' || this.path === 'facilitiesservices'
        ) {
          this.showhotelinfo = true;
          this.showRate = false;
          this.changeChip(this.chipsList[0], this.chipsList);
        } else if (
          this.path === 'roomtype' ||
          this.path === 'roomtypelist' ||
          this.path === 'amenities' ||
          this.path === 'mealplan' ||
          this.path === 'ratecategory' ||
          this.path === 'childandextrabedpolicy' ||
          this.path === 'cancellationpolicies'
        ) {
          this.changeChip(this.chipsList[1], this.chipsList);
          // this.isNameEditable = true;
        } else if (this.path === 'allocation') {
          this.showhotelinfo = false;
          this.showRate = false;
          this.changeChip(this.chipsList[2], this.chipsList);
          // this.isNameEditable = true;
        } else if (this.path === 'contractterms') {
          this.showhotelinfo = false;
          this.showRate = false;
          this.changeChip(this.chipsList[3], this.chipsList);
         // this.isNameEditable = true;
        }
      }
      this.contractDetailsUpdate();
    });

    if (this.contractName !== '') {
      this.contractBasicDetails();
    }
  }

  contractDetailsUpdate() {
    if (this.contractType === ContractType.MGStatic) {
      this.showMenuChips = true;
      if (this.operation === edit) {
        if (this.contractDataService.contractBasicDetails !== undefined &&
          this.contractDataService.contractBasicDetails.trim() !== '') {
            this.contractBasicData = this.contractDataService.contractBasicDetails.split('~#');
            this.createContract.controls['contractNameEntered'].setValue(
              this.contractBasicData[0]);
              this.contractName = this.contractBasicData[0];
            this.createContract.get('startDate').setValue( new Date(this.contractBasicData[1]).toISOString());
            this.createContract.get('endDate').setValue( new Date(this.contractBasicData[2]).toISOString());

              // this.createContract.get('contractNameEntered').disable();
              // this.createContract.get('startDate').disable();
              // this.createContract.get('endDate').disable();
            } else {
              let contractDetails = '';
              this.contractNameDataService.contractName.subscribe( name =>
                contractDetails = name
              );
              this.contractBasicData = contractDetails.trim().split('~#');
              this.createContract.controls['contractNameEntered'].setValue( this.contractBasicData[0]);
              this.createContract.get('startDate').setValue( new Date(this.contractBasicData[1]).toISOString());
              this.createContract.get('endDate').setValue( new Date(this.contractBasicData[2]).toISOString());
            }
            if (this.isNameEditable) {
              this.createContract.get('contractNameEntered').disable();
              this.createContract.get('startDate').disable();
              this.createContract.get('endDate').disable();
            }
      }
        this.stepsCheck();
    } else {
      this.showMenuChips = false;
    }
  }

  checkContractName() {

    this.checkUniqueContractName();
    this.contractBasicDetails();
  }

  checkUniqueContractName() {
    if (this.contractName !== undefined && this.contractName !== null) {
      // // // console.log('this.templatesDataService.templateListDto - ' + JSON.stringify(this.templatesDataService.templateListDto));
      if (this.contractDataService.contractListDto === undefined) {
        this.uniqueNameError = false;
      } else {
        this.contractDataService.contractNameExist(this.contractName.trim()).subscribe ( data => {
          if (data.result === false) {
            this.uniqueNameError = false;
            this.contractNameDataService.changeContractName(this.contractName.trim());
          } else {
            this.uniqueNameError = true;
            this.contractNameDataService.changeContractName('');
          }
        } );
       }
    }
  }

  dateChangeEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events = [];
    this.events.push(`${event.value}`);
    this.contractBasicDetails();
  }

  contractBasicDetails() {
    let sDate = '';
    let eDate = '';
    let newSDate: Date;
    let newEDate: Date;
    if (this.createContract.controls['startDate'].value !== null) {
      newSDate = new Date(this.createContract.controls['startDate'].value);
    }
    if (this.createContract.controls['endDate'].value !== null) {
      newEDate = new Date(this.createContract.controls['endDate'].value);
    }
    if (newSDate > newEDate) {
      this.createContract.controls['endDate'].setValue('');
    } else {
      sDate =
        this.datepipe.transform(
          this.createContract.controls['startDate'].value,
          'dd-MM-yy') === null ? '' : this.datepipe.transform( this.createContract.controls['startDate'].value, 'dd-MM-yy');

      eDate =
        this.datepipe.transform(
          this.createContract.controls['endDate'].value,
          'dd-MM-yy' ) === null ? '' : this.datepipe.transform(
              this.createContract.controls['endDate'].value, 'dd-MM-yy');
    }
    let contractNamePass = '';
    if (this.uniqueNameError === true) {
      contractNamePass = '';
    } else {
      contractNamePass = this.createContract.controls['contractNameEntered'].value.trim();
    }

    const contractBasicInfo =
     contractNamePass +
      '~#' +
      new Date(this.createContract.get('startDate').value) +
      '~#' +
      new Date(this.createContract.get('endDate').value);
    this.contractNameDataService.changeContractName(contractBasicInfo);
    this.contractDataService.contractBasicDetails = contractBasicInfo;
    this.contractName = this.createContract.controls['contractNameEntered'].value;
    // this.checkUniqueContractName();
  }

  stepsCheck() {
   if (this.operation !== edit) {
    this.contractDataService
          .getTemplateSteps(this.contractDataService.templateId)
          .subscribe(templatesSteps => {
            if (templatesSteps !== null) {
              const step = templatesSteps;
              if (templatesSteps.facilityCount > 0) {
                this.contractDataService.showFacility = true;
              } else {
                this.contractDataService.showFacility = false;
              }
              if (templatesSteps.amenityCount > 0) {
                this.contractDataService.showamenity = true;
              } else {
                this.contractDataService.showamenity = false;
              }
            }
          });
        } else {
          this.contractDataService
          .getContractSteps(this.contractId)
          .subscribe(templatesSteps => {
            if (templatesSteps !== null) {
              const step = templatesSteps;
              if (templatesSteps.facilityCount > 0) {
                this.contractDataService.showFacility = true;
              } else {
                this.contractDataService.showFacility = false;
              }
              if (templatesSteps.amenityCount > 0) {
                this.contractDataService.showamenity = true;
              } else {
                this.contractDataService.showamenity = false;
              }
            }
          });
        }
  }

  changeChip(chip, chipsList) {
    if (chip.selected) {
      chip.chipcolor = 'primary';
    } else {
      for (const cc of chipsList) {
        if (cc.chipId !== chip.chipId) {
          cc.selected = false;
          cc.chipcolor = 'accent';
        }
      }
      chip.selected = !chip.selected;
      chip.chipcolor = 'primary';
      if (chip.chipId === 1) {
        this.showhotelinfo = true;
        this.showRate = false;
      } else if (chip.chipId === 2) {
        this.showhotelinfo = false;
        this.showRate = true;
      } else {
        this.showhotelinfo = false;
        this.showRate = false;
      }
    }
    this.stepsCheck();
  }
}
