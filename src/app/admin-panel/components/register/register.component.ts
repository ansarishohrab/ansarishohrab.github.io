import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/services/shared.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {






  registerForm: FormGroup;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    public sharedService: SharedService,
    private ngxService: NgxUiLoaderService
  ) {
    this.registerForm = this.fb.group({});
  }

  ngOnInit(): void {
  }






  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.ngxService.start();
      this.registerService.register(this.registerForm.value).subscribe(
        (response) => {
          this.router.navigate(['/dashboard/' + response['email']]);
          this.ngxService.stop();
        },
        (error) => {
          this.ngxService.stop();
          this.sharedService.showMessage(error.error.message);
        }
      );
    } else {
      this.ngxService.stop();
      this.sharedService.showMessage('Please fill valid details');
    }
  }












}
