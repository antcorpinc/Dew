import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { TemplatesDataService } from '../../../common/extranet-shared/services/templates/templates-data.service';
import { TemplateViewModel } from '../../../viewmodel/templates/hotel-info/hotelinfoviewmodel';

const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create;
const templateViewModel = new TemplateViewModel();

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

export class RedirectComponent implements OnInit {
  tempid: any;
  isRead: boolean;
  operation: string;
  hotelId: string;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private templatesDataService: TemplatesDataService
  ) { }

  ngOnInit() {
    this.tempid = this.activatedRoute.snapshot.params['tempid'];
    templateViewModel.id = +this.tempid;
    // // console.log('Redirect component templateViewModel - ' + JSON.stringify(templateViewModel));

    // this.templatesDataService.getTemplateHotelFields(templateViewModel);
    this.router.navigate(['/templatemgmt/template', this.tempid, edit, 'facilitiesservices']);
  }

}
