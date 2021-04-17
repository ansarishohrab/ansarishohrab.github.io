import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  config = {
    search: true,
    placeholder: 'Select',
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'value', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
    inputDirection: 'ltr', // the direction of the search input can be rtl or ltr(default)
  };
  countryDropConfig = {
    ...this.config,
    placeholder: 'Select Country',
    searchPlaceholder: 'Search Country',
    displayKey: 'country_name',
    searchOnKey: 'country_name',
  };
  countryOptions: any = [];
  stateDropConfig = {
    ...this.config,
    placeholder: 'Select State',
    searchPlaceholder: 'Search State',
    displayKey: 'state_name',
    searchOnKey: 'state_name',
  };
  stateOptions: any = [];
  cityDropConfig = {
    ...this.config,
    placeholder: 'Select City',
    searchPlaceholder: 'Search City',
    displayKey: 'city_name',
    searchOnKey: 'city_name',
  };
  cityOptions: any = [];

  socialDropConfig = {
    ...this.config,
    placeholder: 'Select Page',
    searchPlaceholder: 'Search Page',
  };
  socialOptions: any = ['Twitter', 'LinkedIn', 'Git hub'];

  skillLevelDropConfig = {
    ...this.config,
    placeholder: 'Select level',
    searchPlaceholder: 'Search level',
  };
  skillLevelOptions: any = ['Pro', 'Expert', 'Intermediate', 'Beginner'];

  langLevelDropConfig = {
    ...this.config,
    placeholder: 'Select level',
    searchPlaceholder: 'Search level',
  };
  langLevelOptions: any = ['Professional Proficiency', 'Native Speaker'];
  source: string = 'assets/images/profile.svg';
  registerForm: FormGroup;

  constructor(private countryService: CountryService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      profileImage: this.fb.control('', [Validators.required]),
      firstname: this.fb.control('', [Validators.required]),
      lastname: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', [Validators.required]),
      designation: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      country: this.fb.control('', [Validators.required]),
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
    this.countryService.getCountries().then(
      (countries) => {
        this.countryOptions = countries;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  countryChanged(event) {
    this.stateOptions = [];
    this.cityOptions = [];
    this.countryService.getStates(event.value.country_name).then(
      (states) => {
        this.stateOptions = states;
      },
      (error) => {
        console.log('Error while fetching states', error);
      }
    );
  }
  stateChanged(event) {
    this.cityOptions = [];
    this.countryService.getCities(event.value.state_name).then(
      (cities) => {
        this.cityOptions = cities;
      },
      (error) => {
        console.log('Error while fetching cities', error);
      }
    );
  }

  updateSource($event: Event) {
    if ($event.target['files'][0]) {
      this.projectImage($event.target['files'][0]);
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

  onSubmit() {
    console.log(this.registerForm.value, this.registerForm.valid);
  }

  getSocialMediaArray() {
    return this.registerForm.get('socialMediaInfo') as FormArray;
  }

  addSocialRow() {
    this.getSocialMediaArray().push(
      this.fb.group({
        redirectionLink: this.fb.control('', [Validators.required]),
        name: this.fb.control('', [Validators.required]),
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
        level: this.fb.control('', Validators.required),
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
        level: this.fb.control('', [Validators.required]),
      })
    );
  }
}
