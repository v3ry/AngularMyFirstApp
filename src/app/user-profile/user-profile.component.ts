import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'bla bla blo',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    hide: true
  };

  constructor() { }

  ngOnInit(): void {
  }
  hideMe(): void  {
    alert("Bonjour !");
  }

}
