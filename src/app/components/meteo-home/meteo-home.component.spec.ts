import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoHomeComponent } from './meteo-home.component';

describe('MeteoHomeComponent', () => {
  let component: MeteoHomeComponent;
  let fixture: ComponentFixture<MeteoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
