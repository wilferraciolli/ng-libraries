import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wt-field-text',
  imports: [],
  template: ` <p>forms works!</p> `,
  styleUrl: 'field-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Forms implements FormValueControl {}
