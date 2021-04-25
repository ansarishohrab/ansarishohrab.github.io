import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CountryService } from '../../services/country.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  countryOptions: any = [];
  stateOptions: any = [];
  cityOptions: any = [];
  socialOptions: any = [
    { name: 'Twitter' },
    { name: 'LinkedIn' },
    { name: 'Git hub' },
  ];

  skillLevelOptions: any = [
    { name: 'Pro' },
    { name: 'Expert' },
    { name: 'Intermediate' },
    { name: 'Beginner' },
  ];

  langLevelOptions: any = [
    { name: 'Professional Proficiency' },
    { name: 'Native Speaker' },
  ];
  source: string = 'assets/images/profile.svg';
  registerForm: FormGroup;
  countryLoading;
  stateLoading;
  cityLoading;
  submitted: boolean;

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    public sharedService: SharedService,
    private ngxService: NgxUiLoaderService
  ) {
    this.registerForm = this.fb.group({
      profileImage: this.fb.control('', [Validators.required]),
      firstname: this.fb.control('', [Validators.required]),
      lastname: this.fb.control('', [Validators.required]),
      email: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      phone: this.fb.control('', [Validators.required]),
      designation: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      country: this.fb.control(''),
      state: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      socialMediaInfo: this.fb.array([]),
      projects: this.fb.array([]),
      experiences: this.fb.array([]),
      skills: this.fb.array([]),
      education: this.fb.array([]),
      languages: this.fb.array([]),
    });
  }

  ngOnInit(): void {
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
    console.log($event.target['files'][0]);
    if ($event.target['files'][0]) {
      if (this.bytesToSize($event.target['files'][0].size) <= 50) {
        this.projectImage($event.target['files'][0]);
      } else {
        this.sharedService.showMessage('File size must be less thant 50 KB');
      }
    }
  }

  bytesToSize(bytes) {
    return bytes / 1024;
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

  getSocialMediaArray() {
    return this.registerForm.get('socialMediaInfo') as FormArray;
  }

  addSocialRow() {
    this.getSocialMediaArray().push(
      this.fb.group({
        redirectionLink: this.fb.control('', [Validators.required]),
        name: this.fb.control(this.socialOptions[0].name, [
          Validators.required,
        ]),
      })
    );
  }

  getProjectsArray() {
    return this.registerForm.get('projects') as FormArray;
  }

  addProjectRow() {
    this.getProjectsArray().push(
      this.fb.group({
        title: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
      })
    );
  }

  getExperiencesArray() {
    return this.registerForm.get('experiences') as FormArray;
  }

  addExperiencesRow() {
    this.getExperiencesArray().push(
      this.fb.group({
        designation: this.fb.control('', [Validators.required]),
        company: this.fb.control('', [Validators.required]),
        joiningDate: this.fb.control('', [Validators.required]),
        endDate: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
      })
    );
  }

  getSkillsArray() {
    return this.registerForm.get('skills') as FormArray;
  }

  addSkillsRow() {
    this.getSkillsArray().push(
      this.fb.group({
        name: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
        level: this.fb.control(
          this.skillLevelOptions[0].name,
          Validators.required
        ),
      })
    );
  }

  getEducationArray() {
    return this.registerForm.get('education') as FormArray;
  }

  addEducationRow() {
    this.getEducationArray().push(
      this.fb.group({
        degree: this.fb.control('', [Validators.required]),
        college: this.fb.control('', [Validators.required]),
        startDate: this.fb.control('', [Validators.required]),
        endDate: this.fb.control('', [Validators.required]),
      })
    );
  }

  getLanguagesArray() {
    return this.registerForm.get('languages') as FormArray;
  }

  addLanguagesRow() {
    this.getLanguagesArray().push(
      this.fb.group({
        name: this.fb.control('', [Validators.required]),
        level: this.fb.control(this.langLevelOptions[0].name, [
          Validators.required,
        ]),
      })
    );
  }
}
