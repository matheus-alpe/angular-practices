import { Component } from '@angular/core';

@Component({
  selector: 'component-card',
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <ng-content select="[header]">header placeholder</ng-content>
      </div>

      <div class="card-content">
        <ng-content>default placeholder</ng-content>
      </div>

      <div class="card-footer">
        <ng-content select="[footer]">footer placeholder</ng-content>
      </div>
    </div>
  `,
  styleUrl: './card.css',
})
export class Card {}
