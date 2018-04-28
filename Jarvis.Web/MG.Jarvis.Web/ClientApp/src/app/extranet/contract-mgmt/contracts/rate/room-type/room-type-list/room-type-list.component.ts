import { Component, OnInit } from '@angular/core';
import { ContractUrlNotificationService } from '../../../../../common/extranet-shared/services/contracts/contract-url-notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {
  constructor(public contractUrlNotificationService: ContractUrlNotificationService, private activatedRoute: ActivatedRoute) {
     contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
  }

  ngOnInit() {
    this.contractUrlNotificationService.changeURLRoute(this.activatedRoute.snapshot.url[0].path);
  }

}
