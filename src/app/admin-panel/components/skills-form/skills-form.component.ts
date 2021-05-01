import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
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

}
