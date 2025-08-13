import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'wt-radar-chart',
  imports: [BaseChartDirective],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss'
})
export class RadarChartComponent {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
}
