import { Component, OnInit } from '@angular/core';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  private sample_pie = [];
  constructor(private _sampleServe: SampleDataService) { }

  ngOnInit() {
    this.sample_pie = this._sampleServe.dataSampling();
  }

}
