import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillsPageComponent } from './profile-skills-page.component';

describe('ProfileSkillsPageComponent', () => {
  let component: ProfileSkillsPageComponent;
  let fixture: ComponentFixture<ProfileSkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSkillsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
