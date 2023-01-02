// angular imports
import { Component, OnInit } from '@angular/core';
import { IProject } from '../helper/data';

// services
import { DataService } from '../data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.projects;
  }

}
