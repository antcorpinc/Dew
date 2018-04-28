import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsService } from './dialogs.service';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { EditPhotoDialogComponent } from './edit-photo-dialog/edit-photo-dialog.component';
import { MaterialModule } from '../../../../common/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CopyTemplateComponent } from './copy-template/copy-template.component';
import { MarketDialogComponent } from './market-dialog/market-dialog.component';
import { ContractTemplateTypeComponent } from './contract-template-type/contract-template-type.component';
import { MarketCountryFilterPipe } from '../../../common/pipes/marketcountryfilterpipe';
import { BulkUpdateDialogComponent } from '../../../hotel-mgmt/allocations/bulk-update-dialog/bulk-update-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConfirmDialogComponent,
    EditPhotoDialogComponent,
    MarketDialogComponent,
    ContractTemplateTypeComponent,
    CopyTemplateComponent,
    MarketCountryFilterPipe,
    BulkUpdateDialogComponent],
  exports: [ConfirmDialogComponent,
    EditPhotoDialogComponent,
    MarketDialogComponent,
    ContractTemplateTypeComponent,
    CopyTemplateComponent,
    BulkUpdateDialogComponent],
  entryComponents: [ConfirmDialogComponent,
    EditPhotoDialogComponent,
    MarketDialogComponent,
    ContractTemplateTypeComponent,
    CopyTemplateComponent,
    BulkUpdateDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }
