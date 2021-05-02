import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectsFormComponent } from 'src/app/shared/components/projects-form/projects-form.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void { }

  editDetails() {
    this.ref = this.dialogService.open(ProjectsFormComponent, {
      header: 'Edit projects',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }
}
