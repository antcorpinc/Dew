import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { CopyTemplateViewModel } from './../../../../viewmodel/templates/copy-template/copytemplateviewmodel';
import { TemplatesDataService } from './../../services/templates/templates-data.service';
import { Templateslistviewmodel } from '../../../../viewmodel/templates/templates-details/templateslistviewmodel';
// ******************************
/*
export class TemplateNameValidator {
  constructor(private templatesDataService: TemplatesDataService) {}
 ValidateTemplateName(control: AbstractControl): { [key: string]: boolean } | null {
  const templateName = control.get('newTemplateName');
let tempName = '';
  if (((templateName.value !== undefined) && (templateName.value !== null))) {
    tempName = templateName.value;

    this.templatesDataService.templateNameExist(tempName.trim()).subscribe ( data => {
      // this.nameExist = data.result;
      // console.log('arrResult - ' + this.nameExist);
      if (data.result === false) {
        return null;
       // this.uniqueNameError = false;
      } else {
      //  this.uniqueNameError = true;
      return { 'uniqueNameError': true };
      }
    } );

  return null;
}
}
}*/
// ******************************
@Component({
  selector: 'app-copy-template',
  templateUrl: './copy-template.component.html',
  styleUrls: ['./copy-template.component.css']
 // providers: [TemplateNameValidator]
})

export class CopyTemplateComponent implements OnInit {

  templateId: number;
  templateName: string;
  copyTemplateForm: FormGroup;
  copyTemplate: CopyTemplateViewModel = <CopyTemplateViewModel>{};
  templateList: Templateslistviewmodel[];
  uniqueNameError: boolean;
  nameExist: boolean;
  constructor(
    public dialogRef: MatDialogRef<CopyTemplateComponent>,
    private templatesDataService: TemplatesDataService) { }

  ngOnInit() {
    this.copyTemplateForm = new FormGroup({
      newTemplateName: new FormControl(this.templateName + '_Copy', Validators.required)
    }); //    new TemplateNameValidator(this.templatesDataService).ValidateTemplateName
    // TemplateNameValidator.ValidateTemplateName);
    const randomNumber = Math.floor(Math.random() * 2000);
    this.checkUniqueTemplateName();
    if (this.uniqueNameError) {
      this.uniqueNameError = false;
      this.copyTemplateForm.controls['newTemplateName'].setValue(this.templateName + '_Copy' + randomNumber);
    }
  }

  createTemplateCopy() {
    if (!this.uniqueNameError) {
      this.copyTemplate.templateId = this.templateId;
      this.copyTemplate.templateName = this.copyTemplateForm.get('newTemplateName').value;
      this.dialogRef.close(this.copyTemplate);
    }
  }

  checkUniqueTemplateName() {
    // for (let i = 0; i < this.templateList.length; i++) {
    //   if (this.templateList[i].name.toLowerCase() === this.copyTemplateForm.get('newTemplateName').value.toLowerCase()) {
    //     this.uniqueNameError = true;
    //     break;
    //   } else {
    //     this.uniqueNameError = false;
    //   }
    // }

     this.templatesDataService.templateNameExist(this.copyTemplateForm.get('newTemplateName').value.trim()).subscribe ( data => {
      // this.nameExist = data.result;
      console.log('arrResult - ' + this.nameExist);
      if (data.result === false) {
        this.uniqueNameError = false;
      } else {
        this.uniqueNameError = true;
      }
    } );

  }
}
