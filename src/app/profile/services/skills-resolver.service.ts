import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfileSkillModel } from '../models/profile-skill.model';
import { ProfileService } from './profile.service';

@Inject({
  provideIn: 'root',
})
export class SkillsResolver implements Resolve<ProfileSkillModel[]> {
  constructor (
    private profileService: ProfileService,
  ) {
  }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.profileService.getSkills();
  }
}
