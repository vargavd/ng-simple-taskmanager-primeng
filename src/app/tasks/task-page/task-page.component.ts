// ANGULAR IMPORTS
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// CUSTOM SERVICE IMPORTS
import { DataService } from 'src/app/data.service';

// DATA IMPORTS
import { tags, Task, TASK_STATUS } from 'src/app/helper/data';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  // data model
  editedTask: Task;
  taskFromService: Task;

  // local references
  @ViewChild('addHours') addHoursInput: ElementRef;
  @ViewChild('addMinutes') addMinutesInput: ElementRef;

  // helper DOM functions
  getHours() {
    return Math.floor(this.editedTask.minutesTracked / 60);
  }
  getMinutes() {
    return this.editedTask.minutesTracked % 60;
  }


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
      this.taskFromService.minutesTracked,
      this.taskFromService.status,
      this.taskFromService.tags
    );
    // this.task = project.tasks[0];
  }

  // DOM events
  onSave() {
    this.taskFromService.title = this.editedTask.title;
    this.taskFromService.description = this.editedTask.description;
    this.taskFromService.minutesTracked = this.editedTask.minutesTracked;
    this.taskFromService.status = this.editedTask.status;
    this.taskFromService.tags = this.editedTask.tags;
  }
  onAddHours() {
    const hoursToAdd = +this.addHoursInput.nativeElement.value;

    this.editedTask.minutesTracked += hoursToAdd*60;

    this.addHoursInput.nativeElement.value = '';
  }
  onAddMinutes() {
    const minutesToAdd = +this.addMinutesInput.nativeElement.value;

    this.editedTask.minutesTracked += minutesToAdd;

    this.addMinutesInput.nativeElement.value = '';
  }
  clickOnTag(tag:string) {
    const tagIndex = this.editedTask.tags.indexOf(tag);

    if (tagIndex === -1) {
      this.editedTask.tags.push(tag);
    } else {
      this.editedTask.tags = this.editedTask.tags.splice(tagIndex, 1)
    }

    console.log(this.editedTask.tags);
  }
  selectedTagsChanged(selectedTags: string[]) {
    this.editedTask.tags = selectedTags;
  }


  // FORM OPTIONS
  taskStatuses = Object.values(TASK_STATUS);
  availableTags = tags;
}
