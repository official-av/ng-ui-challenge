import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "speed",
  standalone: true,
  pure: true,
})
export class SpeedPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return `${value} MBits/sec`;
  }
}
