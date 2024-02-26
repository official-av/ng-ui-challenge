import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BehaviorSubject, combineLatest, map } from "rxjs";
import { TariffFilter } from "./feature/tariffs/TariffFilter.enum";
import { TariffListComponent } from "./feature/tariffs/tariff-list/tariff-list.component";
import { TariffSortComponent } from "./feature/tariffs/tariff-sort/tariff-sort.component";
import { TariffService } from "./feature/tariffs/tariff.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TariffListComponent, TariffSortComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  #isAscSubject = new BehaviorSubject(false);
  isAsc$ = this.#isAscSubject.asObservable();
  #filterSubject = new BehaviorSubject(TariffFilter.Price);
  filter$ = this.#filterSubject.asObservable();

  tariffs$ = combineLatest([
    this._tariffsService.getTariffs(),
    this.isAsc$,
    this.filter$,
  ]).pipe(
    map(([tariffs, isAsc, filter]) =>
      this._tariffsService.filterTariffs(filter, tariffs, isAsc)
    )
  );

  constructor(private _tariffsService: TariffService) {}

  handleSortOrder(isAsc: boolean) {
    this.#isAscSubject.next(isAsc);
  }

  handleFilterOrder(filter: TariffFilter) {
    this.#filterSubject.next(filter);
  }
}
