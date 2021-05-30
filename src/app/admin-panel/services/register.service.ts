import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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

  updateProjects(projects) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Projects: projects
    }
    this.sharedService.portFolioData = { ...this.sharedService.portFolioData, Projects: projects }
    return this.http.post(environment.domainUrl + '/admin/update-projects', request);
  }

  updateSkills(skills) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Skills: skills
    }
    this.sharedService.portFolioData = { ...this.sharedService.portFolioData, Skills: skills }
    return this.http.post(environment.domainUrl + '/admin/update-skills', request);
  }

  updateExperiences(experiences) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Experiences: experiences
    }
    this.sharedService.portFolioData = { ...this.sharedService.portFolioData, Experiences: experiences }
    return this.http.post(environment.domainUrl + '/admin/update-experiences', request);
  }
  updateEducation(education) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Education: education
    }
    this.sharedService.portFolioData = { ...this.sharedService.portFolioData, Education: education }
    return this.http.post(environment.domainUrl + '/admin/update-education', request);
  }

  updateLanguages(languages) {
    let request = {
      email: this.sharedService.portFolioData.email,
      Languages: languages
    }
    return this.http.post(environment.domainUrl + '/admin/update-languages', request)
      .pipe(map((response: any) => {
        this.sharedService.portFolioData.Languages = response.Languages
        return response;
      }));
  }
}
