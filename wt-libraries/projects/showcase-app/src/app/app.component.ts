import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from 'wt-components';
import { LoaderCardComponent } from 'wt-loaders';
import { UserRoleMapperPipe } from 'wt-core';
import { DoughnutChartComponent } from 'wt-graphs';
import { LineChartComponent } from 'wt-graphs';
import { PieChartComponent } from 'wt-graphs';
import { RadarChartComponent } from 'wt-graphs';
import { BarChartComponent } from 'wt-graphs';
import { PolarAreaChartComponent } from 'wt-graphs';
import { ScatterChartComponent } from 'wt-graphs';
import { BubbleChartComponent } from 'wt-graphs';
import { ChartThemeService } from 'wt-graphs';
import { SocketService } from 'wt-websockets';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderCardComponent,
    StarRatingComponent,
    DoughnutChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    BarChartComponent,
    ScatterChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    UserRoleMapperPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase-app';
  public answerLabels: string[] = ['Answered', 'Unanswered'];
  public answeredCount: WritableSignal<number> = signal(5);
  public unansweredCount: WritableSignal<number> = signal(10);

  private _chartThemeService: ChartThemeService = inject(ChartThemeService);
  private_webSocketService: SocketService = inject(SocketService);

  public onRatingChanged(rating: number): void {
    console.log(rating);
    this._chartThemeService.setTheme('dark');
  }
}
