import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../../../../common/constants';
import { ActivatedRoute } from '@angular/router';
import { TemplatesDataService } from '../../../common/extranet-shared/services/templates/templates-data.service';
import { TemplateViewModel } from '../../../viewmodel/templates/hotel-info/hotelinfoviewmodel';
import { TemplateNameDataService } from '../../../common/extranet-shared/services/templates/template-name-data.service';

const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  isCreate: boolean;
  templateId: string;
  templateName: string;
  operation: string;
  // templateViewModel: TemplateViewModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private templateDataService: TemplatesDataService,
    public templateNameDataService: TemplateNameDataService
  ) {}

  ngOnInit() {
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.templateId = this.activatedRoute.snapshot.params['id'];
    this.getTemplateDetails();
  }

  private getTemplateDetails() {
      // // console.log('I M at getTemplateDetails from Template component' + JSON.stringify(this.templateDataService.templateHotelFieldsDetails));
      console.log('this.operation -' + this.operation );

      if (this.operation === edit && this.templateDataService.templateHotelFieldsDetails !== undefined) {
        this.templateName = this.templateDataService.templateHotelFieldsDetails.name;
        this.templateNameDataService.changeTemplateName(this.templateName);
      }

  }
}
