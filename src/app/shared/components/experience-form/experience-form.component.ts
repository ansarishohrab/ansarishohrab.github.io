import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from 'src/app/admin-panel/services/register.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

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
    this.registerForm.addControl('experiences', this.fb.array([]))
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let experiences = this.config.data.Experiences;
    for (let expInd in experiences) {
      this.addExperiencesRow();
      experiences[expInd].joiningDate = new Date(experiences[expInd].joiningDate)
      experiences[expInd].endDate = new Date(experiences[expInd].endDate)
      this.registerForm.get('experiences').patchValue(experiences)
    }
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

  onSubmit() {
    this.registerService.updateExperiences(this.registerForm.value.experiences).subscribe(response => {
      this.ref.close()
    }, error => {
      this.sharedService.showMessage(error.message)
    })
  }

}
