import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../services/publications.service';
import { Publication } from '../publication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  selectedTag: string;
  publications$: Observable<Publication[]>;
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void
  {
    this.getPublications();
  }

  getPublications()
  {
    this.publications$ = this.publicationsService.getPublications();
  }

  filterPublicationsBySelectedTag(publications: Publication[])
  {
    return this.publicationsService.filterPublicationsByTag(publications, this.selectedTag);
  }

  getListOfTags(publications: Publication[])
  {
    return this.publicationsService.createListOfTags(publications);
  }

  onTagSelected(tag: string)
  {
    this.selectedTag = tag;
    this.getPublications();
  }
}
