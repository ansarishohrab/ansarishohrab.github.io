import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
