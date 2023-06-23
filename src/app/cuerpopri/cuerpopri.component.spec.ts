import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpopriComponent } from './cuerpopri.component';

describe('CuerpopriComponent', () => {
  let component: CuerpopriComponent;
  let fixture: ComponentFixture<CuerpopriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpopriComponent]
    });
    fixture = TestBed.createComponent(CuerpopriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
