import {
  afterEveryRender,
  afterNextRender,
  afterRenderEffect,
  Component,
  effect,
  inject,
} from '@angular/core';
import { UserService } from '../services/user-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [JsonPipe],
  templateUrl: './resource.html',
  styleUrl: './resource.css',
})
export class Resource {
  userService = inject(UserService);

  constructor() {
    effect((onCleanup) => {
      const user = this.userService.userResource.value();
      console.log('User data:', user);

      const timer = setTimeout(() => {
        console.log('Timer completed', user);
      }, 5000);

      onCleanup(() => {
        console.log('Cleaning up effect');
        clearTimeout(timer);
      });
    });

    afterEveryRender(() => {
      console.log('Component rendered');
    });

    afterNextRender(() => {
      console.log('Next render completed');
    });

    afterRenderEffect(() => {
      console.log('After render effect executed');
    });
  }
}
