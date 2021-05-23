import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(body) {
    return this.http.post(environment.domainUrl + '/admin/register', body);
  }

  updateBasicDetails(body) {
    return this.http.post(environment.domainUrl + '/admin/update-basic-details', body);
  }
}
