import { Component, OnInit } from '@angular/core';
import { Member } from '../project';
import { Observable } from 'rxjs';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members$: Observable<Member[]>;
  constructor(private membersService: MembersService) { }

  ngOnInit(): void
  {
    this.getMembers();
  }

  getMembers()
  {
    this.members$ = this.membersService.getMembersByCategory('studentType');
  }
}
