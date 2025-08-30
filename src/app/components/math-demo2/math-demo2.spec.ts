import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo2 } from './math-demo2';

describe('MathDemo2', () => {
  let component: MathDemo2;
  let fixture: ComponentFixture<MathDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
