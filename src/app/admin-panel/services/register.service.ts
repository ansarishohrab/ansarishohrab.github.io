import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  domainUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  register(body) {
    return this.http.post(this.domainUrl + '/admin/register', body);
  }
}
