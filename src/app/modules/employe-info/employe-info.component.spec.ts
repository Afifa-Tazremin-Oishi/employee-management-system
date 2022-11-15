import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeInfoComponent } from './employe-info.component';

describe('EmployeInfoComponent', () => {
  let component: EmployeInfoComponent;
  let fixture: ComponentFixture<EmployeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
