import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates',
  imports: [FormsModule],
  templateUrl: './templates.html',
  styleUrl: './templates.css',
  host: {
    'window:click': 'clickHandler($event)',
    'document:click': 'clickHandler($event)',
    'body:click': 'clickHandler($event)',
    '(mouseover)': 'mouseOverHandler($event)',
  },
})
export class Templates {
  firstName: string = '';

  updateValue(event: KeyboardEvent) {
    console.log(event);
  }

  clickHandler(event: MouseEvent) {
    console.log(event);
    console.log(this.firstName);
  }

  mouseOverHandler(event: MouseEvent) {
    console.log(event);
  }
}
