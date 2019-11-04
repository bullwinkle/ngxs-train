import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ProfileInfoModel } from '../../models/profile-Info.model';
import { ProfileState } from '../../state';

@Component({
  selector: 'app-profile-skills-page',
  templateUrl: './profile-skills-page.component.html',
  styleUrls: ['./profile-skills-page.component.scss']
})
export class ProfileSkillsPageComponent implements OnInit {

  @Select(ProfileState.getInfo) info$: Observable<ProfileInfoModel>;

  constructor() { }

  ngOnInit() {
  }

}
