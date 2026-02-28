import { Component, inject } from '@angular/core';
import { CounterState } from '../store/counter/counter-state';
import { ShippingState } from '../store/shipping/shipping-state';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  counterState = inject(CounterState);
  shippingState = inject(ShippingState);

  count = this.counterState.count; // can read but not modify

  increment() {
    this.counterState.increment();
  }

  changeShippingOption(event: Event) {
    const index = (event.target as HTMLSelectElement).selectedIndex;
    this.shippingState.changeShipping(index);
  }
}
