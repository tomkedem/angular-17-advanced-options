import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { PersonsComponent } from './persons/persons.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonsComponent,ReactiveFormValidationComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'angular-17-advanced-options';

}

