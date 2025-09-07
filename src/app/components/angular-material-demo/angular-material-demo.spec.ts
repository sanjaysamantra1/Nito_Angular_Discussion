import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialDemo } from './angular-material-demo';

describe('AngularMaterialDemo', () => {
  let component: AngularMaterialDemo;
  let fixture: ComponentFixture<AngularMaterialDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
