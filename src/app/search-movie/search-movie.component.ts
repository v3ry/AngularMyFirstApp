import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { minDateValidator } from '../minDateValidator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  orderForm = this.fb.group({
    ident: ['', Validators.required],
    title: ['', Validators.required],
    quantity: this.fb.array([]),
    years: [0, Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    // FormArray control
    fiche: this.fb.array([])
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
  onSubmit() {
    // Get form value as JSON object
    console.log('oderForm submitted : ', this.orderForm.value);
  }

  addFiche() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      complete: ['', [Validators.required]],
      short: ['', Validators.required]
    });
    // convert abstract control to FormArray
    const fiches = this.orderForm.get('fiche') as FormArray;
    // add new FormGroup to control payments
    fiches.push(paymentForm);
  }
}
