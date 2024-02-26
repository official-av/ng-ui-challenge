import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tariff } from "../Tariff.interface";

@Component({
  selector: "app-tariff-row",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tariff-row.component.html",
  styleUrls: ["./tariff-row.component.scss"],
})
export class TariffRowComponent {
  @Input() tariff!: Tariff;
}
