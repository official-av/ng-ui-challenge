import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'benefits',
  standalone: true,
  pure: true
})
export class BenefitsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(', ');
  }

}
