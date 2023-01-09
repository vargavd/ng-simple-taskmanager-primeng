// ANGULAR IMPORTS
import { Component, Input, OnInit } from '@angular/core';

// DATA IMPORTS
import { Task } from 'src/app/helper/data';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
