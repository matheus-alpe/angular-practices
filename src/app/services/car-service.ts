import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Ferrari', 'Lamborghini', 'Porsche'];

  getCars() {
    return this.cars;
  }

  getCard(index: number) {
    return this.cars[index];
  }
}
