import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  model: Order = new Order("" , 0, new Date(), "");
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }
}
export class Order {
  constructor(
      public title: string,
      public quantity: number,
      public date: Date,
      public contact: string
  ) {}
}