import { Component, effect, signal, ViewEncapsulation } from '@angular/core';
import { Logo } from './components/logo/logo';
import { Text } from './components/text/text';
import { Range } from './components/range/range';
import { Card } from './components/card/card';

@Component({
  selector: 'app-components',
  imports: [Logo, Text, Range, Card],
  templateUrl: './components.html',
  styleUrl: './components.css',
  encapsulation: ViewEncapsulation.None,
})
export class Components {
  text = signal('components works!');

  volume = signal(0);

  readonly volumeEffect = effect(() => {
    console.log('Volume is', this.volume(), 'now');
  });

  handleVolumeChange(newVolume: number) {
    console.log('Volume changed to', newVolume);
  }
}
