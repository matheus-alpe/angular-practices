import {
  AfterContentChecked,
  AfterContentInit,
  afterEveryRender,
  afterNextRender,
  afterRenderEffect,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  count = signal(0);

  constructor() {
    afterEveryRender(() => {
      console.log('afterEveryRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });

    afterRenderEffect(() => {
      console.log('afterRenderEffect');
    });
  }

  increment() {
    this.count.update((prev) => prev + 1);
    console.log('incremented count:', this.count());
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges<LifeCycle>) {
    if (changes.count) {
      console.log(`Previous: ${changes.count.previousValue}`);
      console.log(`Current: ${changes.count.currentValue}`);
      console.log(`Is first ${changes.count.firstChange}`);
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
