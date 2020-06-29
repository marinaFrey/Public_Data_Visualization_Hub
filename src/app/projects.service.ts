import { Injectable } from '@angular/core';
import { Observable, of, Subject, Observer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Project } from './project';
import { PROJECTS } from './projectData';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[];
  private projectsSubject = new Subject();
  constructor() { }

  getProjects(): Observable<Project[]>
  {
    this.projects = PROJECTS;
    const projects$ = of(PROJECTS);
    return projects$;
  }

  getProject(id: number): Observable<Project>
  {
    const projectObs$ = this.getProjects().pipe(switchMap(projects => this.getProjectById(projects, id)));
    return projectObs$;
  }

  getProjectById(projects: Array<Project>, id: number): Observable<Project>
  {
    let projectSelected: Project;
    projects.forEach(project =>
    {
      if (project.id === id)
      {
        projectSelected = project;
      }
    });
    console.log(projectSelected);
    return of(projectSelected);
  }

  createListOfTags(): Array<string>
  {
    const list = [];
    this.projects.forEach(project => {
      project.tags.forEach( tag => {
        if (!list.includes(tag))
        {
          list.push(tag);
        }
      });
    });
    return list;
  }

  filterProjectsByTag(tag: string): Array<Project[]>
  {
    const list = [];
    this.projects.forEach(project =>
    {
      if (project.tags.includes(tag))
      {
        list.push(project);
      }
    });
    return list;
  }
}
