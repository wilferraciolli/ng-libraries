import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'wt-polar-area-chart',
  imports: [BaseChartDirective],
  templateUrl: './polar-area-chart.component.html',
  styleUrl: './polar-area-chart.component.scss'
})
export class PolarAreaChartComponent {
  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
  ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] =
    [{ data: [300, 500, 100, 40, 120] }];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false
  };
}
