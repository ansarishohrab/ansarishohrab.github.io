import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() registerForm: FormGroup;
  @Input() submitted;
  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if (!this.registerForm) {
      this.registerForm = new FormGroup({})
    }
    this.registerForm.addControl('education', this.fb.array([]))
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let educationArray = this.config.data.Education;
    for (let educationInd in educationArray) {
      this.addEducationRow();
      educationArray[educationInd].startDate = new Date(educationArray[educationInd].startDate);
      educationArray[educationInd].endDate = new Date(educationArray[educationInd].endDate);
      this.registerForm.get('education').patchValue(educationArray)
    }
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
