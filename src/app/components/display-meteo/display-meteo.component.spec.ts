import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeteoComponent } from './display-meteo.component';

describe('DisplayMeteoComponent', () => {
  let component: DisplayMeteoComponent;
  let fixture: ComponentFixture<DisplayMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
