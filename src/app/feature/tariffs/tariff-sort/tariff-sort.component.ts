import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tariff-sort",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tariff-sort.component.html",
  styleUrls: ["./tariff-sort.component.scss"],
})
export class TariffSortComponent {
  @Output() sortOrderChanged = new EventEmitter<boolean>();
}
