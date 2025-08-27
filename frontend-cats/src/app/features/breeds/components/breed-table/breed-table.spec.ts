import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedTable } from './breed-table';

describe('BreedTable', () => {
  let component: BreedTable;
  let fixture: ComponentFixture<BreedTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
