import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tariff } from "../Tariff.interface";

@Component({
  selector: "app-tariff-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tariff-list.component.html",
  styleUrls: ["./tariff-list.component.scss"],
})
export class TariffListComponent {
  @Input() tariffs!: Tariff[];
}
