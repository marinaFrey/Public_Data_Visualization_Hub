import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../project';
import { MEMBERS } from '../membersData';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  getMembers(): Observable<Member[]>
  {
    return of(MEMBERS);
  }

  getMembersByCategory(category: string): Observable<any>
  {
    return of(this.listMembersByCategory(MEMBERS, category));
  }

  listMembersByCategory(members: Member[], category: string)
  {
    let associativeArray = [];
    for (let i = 0; i < members.length; i++)
    {
      if (!associativeArray[members[i][category]])
      {
        associativeArray[members[i][category]] = [];
      }
      associativeArray[members[i][category]].push(members[i]);
    }
    let list = [];
    for (let key in associativeArray)
    {
      list.push({ label: key, members: associativeArray[key] });
    }
    return list;
  }
}
