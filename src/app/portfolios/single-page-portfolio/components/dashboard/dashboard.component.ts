import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-single-page-portfolio-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class SinglePagePorfolioDashboardComponent implements OnInit {
  portFolioData: any;
  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    let email = this.route.snapshot.paramMap.get('email');
    this.ngxService.start();
    this.sharedService.getUserDetails(email).subscribe(
      (portFolioData: any) => {
        this.ngxService.stop();
        if (!portFolioData.data) {
          this.sharedService.showMessage('Can not fetch user details');
        }
      },
      (error) => {
        this.sharedService.showMessage('Can not fetch user details');
        this.ngxService.stop();
      }
    );
  }


}
