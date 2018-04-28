import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { TemplateUrlNotificationService } from '../../../common/extranet-shared/services/templates/template-url-notification.service';
import { ContractTermsViewModel } from '../../../viewmodel/templates/contract-terms/contracttermsviemodel';
import { ObjectState } from '../../../../common/enums';

import { MatSnackBar } from '@angular/material';
import { SaveContractTermsViewModel } from '../../../viewmodel/templates/contract-terms/saveContractTermsViewModel';
import { TemplateHotelInfoViewModel } from '../../../viewmodel/templates/hotel-info/hotelinfoviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { ContractTermsDataService } from '../../../common/extranet-shared/services/contracts/contract-terms-data.service';

@Component({
  selector: 'app-contract-terms',
  templateUrl: './contract-terms.component.html',
  styleUrls: ['./contract-terms.component.css']
})
export class ContractTermsComponent implements OnInit {

  constructor(private contractTermsDataService: ContractTermsDataService) { }

  ngOnInit() {
    const terms = this.contractTermsDataService.getContractTerms(1);
    console.log(JSON.stringify(terms));
  }

}
