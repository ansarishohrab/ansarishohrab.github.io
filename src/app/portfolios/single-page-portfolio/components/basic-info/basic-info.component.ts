import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BasicDetailsFormComponent } from 'src/app/shared/components/basic-details-form/basic-details-form.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [DialogService]
})
export class BasicInfoComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void { }

  editDetails() {
    this.ref = this.dialogService.open(BasicDetailsFormComponent, {
      header: 'Edit basic details',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });

    this.ref.onClose.subscribe(basicDetails => {
      console.log('test')
    })
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
