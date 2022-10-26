import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { minDateValidator } from '../minDateValidator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  // Declare all controls with validation rules
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    // FormArray control
    payments: this.fb.array([{date:'2022',amount:2}])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }

  /**
   * Add new payment line to form
   */
  addPayments() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator]],
      amount: ['', Validators.required]
    });
    // convert abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control payments
    payments.push(paymentForm);
  }

  /**
   * Getter for control 'payments'
   */
  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }
  get date() {
    return this.orderForm.get('date') as FormControl;
    }
  
  /**
   * Trigger on form submit
   */
  onSubmit() {
    // Get form value as JSON object
    console.log('oderForm submitted : ', this.orderForm.value);
  }
}