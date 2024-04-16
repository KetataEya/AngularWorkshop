import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceCompComponent } from './form-residence-comp.component';

describe('FormResidenceCompComponent', () => {
  let component: FormResidenceCompComponent;
  let fixture: ComponentFixture<FormResidenceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResidenceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
