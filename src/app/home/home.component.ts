import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';
import { Member } from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members$: Observable<Member[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers()
  {
    this.members$ = this.projectsService.getMembersByCategory('studentType');
  }
}
