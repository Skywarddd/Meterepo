import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoInfosComponent } from './meteo-infos.component';

describe('MeteoInfosComponent', () => {
  let component: MeteoInfosComponent;
  let fixture: ComponentFixture<MeteoInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
