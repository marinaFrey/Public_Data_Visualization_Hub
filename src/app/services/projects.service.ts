import { Injectable } from '@angular/core';
import { Observable, of, Subject, Observer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Project, Member } from '../project';
import { PROJECTS } from '../projectData';
import { MEMBERS } from '../membersData';
import { PUBLICATIONS } from '../publicationsData';
import { Publication } from '../publication';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(selectedTag: string): Observable<Project[]>
  {
    let projects$;
    if (selectedTag === '') {
      projects$ = of(PROJECTS);
    }
    else {
      projects$ = of(this.filterProjectsByTag(PROJECTS, selectedTag));
    }
    return projects$;
  }

  getProject(id: number): Observable<Project>
  {
    const projectObs$ = this.getProjects('').pipe(switchMap(projects => this.getProjectById(projects, id)));
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

  createListOfTags(projects): Array<string>
  {
    const list = [];
    projects.forEach(project => {
      project.tags.forEach( tag => {
        if (!list.includes(tag))
        {
          list.push(tag);
        }
      });
    });
    return list;
  }

  filterProjectsByTag(projects, tag: string)
  {
    const list = [];
    projects.forEach(project =>
    {
      if (project.tags.includes(tag))
      {
        list.push(project);
      }
    });
    return list;
  }
}
