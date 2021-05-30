import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from 'src/app/admin-panel/services/register.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.scss']
})
export class LanguageFormComponent implements OnInit {
  @Input() registerForm: FormGroup;
  @Input() submitted;
  langLevelOptions: any = [
    { name: 'Professional Proficiency' },
    { name: 'Native Speaker' },
  ];
  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public registerService: RegisterService,
    public ref: DynamicDialogRef,
    public sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    if (!this.registerForm) {
      this.registerForm = new FormGroup({})
    }
    this.registerForm.addControl('languages', this.fb.array([]));
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let languages = this.config.data.Languages;
    for (let i in languages) {
      this.addLanguagesRow();
      this.registerForm.get('languages').patchValue(languages)
    }
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

  onSubmit() {
    this.registerService.updateLanguages(this.registerForm.value.languages).subscribe(response => {
      this.ref.close()
    }, error => {
      this.sharedService.showMessage(error.message)
    })
  }
}
