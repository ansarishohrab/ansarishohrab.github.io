import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

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
    public config: DynamicDialogConfig
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
}
