import { computed, Injectable, linkedSignal, Resource, resource, signal } from '@angular/core';
import { User } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId = signal<string>('1'); // Initialize with an empty string or a default value

  userResource = resource({
    params: () => ({ id: this.userId() }), // Use the signal value as a parameter

    loader: ({ params, abortSignal }): Promise<User> =>
      fetch(`https://dummyjson.com/users/${params.id}`, { signal: abortSignal }).then(
        (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        },
      ),
  });

  firstName = computed(() => {
    if (this.userResource.hasValue()) {
      return this.userResource.value().firstName;
    }

    return undefined;
  });
}
