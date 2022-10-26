import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  dataChange: EventEmitter<string> = new EventEmitter();
  myskill: Skill[] = [{name:'toto',logo:'tata',site: 'titi'}];
  name = this.myskill[0].name;
  logo = this.myskill[0].logo;
  site = this.myskill[0].site;
  developer: Developer[] = [{firstName: 'John', lastName: 'Toto', age: 36,gender: 'Male',bio:"blablabla",skills: this.myskill}];

  constructor() { }
test = "";
  ngOnInit(): void {
  }
  onDataChange(event: string): void {
    console.log(event);
    this.test = event;
    // 'Chaîne de caractères envoyée au parent'
  }
}
