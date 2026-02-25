import { Component, inject } from '@angular/core';
import { CarService } from '../services/car-service';

@Component({
  selector: 'app-dependency',
  imports: [],
  templateUrl: './dependency.html',
  styleUrl: './dependency.css',
})
export class Dependency {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
