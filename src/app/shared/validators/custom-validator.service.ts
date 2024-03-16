import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root' // קובע שהשירות יהיה זמין בכל האפליקציה
})
export class CustomValidatorService {

  constructor() { }

  // פונקציה ליצירת וולידטור אישי 
  // שבודק אם האורך של הערך בשדה לא עובר מספר מקסימלי מסוים
  customMaxLengthValidator(maxLength: number): ValidatorFn {
    // הפונקציה מחזירה פונקציה שבודקת את התקינות של השדה
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        // אם השדה ריק, נחשיב אותו כתקין.
        //  אם רוצים שהשדה יהיה חובה,
        //  יש להשתמש בוולידטור נפרד לבדיקת שדה חובה
        return null;
      }
      // בודק אם אורך הערך קטן או שווה למקסימום המותר
      const isValid = control.value.length <= maxLength; 
      // אם הערך תקין (לא עובר את האורך המקסימלי), מחזירים null. 
      // אחרת, מחזירים אובייקט שגיאה עם פרטים על האורך הנדרש והאורך הנוכחי
      return isValid ? null : { 'customMaxLength': { requiredLength: maxLength, actualLength: control.value.length } };
    };
  }
}