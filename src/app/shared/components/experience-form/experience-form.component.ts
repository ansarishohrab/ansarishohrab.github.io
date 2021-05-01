import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  @Input() registerForm: FormGroup;
  @Input() submitted;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm.addControl('experiences', this.fb.array([]))
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

}
