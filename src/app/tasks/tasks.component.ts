// AMGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// DATA IMPORTS
import { Task } from '../helper/data';

// CUSTOM SERVICES
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.projects.forEach(project => {
      this.tasks.push(...project.tasks);
    });
  }
}
