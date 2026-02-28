import { computed, effect, Injectable, signal, untracked } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterState {
  private readonly _count = signal(0);
  readonly showCount = signal(false);
  readonly count = this._count.asReadonly();
  readonly doubleCount = computed(() => this.count() * 2);

  readonly conditionalCount = computed(() => {
    console.count('Calculating conditionalCount');
    if (this.showCount()) {
      return `Count: ${this.count()}`;
    } else {
      return 'Count is hidden';
    }
  });

  readonly changeLog = effect(() => {
    console.log(
      `Count changed: ${this.count()}, but should not log when showCount changes: ${untracked(this.showCount)}`,
    );
  });

  increment() {
    this._count.update((v) => v + 1);
  }

  toggleConditionalCount() {
    this.showCount.update((v) => !v);
  }
}
