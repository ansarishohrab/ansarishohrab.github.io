import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EducationFormComponent } from 'src/app/shared/components/education-form/education-form.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void { }

  editDetails() {
    this.ref = this.dialogService.open(EducationFormComponent, {
      header: 'Edit education',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }
}
