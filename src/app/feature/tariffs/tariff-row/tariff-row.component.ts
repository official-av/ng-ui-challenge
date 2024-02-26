import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tariff } from "../Tariff.interface";
import { BenefitsPipe } from "src/app/pipes/benefits.pipe";
import { SpeedPipe } from "src/app/pipes/speed.pipe";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: "app-tariff-row",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BenefitsPipe, SpeedPipe, MatIconModule, MatButtonModule],
  templateUrl: "./tariff-row.component.html",
  styleUrls: ["./tariff-row.component.scss"],
})
export class TariffRowComponent {
  @Input() tariff!: Tariff;
}
