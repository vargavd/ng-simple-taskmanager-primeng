import { Injectable } from "@angular/core";

// DATA IMPORTS
import { TASK_STATUS, Task, Project, tags, loremGenerator } from "./helper/data";

// HELPER FUNCS
import { getRandomInteger, getRandomElementsFromList } from "./helper/helper-funcs";


@Injectable()
export class DataService {
  projects: Project[] = [];

  // private functions
  private generateTasks(projectId: number, minimum: number = 3, maximum: number = 6):Task[] {
    const tasks:Task[] = [];

    for (let i = 0; i < 10 + getRandomInteger(10); i++) {
      tasks.push(new Task(
        `project_${projectId}_task_${i}`, // id
        `Task Title ${i} (Project ${projectId})`, // title
        loremGenerator.generateSentences(4), // description
        (getRandomInteger(4, true) * 60) + ((getRandomInteger(4, true) * 15)), // time_tracked_in_minutes
        Object.values(TASK_STATUS)[getRandomInteger(3)], // status
        getRandomElementsFromList(tags) // tags
      ));
    }
  
    return tasks;
  }

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.projects.push(new Project (
        index, // id
        `Project Title ${index}`, // title
        loremGenerator.generateSentences(15), // description
        getRandomElementsFromList(tags), // tags
        this.generateTasks(index), // tasks
      ));
    }
  }
}