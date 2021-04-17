import { Component, OnInit } from '@angular/core';
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
  constructor(private countryService: CountryService) {}

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
}
