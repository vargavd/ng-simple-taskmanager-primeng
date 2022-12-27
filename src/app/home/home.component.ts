import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects/projects.service';
import { IProject } from '../sample/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: IProject[];

  constructor(private projectsService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects(3);
  }

}
