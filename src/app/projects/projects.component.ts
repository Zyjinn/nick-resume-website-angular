// core
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // Properties
  projects = PROJECTS;
  selectedProject: Project;

  constructor() {}

  ngOnInit(): void {}

  // TODO: create selector event to goto more info page

  // onSelect(project: Project): void {
  //   this.selectedProject = project;
  // }
}
