import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-magic-oven',
  templateUrl: './app-magic-oven.component.html',
  styleUrls: ['./app-magic-oven.component.css']
})
export class AppMagicOvenComponent implements OnInit {
  @Input()
  startCooking: boolean = false;
  
  @Input()
  numberOfCookies: number = 0;
  
  @Input()
  flour: number = 0;
  
  @Input()
  salt: number = 0;
  
  @Input()
  sugar: number = 0;
  
  @Input()
  egg: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
