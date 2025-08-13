import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from 'wt-components';
import { LoaderCardComponent } from 'wt-loaders';
import { UserRoleMapperPipe } from 'wt-core';
import { DoughnutChartComponent } from 'wt-graphs';
import { LineChartComponent } from 'wt-graphs';
import { PieChartComponent } from 'wt-graphs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderCardComponent,
    StarRatingComponent,
    DoughnutChartComponent,
    LineChartComponent,
    PieChartComponent,
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

  public onRatingChanged(rating: number): void {
    console.log(rating);
  }
}
