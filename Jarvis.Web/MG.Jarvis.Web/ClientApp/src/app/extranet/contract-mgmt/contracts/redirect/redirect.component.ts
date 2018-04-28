import { Component, OnInit } from '@angular/core';
import { ContractDataService } from '../../../common/extranet-shared/services/contracts/contract-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';

const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create;
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(public contractDataService: ContractDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const contractId = +this.activatedRoute.snapshot.params['contractid'];
    console.log('Redirect contractId-' + contractId);
    if (this.contractDataService.showFacility) {
      this.router.navigate(['/contractmgmt/contract', contractId, edit, 'facilitiesservices']);
    } else {
      this.router.navigate(['/contractmgmt/contract', contractId, edit, 'roomtypelist']);
    }
  }

}
