import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemo2 } from './form-demo2';

describe('FormDemo2', () => {
  let component: FormDemo2;
  let fixture: ComponentFixture<FormDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
