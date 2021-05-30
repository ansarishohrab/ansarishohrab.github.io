import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from 'src/app/admin-panel/services/register.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  @Input() registerForm: FormGroup;
  @Input() submitted;
  skillLevelOptions: any = [
    { name: 'Pro' },
    { name: 'Expert' },
    { name: 'Intermediate' },
    { name: 'Beginner' },
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
    this.registerForm.addControl('skills', this.fb.array([]));
    if (this.config && this.config.data) {
      this.setDefaultValue();
    }
  }

  setDefaultValue() {
    let skills = this.config.data.Skills;
    for (let skillInd in skills) {
      this.addSkillsRow();
      this.registerForm.get('skills').patchValue(skills)
    }
  }

  getSkillsArray() {
    return this.registerForm.get('skills') as FormArray;
  }

  addSkillsRow() {
    this.getSkillsArray().push(
      this.fb.group({
        name: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
        level: this.fb.control(
          this.skillLevelOptions[0].name,
          Validators.required
        ),
      })
    );
  }

  onSubmit() {
    this.registerService.updateSkills(this.registerForm.value.skills).subscribe(response => {
      this.ref.close()
    }, error => {
      this.sharedService.showMessage(error.message)
    })
  }

}
