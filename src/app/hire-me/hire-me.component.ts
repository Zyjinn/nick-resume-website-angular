import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mock-skills';
import { Skill } from '../skill';
@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css'],
})
export class HireMeComponent implements OnInit {
  // Properties
  skills = SKILLS;
  constructor() {}

  ngOnInit(): void {}
}
