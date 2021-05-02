import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SkillsFormComponent } from 'src/app/shared/components/skills-form/skills-form.component';

declare let $: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level');

      $(this).animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  }

  editDetails() {
    this.ref = this.dialogService.open(SkillsFormComponent, {
      header: 'Edit projects',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }
}
