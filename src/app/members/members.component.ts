import { Component, OnInit } from '@angular/core';
import { Member } from '../project';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members$: Observable<Member[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.getMembers();
  }

  getMembers()
  {
    this.members$ = this.projectsService.getMembersByCategory('studentType');
  }
}
