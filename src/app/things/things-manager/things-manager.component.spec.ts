import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsManagerComponent } from './things-manager.component';

describe('ThingsManagerComponent', () => {
  let component: ThingsManagerComponent;
  let fixture: ComponentFixture<ThingsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
