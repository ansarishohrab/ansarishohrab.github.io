import { Component, Input, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from 'src/app/admin-panel/services/register.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

  @Input() registerForm: FormGroup;
  @Input() submitted;
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
    this.registerForm.addControl('projects', this.fb.array([]))
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let projects = this.config.data.Projects;
    for (let projInd in projects) {
      this.addProjectRow();
      this.registerForm.get('projects').patchValue(projects)
    }
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

  onSubmit() {
    this.registerService.updateProjects(this.registerForm.value.projects).subscribe(response => {
      this.ref.close()
    }, error => {
      this.sharedService.showMessage(error.message)
    })
  }
}
