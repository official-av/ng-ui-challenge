import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffRowComponent } from './tariff-row.component';

describe('TariffRowComponent', () => {
  let component: TariffRowComponent;
  let fixture: ComponentFixture<TariffRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TariffRowComponent]
    });
    fixture = TestBed.createComponent(TariffRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // TODO: test tariff download speed UI
  // TODO: test tariff price UI
});
