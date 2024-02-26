import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Tariff } from "./Tariff.interface";
import { TariffFilter } from "./TariffFilter.enum";
import mockTariffs from "./tariffs.data.mock";

@Injectable({
  providedIn: "root",
})
export class TariffService {
  getTariffs(): Observable<Tariff[]> {
    // return observable with mock data after 300ms
    return of(mockTariffs).pipe(delay(300));
  }

  filterTariffs(
    filter: TariffFilter,
    tariffs: Tariff[],
    isASC = false
  ): Tariff[] {
    switch (filter) {
      case TariffFilter.Price:
        return tariffs.sort((a, b) =>
          isASC ? a.price - b.price : b.price - a.price
        );
      case TariffFilter.DownloadSpeed:
        return tariffs.sort((a, b) =>
          isASC
            ? a.downloadSpeed - b.downloadSpeed
            : b.downloadSpeed - a.downloadSpeed
        );
      case TariffFilter.UploadSpeed:
        return tariffs.sort((a, b) =>
          isASC ? a.uploadSpeed - b.uploadSpeed : b.uploadSpeed - a.uploadSpeed
        );
      default:
        return tariffs;
    }
  }
}
