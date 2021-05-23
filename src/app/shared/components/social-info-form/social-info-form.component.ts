import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from 'src/app/admin-panel/services/register.service';
import { SharedService } from '../../services/shared.service';

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
    public config: DynamicDialogConfig,
    public registerService: RegisterService,
    public sharedService: SharedService,
    public ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    if (!this.registerForm) {
      this.registerForm = new FormGroup({})
    }
    this.registerForm.addControl('socialMediaInfo', this.fb.array([]))
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let socials = this.config.data.Socials;
    for (let socialInd in socials) {
      this.addSocialRow();
      this.registerForm.get('socialMediaInfo').patchValue(socials)
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

  onSubmit() {
    this.registerService.updateSocialInfo(this.registerForm.value).subscribe(response => {
      this.ref.close()
    }, error => {
      this.sharedService.showMessage(error.message)
    })
  }

}
