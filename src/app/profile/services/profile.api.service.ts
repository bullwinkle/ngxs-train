import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileSkillModel } from '../models/profile-skill.model';

@Inject({
  provideIn: 'root',
})
export class ProfileApiService {
  constructor (private http: HttpClient) {
  }

  async getSkills (): Promise<ProfileSkillModel[]> {
    return this.http.get<ProfileSkillModel[]>('/assets/mocks/profile/skills.json')
      .pipe(
        map(response => response.map(el => new ProfileSkillModel(el))),
        catchError(() => of([])),
      )
      .toPromise();
  }
}
