import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() registerForm: FormGroup;
  @Input() submitted;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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

}
