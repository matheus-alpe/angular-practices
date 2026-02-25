import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  favoriteFramework = '';

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  showFavoriteFramework() {
    alert(`Your favorite framework is: ${this.favoriteFramework}`);
  }

  handleSubmit() {
    alert(`Name: ${this.profileForm.value.name}, Email: ${this.profileForm.value.email}`);
    this.profileForm.reset();
  }
}
