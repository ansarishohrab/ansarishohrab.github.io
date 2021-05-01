import { Component, Input, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

  @Input() registerForm: FormGroup;
  @Input() submitted;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm.addControl('projects', this.fb.array([]))
  }

  getProjectsArray() {
    return this.registerForm.get('projects') as FormArray;
  }

  addProjectRow() {
    this.getProjectsArray().push(
      this.fb.group({
        title: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
      })
    );
  }

}
