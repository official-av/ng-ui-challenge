import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TariffFilter } from "../TariffFilter.enum";

@Component({
  selector: "app-tariff-sort",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tariff-sort.component.html",
  styleUrls: ["./tariff-sort.component.scss"],
})
export class TariffSortComponent {
  readonly filtersEnum = TariffFilter;
  readonly filters = [
    TariffFilter.Price,
    TariffFilter.DownloadSpeed,
    TariffFilter.UploadSpeed,
  ];
  @Input() isAsc = false;
  @Input() filter = TariffFilter.Price;
  @Output() sortOrderChanged = new EventEmitter<boolean>();
  @Output() filterChanged = new EventEmitter<TariffFilter>();

  handleSortEvent() {
    this.isAsc = !this.isAsc;
    this.sortOrderChanged.emit(this.isAsc);
  }

  handleFilterEvent(event:any) {
    this.filterChanged.emit(Number(event?.target?.value));
  }
}
