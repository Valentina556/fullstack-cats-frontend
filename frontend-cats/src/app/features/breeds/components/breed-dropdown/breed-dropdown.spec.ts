import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDropdown } from './breed-dropdown';

describe('BreedDropdown', () => {
  let component: BreedDropdown;
  let fixture: ComponentFixture<BreedDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
