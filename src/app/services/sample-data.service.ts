import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }

  dataSampling(){
    return [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
          name: 'Other',
          y: 7.61,
          dataLabels: {
              enabled: false
          }
      }
  ];
  }
}
