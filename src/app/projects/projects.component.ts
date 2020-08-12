// core
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // Properties
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
}
