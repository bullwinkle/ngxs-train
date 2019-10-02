import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { ProfileInfoModel } from '../../models/profile-Info.model';
import { ProfileService } from '../../services/profile.service';
import { ProfileState } from '../../state/profile.state';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  @Input('isEditable') isEditable = false;

  @Select(ProfileState.getInfo) info$: Observable<ProfileInfoModel>;

  formGroup: FormGroup = this.formBuilder.group({
    userName: [''],
    feedback: [''],
  });

  constructor (
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit () {
    this.formGroup.valueChanges
      .pipe(
        // Set from state on first time and turn off
        withLatestFrom(
          this.profileService.info$.pipe(
            take(1),
            tap(data => this.formGroup.reset(data)),
          ),
        ),
        // Set to state on every user's update
        switchMap(([formData]) => {
          return this.profileService.updateProfile(formData);
        }),
      )
      .subscribe();
  }

}
