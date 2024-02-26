import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tariff } from "../Tariff.interface";
import { TariffSortComponent } from "../tariff-sort/tariff-sort.component";
import { TariffRowComponent } from "../tariff-row/tariff-row.component";

@Component({
  selector: "app-tariff-list",
  standalone: true,
  imports: [CommonModule, TariffSortComponent, TariffRowComponent],
  templateUrl: "./tariff-list.component.html",
  styleUrls: ["./tariff-list.component.scss"],
})
export class TariffListComponent {
  @Input() tariffs: Tariff[] = [];
}
