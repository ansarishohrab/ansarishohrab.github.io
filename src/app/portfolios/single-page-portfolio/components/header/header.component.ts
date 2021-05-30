import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BasicDetailsFormComponent } from 'src/app/shared/components/basic-details-form/basic-details-form.component';
import { SocialInfoFormComponent } from 'src/app/shared/components/social-info-form/social-info-form.component';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class SinglePageFolioHeaderComponent implements OnInit {
  @Input() portFolioData: any;
  ref: DynamicDialogRef;
  constructor(
    public dialogService: DialogService,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void { }

  editBasicDetails() {
    this.ref = this.dialogService.open(BasicDetailsFormComponent, {
      header: 'Edit education',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }

  editSocialDetails() {
    this.ref = this.dialogService.open(SocialInfoFormComponent, {
      header: 'Edit education',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.portFolioData
    });
  }

  deletePortfolio() {
    this.sharedService.deletePortfolio(this.portFolioData.email).subscribe(response => {
      this.sharedService.showMessage('User deleted successfully');
    }, error => {
      this.sharedService.showMessage('Something went wrong while deleting user');
    })

  }
}
