import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.scss']
})
export class BasicDetailsFormComponent implements OnInit {

  @Input() registerForm: FormGroup;
  @Input() submitted;
  source: string = 'assets/images/profile.svg';
  countryOptions: any = [];
  stateOptions: any = [];
  cityOptions: any = [];
  countryLoading;
  stateLoading;
  cityLoading;
  constructor(
    public sharedService: SharedService,
    private countryService: CountryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm.addControl('profileImage', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('firstname', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('lastname', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('email', this.fb.control(null, [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]))
    this.registerForm.addControl('phone', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('designation', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('description', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('country', this.fb.control(''))
    this.registerForm.addControl('state', this.fb.control('', [Validators.required]))
    this.registerForm.addControl('city', this.fb.control('', [Validators.required]))
    this.countryLoading = true;
    this.countryService.getCountries().then(
      (countries) => {
        this.countryOptions = countries;
        this.countryLoading = false;
        this.registerForm.get('country').setValue(countries[0].country_name);
        this.countryChanged(countries[0].country_name);
      },
      (error) => {
        console.log(error);
        this.countryLoading = false;
      }
    );
  }
  countryChanged(country) {
    this.stateOptions = [];
    this.cityOptions = [];
    this.stateLoading = true;
    this.countryService.getStates(country).then(
      (states) => {
        this.stateOptions = states;
        this.stateLoading = false;
        this.registerForm.get('state').setValue(states[0].state_name);
        this.stateChanged(states[0].state_name);
      },
      (error) => {
        console.log('Error while fetching states', error);
        this.stateLoading = false;
      }
    );
  }
  stateChanged(state) {
    this.cityOptions = [];
    this.cityLoading = true;
    this.countryService.getCities(state).then(
      (cities) => {
        this.cityOptions = cities;
        this.cityLoading = false;
        this.registerForm.get('city').setValue(cities[0].city_name);
      },
      (error) => {
        console.log('Error while fetching cities', error);
        this.cityLoading = false;
      }
    );
  }

  updateSource($event: Event) {
    if ($event.target['files'][0]) {
      if (this.bytesToSize($event.target['files'][0].size) <= 50) {
        this.projectImage($event.target['files'][0]);
      } else {
        this.sharedService.showMessage('File size must be less thant 50 KB');
      }
    }
  }

  projectImage(file: File) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.source = e.target.result;
      this.registerForm.controls['profileImage'].setValue(
        this.source ? this.source : ''
      );
    };
    reader.readAsDataURL(file);
  }

  bytesToSize(bytes) {
    return bytes / 1024;
  }

}
