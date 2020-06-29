import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-filters',
  templateUrl: './project-filters.component.html',
  styleUrls: ['./project-filters.component.css']
})
export class ProjectFiltersComponent implements OnInit {

  tags: string[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.tags = this.projectsService.createListOfTags();
  }

  showAll()
  {

  }

  filterByTag(tag: string)
  {
    const projectsFiltered = this.projectsService.filterProjectsByTag(tag);
    console.log(projectsFiltered);
  }

}
