import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'wt-scatter-chart',
  imports: [BaseChartDirective],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.scss'
})
export class ScatterChartComponent {
  public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] =
    [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 5, y: -3 }
        ],
        label: 'Series A',
        pointRadius: 10
      }
    ];

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: false
  };
}
