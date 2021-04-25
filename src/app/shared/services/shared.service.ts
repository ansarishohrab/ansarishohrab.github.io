import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dialogMessage: string;
  showDialog: boolean;
  constructor() {}

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
}
