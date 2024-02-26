import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffSortComponent } from './tariff-sort.component';

describe('TariffSortComponent', () => {
  let component: TariffSortComponent;
  let fixture: ComponentFixture<TariffSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TariffSortComponent]
    });
    fixture = TestBed.createComponent(TariffSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: test icon arrow direction sort order
  // TODO: test filter selected value in UI
});
