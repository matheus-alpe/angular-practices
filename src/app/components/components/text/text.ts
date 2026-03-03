import { Component, input } from '@angular/core';

@Component({
  selector: 'component-text',
  imports: [],
  template: `
    <p>{{ value() }}</p>
    <style>
      p {
        color: red;
      }
    </style>
  `,
  styleUrl: './text.css',
})
export class Text {
  readonly value = input('text default', { transform: capitalize, alias: 'text' });
}

function capitalize(value: string) {
  return value.toUpperCase();
}
