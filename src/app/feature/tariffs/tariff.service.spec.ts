import { TestBed, waitForAsync } from "@angular/core/testing";

import { TariffService } from "./tariff.service";
import { TariffFilter } from "./TariffFilter.enum";
import mockTariffs from "./tariffs.data.mock";

describe("TariffService", () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return mock data", waitForAsync(() => {
    service.getTariffs().subscribe((tariffs) => expect(tariffs.length).toBe(5));
  }));

  it("should sort by price ASC", () => {
    expect(
      service.filterTariffs(TariffFilter.Price, mockTariffs, true)[0].price
    ).toBe(35.99);
  });

  it("should sort by price DESC", () => {
    expect(
      service.filterTariffs(TariffFilter.Price, mockTariffs)[0].price
    ).toBe(349.99);
  });

  it("should sort by downlaod speed ASC", () => {
    expect(
      service.filterTariffs(TariffFilter.DownloadSpeed, mockTariffs, true)[0]
        .downloadSpeed
    ).toBe(12);
  });

  it("should sort by downlaod speed ASC", () => {
    expect(
      service.filterTariffs(TariffFilter.DownloadSpeed, mockTariffs, true)[0]
        .downloadSpeed
    ).toBe(12);
  });

  it("should sort by downlaod speed DESC", () => {
    expect(
      service.filterTariffs(TariffFilter.DownloadSpeed, mockTariffs)[0]
        .downloadSpeed
    ).toBe(150);
  });

  it("should sort by upload speed ASC", () => {
    expect(
      service.filterTariffs(TariffFilter.UploadSpeed, mockTariffs, true)[0]
        .uploadSpeed
    ).toBe(6);
  });

  it("should sort by upload speed DESC", () => {
    expect(
      service.filterTariffs(TariffFilter.UploadSpeed, mockTariffs)[0]
        .uploadSpeed
    ).toBe(50);
  });
});
