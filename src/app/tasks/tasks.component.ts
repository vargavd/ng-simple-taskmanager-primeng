import { Component, OnInit } from '@angular/core';
import { ITask } from '../helper/data';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: ITask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

}
