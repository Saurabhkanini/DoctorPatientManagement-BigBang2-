import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDoctorComponent } from './active-doctor.component';

describe('ActiveDoctorComponent', () => {
  let component: ActiveDoctorComponent;
  let fixture: ComponentFixture<ActiveDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
