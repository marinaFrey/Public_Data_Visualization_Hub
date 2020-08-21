import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Publication } from '../publication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications$: Observable<Publication[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.getPublications();
  }

  getPublications()
  {
    this.publications$ = this.projectsService.getPublications();
  }

}
