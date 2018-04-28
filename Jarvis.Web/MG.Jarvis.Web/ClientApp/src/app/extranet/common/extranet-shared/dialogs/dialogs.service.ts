import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditPhotoDialogComponent } from './edit-photo-dialog/edit-photo-dialog.component';
import { MarketDialogComponent } from './market-dialog/market-dialog.component';
import { ContractTemplateTypeComponent } from './contract-template-type/contract-template-type.component';
import { CopyTemplateViewModel } from './../../../viewmodel/templates/copy-template/copytemplateviewmodel';
import { CopyTemplateComponent } from './copy-template/copy-template.component';
import { RoomTypeViewModel } from '../../../viewmodel/amenitiesviewmodel/roomtypeviewmodel';
import { BulkUpdateDialogComponent } from '../../../hotel-mgmt/allocations/bulk-update-dialog/bulk-update-dialog.component';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string, showCancel?: boolean): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        if (showCancel === undefined) {
            dialogRef.componentInstance.showCancel = true;
        } else {
            dialogRef.componentInstance.showCancel = showCancel;
        }
        return dialogRef.afterClosed();
    }

    public openPhotoModal(roomId: number, photoId: number, modalView: string, roomList: RoomTypeViewModel[]): Observable<boolean> {

        let dialogRef: MatDialogRef<EditPhotoDialogComponent>;
        dialogRef = this.dialog.open(EditPhotoDialogComponent);
        dialogRef.componentInstance.roomId = roomId;
        dialogRef.componentInstance.photoId = photoId;
        dialogRef.componentInstance.modalView = modalView;
        dialogRef.componentInstance.roomList = roomList;
        return dialogRef.afterClosed();
    }

    public market(title: string, country: any, continent: any): Observable<boolean> {

        let dialogRef: MatDialogRef<MarketDialogComponent>;

        dialogRef = this.dialog.open(MarketDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.countries = country;
        dialogRef.componentInstance.continents = continent;

        return dialogRef.afterClosed();
    }

    public openContractTemplateModal(): Observable<boolean> {
        let dialogRef: MatDialogRef<ContractTemplateTypeComponent>;
        dialogRef = this.dialog.open(ContractTemplateTypeComponent);
        return dialogRef.afterClosed();
    }

    public openCopyModal(templateId, templateName, templatesList): Observable<CopyTemplateViewModel> {

        let dialogRef: MatDialogRef<CopyTemplateComponent>;
        dialogRef = this.dialog.open(CopyTemplateComponent);
        dialogRef.componentInstance.templateName = templateName;
        dialogRef.componentInstance.templateId = templateId;
        dialogRef.componentInstance.templateList = templatesList;
        return dialogRef.afterClosed();
    }

    public openBulkUpdateModal(hotelId): Observable<any> {
        let dialogRef: MatDialogRef<BulkUpdateDialogComponent>;
        dialogRef = this.dialog.open(BulkUpdateDialogComponent);
        dialogRef.componentInstance.hotelId = hotelId;
        return dialogRef.afterClosed();
    }

}
