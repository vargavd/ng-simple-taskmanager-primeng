// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// CUSTOM SERVICE IMPORTS
import { DataService } from 'src/app/data.service';

// DATA IMPORTS
import { Task, TASK_STATUS } from 'src/app/helper/data';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  // data model
  editedTask: Task;
  taskFromService: Task;


  // helper - for displaying the enum options in the dropdown
  taskStatuses = Object.values(TASK_STATUS);

  constructor(private dataService:DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['projectId'];
    const taskId = +this.route.snapshot.params['taskId'];

    let project = this.dataService.projects.find(p => p.id === projectId);

    this.taskFromService = project.tasks.find(task => task.id === taskId);

    this.editedTask = new Task(
      this.taskFromService.id,
      this.taskFromService.projectId,
      this.taskFromService.title,
      this.taskFromService.description,
      this.taskFromService.time_tracked_in_minutes,
      this.taskFromService.status,
      this.taskFromService.tags
    );
    // this.task = project.tasks[0];
  }

  // DOM events
  onSave() {
    this.taskFromService.title = this.editedTask.title;
    this.taskFromService.description = this.editedTask.description;
    this.taskFromService.time_tracked_in_minutes = this.editedTask.time_tracked_in_minutes;
    this.taskFromService.status = this.editedTask.status;
    this.taskFromService.tags = this.editedTask.tags;
  }
}
