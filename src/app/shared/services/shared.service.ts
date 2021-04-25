import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dialogMessage: string;
  showDialog: boolean;
  constructor(public http: HttpClient) {}

  showMessage(message) {
    this.dialogMessage = message;
    this.showDialog = true;
  }

  hideMessage() {
    this.dialogMessage = '';
    this.showDialog = false;
  }

  getDialogMessage() {
    return this.dialogMessage;
  }

  getUserDetails(email) {
    return this.http.get(
      environment.domainUrl + '/admin/user-details/' + email
    );
  }
}
