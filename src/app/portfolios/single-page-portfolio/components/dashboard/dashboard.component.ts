import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-single-page-portfolio-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class SinglePagePorfolioDashboardComponent implements OnInit {
  portFolioData: any;
  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let email = this.route.snapshot.paramMap.get('email');
    this.sharedService.getUserDetails(email).subscribe(
      (portFolioData: any) => {
        console.log(portFolioData.data);
        this.portFolioData = portFolioData.data;
      },
      (error) => {
        this.sharedService.showMessage('Can not fetch user details');
      }
    );
  }
}
