import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExperienceFormComponent } from 'src/app/shared/components/experience-form/experience-form.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void { }

  editDetails() {
    this.ref = this.dialogService.open(ExperienceFormComponent, {
      header: 'Edit projects',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }
}
