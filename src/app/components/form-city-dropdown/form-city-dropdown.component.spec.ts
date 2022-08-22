import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantFormsComponent} from './form-city-dropdown.component';

describe('FormCityDropdownComponent', () => {
  let component: EnfantFormsComponent;
  let fixture: ComponentFixture<EnfantFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
