// ANGULAR IMPORTS
import { Injectable } from "@angular/core";

// DATA IMPORTS
import { ITask, getTasks } from "../helper/data";

@Injectable()
export class TasksService {
  tasks: ITask[];

  constructor() {
    this.tasks = getTasks();
  }
}