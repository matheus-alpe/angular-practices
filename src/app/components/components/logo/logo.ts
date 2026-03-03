import { Component, input } from '@angular/core';

@Component({
  selector: 'component-logo',
  imports: [],
  template: ` <p [title]="title()">logo</p> `,
  styleUrl: './logo.css',
})
export class Logo {
  title = input.required<string>();
}
