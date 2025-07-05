import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userRoleMapperPipe'
})
export class UserRoleMapperPipe implements PipeTransform {
  transform(value: string): string {
    return `value is caralho ${value}`;
  }
}
