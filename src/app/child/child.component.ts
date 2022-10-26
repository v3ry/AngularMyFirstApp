import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;

  isCooked: boolean = false;
  cookiesCooked: number = 0;
  // On initialise notre propriété avec une valeur par défaut
// On décore notre propriété avec @Input()
 @Input() myInputData: string = "" 
 
  constructor() { }

  ngOnInit(): void {
  }
  startCooking() {
    this.isCooked = true;
  }

  onGetCookies(event: number): void {
    this.cookiesCooked += event;
    console.log(this.cookiesCooked += event);
  }

}
