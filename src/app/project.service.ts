// Modules
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Classes
import { PROJECTS } from './mock-projects';
import { Project } from './project';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Properties
  constructor(private http: HttpClient) {}

  // Todo: Get project from observable?
  // getProjects(): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.Project)
  // }
}
