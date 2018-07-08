import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng6-update-on',
  templateUrl: './update-on.component.html',
  styleUrls: ['./update-on.component.scss']
})
export class UpdateOnComponent implements OnInit {

  public form: FormGroup;
  public submittedForm: any = {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'field_a': new FormControl('field_a', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
        updateOn: 'change'
      }),
      'field_b': new FormControl('field_b', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
        updateOn: 'blur'
      }),
      'field_c': new FormControl('field_c', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
        updateOn: 'submit'
      }),
    });
  }

  getFieldErrors(fieldName: string): string[] {
    const errors: string[] = [];
    if (this.form.get(fieldName).hasError('required')) {
      errors.push('Field is required');
    }
    if (this.form.get(fieldName).hasError('minlength')) {
      errors.push('Field is shorten than 5 characters');
    }
    if (this.form.get(fieldName).hasError('maxlength')) {
      errors.push('Field is longer than 10 characters');
    }
    return errors;
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedForm = this.form.getRawValue();
    } else {
      this.submittedForm = {};
    }
  }
}
