import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  myskill: Skill[] = [{name:'toto',logo:'tata',site: 'titi'}];
  @Input()
  name = this.myskill[0].name;
  @Input()
  logo = this.myskill[0].logo;
  @Input()
  site = this.myskill[0].site;
  developer: Developer[] = [{firstName: 'John', lastName: 'Toto', age: 36,gender: 'Male',bio:"blablabla",skills: this.myskill}];

  constructor() { }

  ngOnInit(): void {
  }

}
