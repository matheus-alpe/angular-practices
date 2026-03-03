import {
  Component,
  contentChild,
  effect,
  ElementRef,
  signal,
  viewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
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
  logo = viewChild(Logo);
  texts = viewChildren(Text);
  paragraph = viewChild<ElementRef<HTMLParagraphElement>>('paragraph');

  volume = signal(0);

  readonly volumeEffect = effect(() => {
    console.log('Logo component value:', this.logo());
    this.texts().forEach((text) => {
      console.log('Text component value:', text.value());
    });
    console.log('Volume is', this.volume(), 'now');
    console.log('Paragraph element:', this.paragraph()?.nativeElement.textContent);

    setTimeout(() => {
      const el = this.paragraph()?.nativeElement;
      if (!el) return;
      el.textContent = `Volume is ${this.volume()} now`;
      el.style.backgroundColor = 'yellow';

      setTimeout(() => {
        el.style.backgroundColor = '';
      }, 500);
    }, 2000);
  });

  handleVolumeChange(newVolume: number) {
    console.log('Volume changed to', newVolume);
  }
}
