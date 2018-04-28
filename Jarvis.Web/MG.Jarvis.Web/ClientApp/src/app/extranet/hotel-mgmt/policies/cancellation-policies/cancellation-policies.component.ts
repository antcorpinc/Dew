/* tslint:disable */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CONSTANTS } from '../../../../common/constants';
import { PoliciesDataService } from './../../../common/extranet-shared/services/policies-data.service';

import { ObjectState } from '../../../../common/enums';
import { CancellationClausetypemasterviewmodel } from '../../../viewmodel/policiesviewmodel/cancellationclausetypemasterviewmodel';
import { CancellationClausechargesmasterviewmodel } from '../../../viewmodel/policiesviewmodel/cancellationclausechargesmasterviewmodel';
import { CancellationPolicyViewModel } from '../../../viewmodel/policiesviewmodel/cancellationpolicyviewmodel';
import { MatSnackBar } from '@angular/material';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';
import { validateConfig } from '@angular/router/src/config';
import { VALID } from '@angular/forms/src/model';
import { forEach } from '@angular/router/src/utils/collection';

/* const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create; */

@Component({
  selector: 'app-cancellation-policies',
  templateUrl: './cancellation-policies.component.html',
  styleUrls: ['./cancellation-policies.component.css']
})
export class CancellationPoliciesComponent implements OnInit {
  cancellationPolicyForm: FormGroup;
  cancellationClauseType: CancellationClausetypemasterviewmodel;
  cancellationClauseCharges: CancellationClausechargesmasterviewmodel;
  cancellationPolicyViewModel: CancellationPolicyViewModel;
  cancellationPolicyViewModelSave: CancellationPolicyViewModel;
  hotelId: number;
  cancellationPolicyId: number;
  cancellationPolicyName: string;
  clauseTypeId: number;
  noShowToggle: boolean;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  operation: string;
  cancellationPolicyOperation: string;
  cancellationPolicyList: CancellationPolicyViewModel[];
  noShowCancellationChargesIdEdit: any;
  cancellationPolicyNameOrg: string;
  dialogResult: any;
  dialogActions: string;
  flexibleClauses: any;  
  policyHeaderName: string;
  oldDaysvalue:string;
  cancellationClauseChargeIdOrg: any;
  checkNameFlag:boolean;
  clauseCount: number;
  daysFlag = false;
  percentageFlag = false;
  reviewPolicy = false;
  constructor(private router: Router,
    private policiesDataService: PoliciesDataService,
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar,
    private dialogsService: DialogsService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.cancellationPolicyOperation = this.activatedRoute.snapshot.params['operation'];
    this.cancellationPolicyId = this.activatedRoute.snapshot.params['id'];
    this.cancellationPolicyForm = new FormGroup({
      isActive: new FormControl(true),
      cancellationPolicyId: new FormControl(),
      cancellationPolicyTypeId: new FormControl(),
      isNoShowCharges: new FormControl(false),
      noShowCancellationChargesId: new FormControl(),
      name: new FormControl('', Validators.required),
      hotelId: new FormControl(),
      isDeleted: new FormControl(false),
      cancellationPolicyClausesViewModelList: this.cancellationPolicyClauseOptions(), // new FormArray([this.buildCancellationPolicyClauses()]),
      objectState: new FormControl(ObjectState.Unchanged)
    });
    this.getCancellationPolicyType();
    this.getCancellationCharges();
    if (this.cancellationPolicyOperation === this.create) {
      this.policyHeaderName = "Create New Cancellation Policy";
      this.cancellationPolicyForm.get('cancellationPolicyTypeId').setValue(1);
      this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(ObjectState.Added);
      if (this.cancellationPolicyForm.get('cancellationPolicyTypeId').value === 1 || this.cancellationPolicyForm.get('cancellationPolicyTypeId').value === 3 ) {
        this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].objectState.setValue(ObjectState.Unchanged);
        this.policyClausesList.controls.forEach((clauseControl, index) => {       
          clauseControl.get('daysBeforeArrival').disable();
          clauseControl.get('percentageCharge').disable(); 
          clauseControl.get('objectState').setValue(ObjectState.Unchanged);
          
          clauseControl.get('daysBeforeArrival').setValue(null);
          clauseControl.get('percentageCharge').setValue(null); 
        });      
      }   
      else{
        this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].objectState.setValue(ObjectState.Added);
      }
    }

    if (this.cancellationPolicyOperation === this.edit || this.cancellationPolicyOperation === this.read) {
      this.getCancellationPolicyDetails(this.cancellationPolicyId);
      this.cancellationPolicyNameOrg = this.cancellationPolicyForm.get('name').value;
      // this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].objectState.value = ObjectState.Unchanged;
      // console.log('test: ' + this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].objectState.value);
      /* this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList.forEach(clauseCotrol => {
        clauseCotrol.get('objectState').setValue(ObjectState.Unchanged);
      }) */

      // this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(ObjectState.Unchanged);

     /*  if(this.policyClausesList.length > 0){
        this.policyClausesList.controls.forEach((clauseControl, index) => {       
          clauseControl.get('objectState').setValue(ObjectState.Unchanged);          
        });
      }  */     

      if (this.cancellationPolicyForm.get('cancellationPolicyTypeId').value === 1 || this.cancellationPolicyForm.get('cancellationPolicyTypeId').value === 3 ) {
        this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].objectState.setValue(ObjectState.Unchanged);
        this.policyClausesList.controls.forEach((clauseControl, index) => {       
          clauseControl.get('daysBeforeArrival').disable();
          clauseControl.get('percentageCharge').disable(); 
          clauseControl.get('objectState').setValue(ObjectState.Unchanged);
          
          clauseControl.get('daysBeforeArrival').setValue(null);
          clauseControl.get('percentageCharge').setValue(null); 
        });
        /* this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(0);
        this.policyClausesList.controls.forEach((clauseControl => {
          clauseControl.get('daysBeforeArrival').disable();
          clauseControl.get('percentageCharge').disable();          

          clauseControl.get('daysBeforeArrival').setValue(null);
          clauseControl.get('percentageCharge').setValue(null);        
        })); */
       // this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList = null;
      }
    }
  }
  cancellationPolicyClauseOptions(): FormGroup{
    let policyClauseOptionsFormGroup: FormGroup;
    policyClauseOptionsFormGroup = new FormGroup({
      cancellationClauseChargeId: new FormControl(1),      
      policyClausesList: new FormArray([this.buildPolicyClausesList()]),
      objectState: new FormControl(),
    })
    return policyClauseOptionsFormGroup;
  }
  buildPolicyClausesList():FormGroup {
    let clausesFormGroup: FormGroup;
    clausesFormGroup = new FormGroup({
      cancellationPolicyClausesId: new FormControl(0),
      daysBeforeArrival: new FormControl('', Validators.required),
      percentageCharge: new FormControl('', Validators.required),     
      objectState: new FormControl(ObjectState.Added)
    });
    return clausesFormGroup;
  }

  get policyClausesList(): FormArray{
    return <FormArray> this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList.get('policyClausesList');
  }

  getCancellationPolicyType() {
    this.policiesDataService.getCancellationPolicyTypedto().subscribe(cancellationClauseTypeDto => {
        this.cancellationClauseType = cancellationClauseTypeDto;
    });
  }

  getCancellationCharges() {
    this.policiesDataService.getCancellationChargesdto().subscribe(cancellationClauseChargesDto => {
      this.cancellationClauseCharges = cancellationClauseChargesDto;
    });
  }
  
  addCancellationPolicyClause() {
     this.policyClausesList.push(this.buildPolicyClausesList());      
     this.cd.detectChanges();
  }

   deleteCancellationPreference(index: number) {
    this.daysFlag=false;
    this.percentageFlag=false;
   const cancellationPolicyClauseIdDelete =  this.policyClausesList.value[index].cancellationPolicyClausesId;
    this.dialogsService
      .confirm('Confirm', 'Are you sure you want to delete this clause?').subscribe(res => {
        this.dialogResult = res;
        if (this.dialogResult) {
         if (cancellationPolicyClauseIdDelete > 0 && cancellationPolicyClauseIdDelete != null) {
            this.policiesDataService.deletePolicyClause(cancellationPolicyClauseIdDelete)
              .subscribe(policyClauseDeletedDto => {
               // console.log('this.policyClausesList.length;: ' + this.policyClausesList.length);
            });
         }
          this.policyClausesList.removeAt(index);
        } else {
          this.dialogActions = null;
        }
      }); 
    } 

  changeClauseType(event) {
    this.clauseTypeId = event.value;
    if (this.clauseTypeId === 2) {
      this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(1);  
      this.policyClausesList.controls.forEach((clauseControl, index) => {       
        clauseControl.get('daysBeforeArrival').enable();
        clauseControl.get('percentageCharge').enable();  
        clauseControl.get('objectState').setValue(ObjectState.Added);    
      });     
    }
    else {
      this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(0);
      
      this.policyClausesList.controls.forEach((clauseControl, index) => {      
        clauseControl.get('daysBeforeArrival').disable();
        clauseControl.get('percentageCharge').disable();
        clauseControl.get('objectState').setValue(ObjectState.Unchanged);

        clauseControl.get('daysBeforeArrival').setValue(null);
        clauseControl.get('percentageCharge').setValue(null);       
      });
    }

    if(this.clauseTypeId === 2 && this.cancellationPolicyOperation === this.edit){
      if(this.cancellationClauseChargeIdOrg === undefined){
        this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(1);
      }
      else{
        this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(this.cancellationClauseChargeIdOrg);
      }
      if(this.flexibleClauses.policyClausesList.length > 0){
        this.policyClausesList.controls.forEach((clauseControl, index) => {           
          clauseControl.get('cancellationPolicyClausesId').setValue(this.flexibleClauses.policyClausesList[index].cancellationPolicyClausesId);
          clauseControl.get('daysBeforeArrival').setValue(this.flexibleClauses.policyClausesList[index].daysBeforeArrival );
          clauseControl.get('percentageCharge').setValue(this.flexibleClauses.policyClausesList[index].percentageCharge);           
          clauseControl.get('objectState').setValue(this.flexibleClauses.policyClausesList[index].objectState);
        });
      }
      
    }
  }
  checkPolicyName() {
    this.cancellationPolicyName =  this.cancellationPolicyForm.get('name').value;
    this.policiesDataService.getCancellationPolicyListdto(this.hotelId).subscribe(policylistdto => {
      if (policylistdto !== null) {         
        this.cancellationPolicyList = policylistdto; 
        for (let i = 0; i < this.cancellationPolicyList.length; i++) {
          if (this.cancellationPolicyList[i].name.toLowerCase() === this.cancellationPolicyName.trim().toLowerCase()) {          
             if (this.cancellationPolicyOperation === this.edit) {
               this.cancellationPolicyForm.get('name').setValue(this.cancellationPolicyNameOrg);                     
             }
             else{               
               this.checkNameFlag = true;
               return;
             }            
           }
           else{
             this.checkNameFlag = false;
           }          
        }      
      } 
      else{
        this.checkNameFlag = false;
      }    
    });
  }
 
