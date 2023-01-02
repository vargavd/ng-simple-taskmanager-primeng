import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/helper/data';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: IProject;

  constructor() { }

  ngOnInit(): void {
  }

  getExcerpt() {
    return this.project.description.length > 100 ? 
      (this.project.description.slice(0, 100).trim() + '...') : 
      this.project.description;
  }
}
