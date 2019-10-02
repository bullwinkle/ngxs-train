import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { ProfileSkillModel } from '../../models/profile-skill.model';
import { ProfileService } from '../../services/profile.service';
import { ProfileState } from '../../state/profile.state';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.scss'],
})
export class ProfileSkillsComponent implements OnInit {
  @Input('isEditable') isEditable = false;

  @Select(ProfileState.getSkills) skills$: Observable<ProfileSkillModel[]>;

  formGroup: FormGroup = this.formBuilder.group({
    skills: this.formBuilder.array([]),
  });

  get skillsControl (): FormArray {
    return this.formGroup.get('skills') as FormArray;
  }

  constructor (
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit () {
    this.formGroup.valueChanges
      .pipe(
        // Set from state and turn off
        withLatestFrom(
          this.skills$.pipe(
            take(1),
            tap(data => {
              data.forEach(skill => {
                this.skillsControl.push(this.formBuilder.group({
                  id: [skill.id],
                  name: [skill.name],
                  value: [skill.value],
                }));
              });
            }),
          ),
        ),
        // Set to state on every user's update
        switchMap(([{ skills }, stateData]) => {
          return this.profileService.updateSkills(skills);
        }),
      )
      .subscribe();
  }
}