/*   checkPolicyName() {
    this.cancellationPolicyName =  this.cancellationPolicyForm.get('name').value;
    this.cancellationPolicyList = this.policiesDataService.cancellationPolicyViewModelDtoList;
    if (this.cancellationPolicyList !== null) {
      for (let i = 0; i < this.cancellationPolicyList.length; i++) {
         if (this.cancellationPolicyList[i].name.toLowerCase() === this.cancellationPolicyName.trim().toLowerCase()) {          
            if (this.cancellationPolicyOperation === this.edit) {
              this.cancellationPolicyForm.get('name').setValue(this.cancellationPolicyNameOrg); 
              //this.checkNameFlag = true;            
            }
            else{
              //this.snackBar.open('Policy already exists with this name.', 'Close', {duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar'});
              // this.cancellationPolicyForm.get('name').setValue('');
              this.checkNameFlag = true;
              return;
            }            
          }
          else{
            this.checkNameFlag = false;
          }
          
      }
  }
} */

  changeNoShowToggle(event) {
    this.noShowToggle = event.value;
    if (this.cancellationPolicyForm.get('isNoShowCharges').value === true) {
      this.cancellationPolicyForm.get('noShowCancellationChargesId').setValue(1);
    }
  }
  checkDaysRange() {   
    this.policyClausesList.controls.forEach((clauseControl, index) => {      
      const clauseDays =  clauseControl.get('daysBeforeArrival').value;
      if (clauseDays < 1 || clauseDays > 365) {
       // this.snackBar.open('Please enter days between 1 and 366!', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar'});
       clauseControl.get('daysBeforeArrival').setValue('');
       }     
    });
  }
  daysListIndex(data){   
    this.clauseCount = this.policyClausesList.length;
    if(this.clauseCount > 1){     
      for(let i=0; i<this.clauseCount;i++){
        if(this.policyClausesList['value'][i].daysBeforeArrival ===parseInt(data)){          
          localStorage.setItem('policyClausesListIndexDays', `${i+1}`);
        }
      }
    }
  }
  checkUniqueDays(data){   
    localStorage.removeItem('policyClausesListIndexDays');
    this.clauseCount = this.policyClausesList.length;
    const policyClausesListIndex = localStorage.getItem('policyClausesListIndexDays');
    let policyClausesListIndexValue=null;
    if(policyClausesListIndex == null){   
      policyClausesListIndexValue = policyClausesListIndex;
     }
    else{
      policyClausesListIndexValue = parseInt(policyClausesListIndex);
    }    
    
    if(policyClausesListIndexValue === null && data !=null && this.clauseCount > 1){     
      for(let i = this.clauseCount-1;i > 0  ; i--){      
        if(this.policyClausesList['value'][i].daysBeforeArrival >= this.policyClausesList['value'][i-1].daysBeforeArrival) {
           this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].policyClausesList['controls'][i].get('daysBeforeArrival').setValue('');
           //this.snackBar.open('Cant have same or greater days for multiple rules', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar' });       
           this.daysFlag=true;
           //this.cancellationPolicyForm.valid;
           //console.log('this.cancellationPolicyForm.invalid: ' + this.cancellationPolicyForm.valid)
           return;
        }
        else{
          //!this.cancellationPolicyForm.valid;
          //console.log('!this.cancellationPolicyForm.invalid: ' + !this.cancellationPolicyForm.valid)
          this.daysFlag=false;
        }
      }
    }
    if(policyClausesListIndexValue !== null && data !=null && this.clauseCount > 1){
      for(let i = policyClausesListIndexValue; i > 0  ; i--){       
        if(this.policyClausesList['value'][i].daysBeforeArrival >= this.policyClausesList['value'][i-1].daysBeforeArrival) {
           this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].policyClausesList['controls'][i].get('daysBeforeArrival').setValue(''); 
           //this.snackBar.open('Cant have same or greater days for multiple rules!', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar' });
           this.daysFlag=true;
           //this.cancellationPolicyForm.valid;
          //localStorage.removeItem('policyClausesListIndexDays');     
          return;     
        }
        else{
          //!this.cancellationPolicyForm.valid;
          this.daysFlag=false;
        }
      }
    } 
  }
    checkPercentageRange() {  
     this.policyClausesList.controls.forEach((clauseControl, index) => {      
      const clausePercentage =  clauseControl.get('percentageCharge').value;
      if (clausePercentage < 1 || clausePercentage > 100) {
       // this.snackBar.open('Please enter percentage between 1 and 100!', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar'});
       clauseControl.get('percentageCharge').setValue('');
       }    
    });    
  }
  percentageListIndex(data){
    this.clauseCount = this.policyClausesList.length;
    if(this.clauseCount > 1){     
      for(let i=0; i<this.clauseCount;i++){
        if(this.policyClausesList['value'][i].percentageCharge ===parseInt(data)){       
          localStorage.setItem('policyClausesListIndexPercentage', `${i+1}`);
        }
      }
    }
  }
  checkUniquePercentage(data){
    localStorage.removeItem('policyClausesListIndexPercentage');
    this.clauseCount = this.policyClausesList.length;
    const policyClausesListIndex = localStorage.getItem('policyClausesListIndexPercentage');
    let policyClausesListIndexValue=null;
    if(policyClausesListIndex == null){   
      policyClausesListIndexValue = policyClausesListIndex;
     }
    else{
      policyClausesListIndexValue = parseInt(policyClausesListIndex);
    }    
    
    if(policyClausesListIndexValue === null && data !=null && this.clauseCount > 1){     
      for(let i = this.clauseCount-1;i > 0  ; i--){     
        if(this.policyClausesList['value'][i].percentageCharge <= this.policyClausesList['value'][i-1].percentageCharge) {
           this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].policyClausesList['controls'][i].get('percentageCharge').setValue('');
            // this.snackBar.open('Cant have same or lesser % value for less days!', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar' });         
            //!this.cancellationPolicyForm.valid;
            this.percentageFlag=true;
            return;
        }
        else{
          //this.cancellationPolicyForm.valid;
          this.percentageFlag=false;
        }
      }
    }
    if(policyClausesListIndexValue !== null && data !=null && this.clauseCount > 1){
      for(let i = policyClausesListIndexValue; i > 0  ; i--){
        if(this.policyClausesList['value'][i].percentageCharge <= this.policyClausesList['value'][i-1].percentageCharge) {
          this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].policyClausesList['controls'][i].get('percentageCharge').setValue(''); 
          //this.snackBar.open('Cant have same or lesser % value for less days!', 'Close', { duration: 5000, verticalPosition: 'top', panelClass: 'showSnackBar' });
          //!this.cancellationPolicyForm.valid;
          this.percentageFlag=true;         
          localStorage.removeItem('policyClausesListIndexPercentage'); 
          return;         
        }
        else{
          //this.cancellationPolicyForm.valid;
          this.percentageFlag=false;
        }
      }
    } 
  }

  saveCancellationPolicy() {    
    if (this.cancellationPolicyForm.valid) {  
      this.reviewPolicy = true;      
      this.cancellationPolicyViewModelSave = Object.assign({}, this.cancellationPolicyViewModel, this.cancellationPolicyForm.value);
      this.cancellationPolicyViewModelSave.hotelId = this.hotelId;   
      if (this.cancellationPolicyForm.get('isNoShowCharges').value === false) {
        this.cancellationPolicyViewModelSave.noShowCancellationChargesId = null ;
      }
      if (this.cancellationPolicyOperation === this.create) {
        this.cancellationPolicyViewModelSave.objectState = ObjectState.Added;
        this.cancellationPolicyViewModelSave.cancellationPolicyClausesViewModelList.objectState = ObjectState.Unchanged;
        this.cancellationPolicyViewModelSave.cancellationPolicyId = 0;               
      }
      if (this.cancellationPolicyOperation === this.edit) {
        this.cancellationPolicyViewModelSave.cancellationPolicyId = this.cancellationPolicyId;
        this.cancellationPolicyViewModelSave.objectState = ObjectState.Modified;
       this.cancellationPolicyViewModelSave.cancellationPolicyClausesViewModelList.objectState = ObjectState.Modified;
        this.policyClausesList.controls.forEach((clauseControl, index) => {
           if (clauseControl.get('objectState').value === null) {
            clauseControl.get('objectState').setValue(ObjectState.Unchanged);
            //clauseControl.objectState = ObjectState.Unchanged;
          }
        });
      }
    
     this.policiesDataService.saveAndUpdateCancellationPolicydto(this.cancellationPolicyViewModelSave)
     .subscribe(data => {
        data = 'success';
       /* in case of success */
       if (data === 'success') {
         if (this.cancellationPolicyOperation === this.create) {
            this.snackBar.open('Cancellation policy saved successfully', '', { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
         }
         else if (this.cancellationPolicyOperation === this.edit) {
            this.snackBar.open('Cancellation policy updated successfully', '', {duration : CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
         }
       }
       else{
          if (this.cancellationPolicyOperation === this.create) {
            this.snackBar.open('Cancellation policy creation failed', '', { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
        }
        else {
            this.snackBar.open('Cancellation policy updation failed', '', {duration : CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          }
        }
        this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation,
            'policieslist']);
     });
    }
  }
  /* Edit Cancellation Policy section */
  private getCancellationPolicyDetails(cancellationPolicyId) {    
    if(this.cancellationPolicyOperation === this.edit){
      this.policyHeaderName = "Edit Cancellation Policy"
    }
    if(this.cancellationPolicyOperation === this.read){
      this.policyHeaderName = "Read Cancellation Policy"
    }
    const cancellationPolicyIdParse = parseInt(cancellationPolicyId, 10);
    this.cancellationPolicyList = this.policiesDataService.cancellationPolicyViewModelDtoList; // to get list of Policies
    for (let i = 0; i < this.cancellationPolicyList.length; i++) {
      if (this.cancellationPolicyList[i].cancellationPolicyId === cancellationPolicyIdParse) {
        this.flexibleClauses = this.cancellationPolicyList[i].cancellationPolicyClausesViewModelList;
        for (let k = 0; k < this.flexibleClauses.policyClausesList.length - 1; k++) {
          this.addCancellationPolicyClause();
        }
        this.cancellationPolicyForm.get('isActive').setValue(this.cancellationPolicyList[i].isActive);
        this.cancellationPolicyForm.get('name').setValue(this.cancellationPolicyList[i].name);
        if (this.cancellationPolicyList[i].cancellationPolicyTypeId === 1) {
          this.cancellationPolicyForm.get('cancellationPolicyTypeId').setValue(1);
        }
        else if (this.cancellationPolicyList[i].cancellationPolicyTypeId === 2) {
          this.clauseTypeId = 2;
          this.cancellationClauseChargeIdOrg = this.cancellationPolicyList[i].cancellationPolicyClausesViewModelList.cancellationClauseChargeId;
          this.cancellationPolicyForm.get('cancellationPolicyTypeId').setValue(2);         
          // this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(this.cancellationPolicyList[i].cancellationPolicyClausesViewModelList.cancellationClauseChargeId);
          this.cancellationPolicyForm.controls.cancellationPolicyClausesViewModelList['controls'].cancellationClauseChargeId.setValue(this.cancellationClauseChargeIdOrg);
          this.policyClausesList.controls.forEach((control, index) => {           
              control.get('cancellationPolicyClausesId').setValue(this.flexibleClauses.policyClausesList[index].cancellationPolicyClausesId);
              control.get('daysBeforeArrival').setValue(this.flexibleClauses.policyClausesList[index].daysBeforeArrival );
              control.get('percentageCharge').setValue(this.flexibleClauses.policyClausesList[index].percentageCharge);           
              control.get('objectState').setValue(this.flexibleClauses.policyClausesList[index].objectState);
          });        
        }
        else{
          this.cancellationPolicyForm.get('cancellationPolicyTypeId').setValue(3);
        }
        if (this.cancellationPolicyList[i].isNoShowCharges === true) {
          this.noShowToggle = true;
          this.cancellationPolicyForm.get('isNoShowCharges').setValue(true);
          this.noShowCancellationChargesIdEdit = this.cancellationPolicyList[i].noShowCancellationChargesId;
          this.cancellationPolicyForm.get('noShowCancellationChargesId').setValue(this.noShowCancellationChargesIdEdit);
        }
        else{
          this.cancellationPolicyForm.get('isNoShowCharges').setValue(false);
        }
      }
    }
    if(this.cancellationPolicyOperation === this.read){
      this.reviewPolicy = true;   
      this.cancellationPolicyForm.disable();   
     /*  !this.cancellationPolicyForm.valid; 
      console.log('!this.cancellationPolicyForm.valid:' +!this.cancellationPolicyForm.valid); */
     
    }
  }

  flagCancellationPolicyAsEdited() {
    if (this.cancellationPolicyOperation === this.edit) {
      this.cancellationPolicyForm.get('objectState').setValue(ObjectState.Modified);
    }
  }

  flagCancellationPolicyClauseAsEdited(index: number) {
    if (this.cancellationPolicyOperation === this.edit) {
      if(this.policyClausesList.controls[index].get('objectState').value !==  ObjectState.Added){
        this.policyClausesList.controls[index].get('objectState').setValue(ObjectState.Modified);
      }
      /* if (this.cancellationPolicyClausesViewModelList.controls[index].get('objectState').value !== ObjectState.Added) {
        this.cancellationPolicyClausesViewModelList.controls[index].get('objectState').setValue(ObjectState.Modified);
      } */
    }
  }
  cancelPolicy() {
    if(this.cancellationPolicyForm.dirty){
      this.dialogsService.confirm('Confirm', 'If you cancel, the current data will be lost.').subscribe(res => {
        this.dialogResult = res;
        if (this.dialogResult) {
          this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation, 'policieslist']);
        } else {
          this.dialogActions = null;
        }
      });
   }
    else{
      this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation, 'policieslist']);
    }
    
  } 
}
