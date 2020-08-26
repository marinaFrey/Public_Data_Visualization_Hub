import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../member';
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

  listCurrentStudents(members: Member[])
  {
    let list = [];
    for (let i = 0; i < members.length; i++)
    {
      if (members[i]['degree'] != 'Professor' && !members[i]['graduationDate'])
      {
        list.push(members[i]);
      }
    }
    return list;
  }

  listFormerStudents(members: Member[])
  {
    let list = [];
    for (let i = 0; i < members.length; i++)
    {
      if (members[i]['degree'] != 'Professor' && members[i]['graduationDate'])
      {
        list.push(members[i]);
      }
    }
    return list;
  }

  listMembersFromCategory(members: Member[], category: string, selected: string)
  {
    let list = [];
    for (let i = 0; i < members.length; i++)
    {
      if(members[i][category] === selected)
      {
        list.push(members[i]);
      }
    }
    return list;
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
