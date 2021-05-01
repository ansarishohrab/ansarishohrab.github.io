import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-info-form',
  templateUrl: './social-info-form.component.html',
  styleUrls: ['./social-info-form.component.scss']
})
export class SocialInfoFormComponent implements OnInit {
  @Input() registerForm: FormGroup;
  @Input() submitted;
  socialOptions: any = [
    { name: 'Twitter' },
    { name: 'LinkedIn' },
    { name: 'Git hub' },
  ];
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm.addControl('socialMediaInfo', this.fb.array([]))
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

}
