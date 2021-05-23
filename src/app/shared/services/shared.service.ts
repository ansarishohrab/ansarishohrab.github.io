import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  portFolioData: any;
  private dialogMessage: string;
  showDialog: boolean;
  constructor(public http: HttpClient) { }

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
    ).pipe(map((response) => {
      this.portFolioData = response['data'] || {};
      return response;
    }));
  }
}
