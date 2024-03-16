import { Component  } from '@angular/core';
import { AbstractControl, FormBuilder, 
        ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesService } from '../shared/validators/error-messages.service';
import { CustomValidatorService } from '../shared/validators/custom-validator.service';
import { GlobalErrorHandler } from '../shared/Errors/global-error-handler';
import { error } from 'console';


@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {

  constructor(private fb: FormBuilder, 
              public errorMessagesService: ErrorMessagesService,
              private customValidatorService: CustomValidatorService,
              private globalErrorHandler: GlobalErrorHandler
              ) {} // Inject ErrorHandler) 
  maxPasswordLenght: number = 8
  minPasswordLenght: number = 3
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(this.minPasswordLenght),
                 this.customValidatorService.customMaxLengthValidator(this.maxPasswordLenght)]]  
  });
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  onSubmit(): void {        
    if (this.registerForm.invalid) {     
      this.globalErrorHandler.handleError('FormValidationError');
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));    
  }
}
