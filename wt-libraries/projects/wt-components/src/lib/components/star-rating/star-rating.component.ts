import { CommonModule, NgForOf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
  WritableSignal
} from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'wt-star-rating',
  imports: [
    NgForOf,
    CommonModule,
    MatIconButton,
    MatButtonModule,
    MatTooltip,
    MatIcon,
    MatIconModule
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent implements OnInit {
  @Input('rating')
  public rating: number = 0;

  @Input('starCount')
  public starCount: number = 5;

  @Input('color')
  public color: string = 'accent';

  @Output()
  public ratingUpdated: EventEmitter<number> = new EventEmitter<number>();

  public ratings: number[] = [];
  public currentRating: WritableSignal<number> = signal(0);

  public ngOnInit(): void {
    if (this.rating) {
      this.currentRating.set(this.rating);
    }

    for (let index = 0; index < this.starCount; index++) {
      this.ratings.push(index);
    }
  }

  public onClick(rating: number): void {
    console.log(rating);
    if (this._selectedTheSameRating(rating)) {
      this.currentRating.set(0);
    } else {
      this.currentRating.set(rating);
    }

    this.ratingUpdated.emit(rating);
  }

  public showIcon(index: number): string {
    if (this.currentRating() >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  public resolveToolTip(index: number): string {
    return index.toString() + ' of ' + this.starCount + ' stars';
  }

  private _selectedTheSameRating(selectedRating: number): boolean {
    return this.currentRating() === selectedRating;
  }
}

export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
