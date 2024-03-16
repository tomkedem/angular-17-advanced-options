import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  constructor() { }
  
  errorMessages: { [key: string]: string } = {
    'required': 'שדה זה הינו חובה',
    'email': 'נא להזין כתובת אימייל תקינה',
    'minlength': 'מספר התווים המינימלי חייב להיות:',
    'customMaxLength': 'מספר התווים המקסימלי חייב להיות:',    
  };

  getErrorMessage(code: string): string {
    return this.errorMessages[code];
  }
}
