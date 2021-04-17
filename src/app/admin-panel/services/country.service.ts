import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  api_token =
    'yLrNAT7xKDaoPr4GKZGjQZAY1zwlR_beAlkmnlmPWAmB7LM5CletsA0tgWj9nRAIgrY';
  user_email = 'ansari.shohrab80@gmail.com';
  constructor(private http: HttpClient) {}

  getAccessToken() {
    let httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('api-token', this.api_token)
      .set('user-email', this.user_email);
    return this.http.get(
      'https://www.universal-tutorial.com/api/getaccesstoken',
      {
        headers: httpHeaders,
      }
    );
  }

  getCountries() {
    let promise = new Promise((resolve, reject) => {
      this.getAccessToken().subscribe(
        (accessResponse) => {
          let auth_token = accessResponse['auth_token'];
          let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + auth_token);
          this.http
            .get('https://www.universal-tutorial.com/api/countries/', {
              headers: httpHeaders,
            })
            .subscribe(
              (countries) => {
                resolve(countries);
              },
              (error) => {
                reject(error);
              }
            );
        },
        (error) => {
          reject(error);
        }
      );
    });
    return promise;
  }

  getStates(country: string) {
    let promise = new Promise((resolve, reject) => {
      this.getAccessToken().subscribe(
        (accessResponse) => {
          let auth_token = accessResponse['auth_token'];
          let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + auth_token);
          this.http
            .get('https://www.universal-tutorial.com/api/states/' + country, {
              headers: httpHeaders,
            })
            .subscribe(
              (countries) => {
                resolve(countries);
              },
              (error) => {
                reject(error);
              }
            );
        },
        (error) => {
          reject(error);
        }
      );
    });
    return promise;
  }

  getCities(state: string) {
    let promise = new Promise((resolve, reject) => {
      this.getAccessToken().subscribe(
        (accessResponse) => {
          let auth_token = accessResponse['auth_token'];
          let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + auth_token);
          this.http
            .get('https://www.universal-tutorial.com/api/cities/' + state, {
              headers: httpHeaders,
            })
            .subscribe(
              (countries) => {
                resolve(countries);
              },
              (error) => {
                reject(error);
              }
            );
        },
        (error) => {
          reject(error);
        }
      );
    });
    return promise;
  }
}
