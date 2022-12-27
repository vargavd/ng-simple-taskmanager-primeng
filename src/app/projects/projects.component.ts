// angular imports
import { Component, OnInit } from '@angular/core';
import { IProject } from '../sample/projects';

// services
import { ProjectService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor(private projectsService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

}
