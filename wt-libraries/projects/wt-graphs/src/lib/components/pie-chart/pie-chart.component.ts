import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'wt-pie-chart',
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales'
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100]
    }
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
