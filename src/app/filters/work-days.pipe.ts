import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workDays'
})
export class WorkDaysPipe implements PipeTransform {
  transform(value: number): string {
    return '~' + value / 8 / 20 + ' months';
  }
}
