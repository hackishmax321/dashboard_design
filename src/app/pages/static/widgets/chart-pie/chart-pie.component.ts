import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};

  @Input() samplepie: number;


  constructor() { }

  ngOnInit() {
    this.chartOptions = { 
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: 
        this.samplepie
        // [
        //     ['Chrome', 58.9],
        //     ['Firefox', 13.29],
        //     ['Internet Explorer', 13],
        //     ['Edge', 3.78],
        //     ['Safari', 3.42],
        //     {
        //         name: 'Other',
        //         y: 7.61,
        //         dataLabels: {
        //             enabled: false
        //         }
        //     }
        // ]
    }]
    } 

    HC_exporting(Highcharts);
  }

}
