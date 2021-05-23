import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }
  register(body) {
    return this.http.post(environment.domainUrl + '/admin/register', body);
  }

  updateBasicDetails(body) {
    this.sharedService.portFolioData = { ...this.sharedService.portFolioData, ...body }
    return this.http.post(environment.domainUrl + '/admin/update-basic-details', body);
  }
  updateSocialInfo(socialData) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Socials: socialData.socialMediaInfo
    }
    return this.http.post(environment.domainUrl + '/admin/update-social-info', request);
  }
}
