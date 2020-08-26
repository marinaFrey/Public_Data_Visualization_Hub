import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PUBLICATIONS } from '../publicationsData';
import { Publication } from '../publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor() { }

  getPublications(selectedTag?: string): Observable<Publication[]>
  {
    if (selectedTag)
    {
      return of(this.filterPublicationsByTag(PUBLICATIONS, selectedTag));
    }
    else
    {
      return of(PUBLICATIONS);
    }

  }

  createListOfTags(publications: Publication[]): Array<string>
  {
    const list = [];
    publications.forEach(publication =>
    {
      publication.tags.forEach(tag =>
      {
        if (!list.includes(tag))
        {
          list.push(tag);
        }
      });
    });
    return list;
  }

  filterPublicationsByTag(publications: Publication[], tag: string)
  {
    console.log(tag)
    if(tag === 'All' || !tag)
    {
      return publications;
    }
    const list = [];
    publications.forEach(publication =>
    {
      if (publication.tags.includes(tag))
      {
        list.push(publication);
      }
    });
    return list;
  }
}
