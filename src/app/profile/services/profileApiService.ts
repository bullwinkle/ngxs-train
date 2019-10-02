import { Inject } from '@angular/core';

const SKILLS_MOCK = [
  {
    id: 'App structure',
    name: 'App structure',
    value: 0,
  },
  {
    id: 'Change Detection',
    name: 'Change Detection',
    value: 0,
  },
  {
    id: 'Reactive Forms',
    name: 'Reactive Forms',
    value: 0,
  },
  {
    id: 'Content Projections',
    name: 'Content Projections',
    value: 0,
  },
  {
    id: 'Routing',
    name: 'Routing',
    value: 0,
  },
  {
    id: 'Components communications',
    name: 'Components communications',
    value: 0,
  },
  {
    id: 'Stores & Events',
    name: 'Stores & Events',
    value: 0,
  },
  {
    id: 'Angular CLI',
    name: 'Angular CLI',
    value: 0,
  },
  {
    id: 'Typescript',
    name: 'Typescript',
    value: 0,
  },
  {
    id: 'RxJS',
    name: 'RxJS',
    value: 0,
  },
  {
    id: 'UI kit',
    name: 'UI kit',
    value: 0,
  },
  {
    id: 'Styling',
    name: 'Styling',
    value: 0,
  },
  {
    id: 'Project builder',
    name: 'Project builder',
    value: 0,
  },
];


@Inject({
  provideIn: 'root',
})
export class ProfileApiService {
  async getUserInfo () {

  }

  async getSkills () {
    return SKILLS_MOCK;
  }
}
