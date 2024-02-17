import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
@Injectable({
  providedIn: 'root'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: any): any {
    if (value){
      const parts = value.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }
  }
}