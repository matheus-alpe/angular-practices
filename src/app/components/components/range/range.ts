import { Component, model, output } from '@angular/core';

@Component({
  selector: 'component-range',
  imports: [],
  template: ` <input type="range" [value]="value()" (input)="inputHandler($event)" /> `,
  styleUrl: './range.css',
})
export class Range {
  value = model.required<number>();
  valueChanged = output<number>();

  inputHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    if (isNaN(Number(input.value))) {
      return;
    }
    this.value.set(Number(input.value));
    this.valueChanged.emit(Number(input.value));
  }
}
