import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  BarChartComponent,
  BubbleChartComponent,
  ChartThemeService,
  DoughnutChartComponent,
  LineChartComponent,
  PieChartComponent,
  PolarAreaChartComponent,
  RadarChartComponent,
  ScatterChartComponent
} from 'wt-graphs';

@Component({
  selector: 'wt-graph-list',
  imports: [
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    ScatterChartComponent
  ],
  templateUrl: './graph-list.component.html',
  styleUrl: './graph-list.component.scss'
})
export class GraphListComponent {
  private _chartThemeService: ChartThemeService = inject(ChartThemeService);

  public answerLabels: string[] = ['Answered', 'Unanswered'];
  public answeredCount: WritableSignal<number> = signal(5);
  public unansweredCount: WritableSignal<number> = signal(10);

  public onThemeChange(): void {
    this._chartThemeService.setTheme('dark');
  }
}
