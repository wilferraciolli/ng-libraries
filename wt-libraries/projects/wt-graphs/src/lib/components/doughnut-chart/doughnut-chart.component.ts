import { Component, Input, OnInit } from '@angular/core';
import { DoughnutChartDataBuilder } from './DoughnutChartDataBuilder';
import { IDoughnutChartData } from './IDoughnutChartData';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'wt-doughnut-chart',
  imports: [BaseChartDirective],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnInit {
  @Input({ required: true })
  public title: string = '';
  @Input({ required: true })
  public halfDoughnut: boolean = false;
  @Input({ required: true })
  public labels: string[] = [];
  @Input({ required: true })
  public dataSets: number[] = [];

  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {};

  ngOnInit(): void {
    let iDoughnutChartData: IDoughnutChartData = this.getIDoughnutChartData(
      this.halfDoughnut
    );

    this.doughnutChartLabels = this.labels;
    this.doughnutChartDatasets = [
      {
        label: iDoughnutChartData.title,
        data: iDoughnutChartData.values,
        backgroundColor: iDoughnutChartData.backgroundColors
      }
    ];
    this.doughnutChartOptions = {
      responsive: false,
      cutout: iDoughnutChartData.optionCutOut,
      rotation: iDoughnutChartData.optionRotation,
      circumference: iDoughnutChartData.optionCircumference
    };
  }

  private getIDoughnutChartData(halfDoughnut: boolean): IDoughnutChartData {
    if (halfDoughnut) {
      return DoughnutChartDataBuilder.createHalfDoughnut()
        .graphTitle(this.title)
        .graphLabels(this.labels)
        .values(this.dataSets)
        .backgroundColours(['green', 'red'])
        .build();
    }

    return DoughnutChartDataBuilder.createFullDoughnut()
      .graphTitle(this.title)
      .graphLabels(this.labels)
      .values(this.dataSets)
      .backgroundColours(['green', '#3f51b5', 'red'])
      .build();
  }
}
