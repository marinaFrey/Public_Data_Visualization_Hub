import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<Project[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }

}
