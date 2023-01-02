import { Injectable } from "@angular/core";

// DATA IMPORTS
import { TASK_STATUS, ITask, IProject, tags, loremGenerator } from "./helper/data";

// HELPER FUNCS
import { getRandomInteger, getRandomElementsFromList } from "./helper/helper-funcs";


@Injectable()
export class DataService {
  projects: IProject[] = [];

  // private functions
  private generateTasks(projectId: number, minimum: number = 3, maximum: number = 6):ITask[] {
    const tasks:ITask[] = [];

    for (let i = 0; i < 10 + getRandomInteger(10); i++) {
      tasks.push({
        id: `project_${projectId}_task_${i}`,
        title: `Task Title ${i} (Project ${projectId})`,
        description: loremGenerator.generateSentences(4),
        time_tracked_in_minutes: (getRandomInteger(4, true) * 60) + ((getRandomInteger(4, true) * 15)),
        status: Object.values(TASK_STATUS)[getRandomInteger(3)],
        tags: getRandomElementsFromList(tags),
  
        getTimeString() {
          const hours = Math.floor(this.time_tracked_in_minutes / 60);
          const minutes = this.time_tracked_in_minutes % 60;
  
          // padding 0s
          const minutes_string = minutes > 9 ? minutes.toString() : `0${minutes}`;
  
          return `${hours}h ${minutes_string}m`;
        }
      });
    }
  
    return tasks;
  }

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.projects.push({
        id: index,
        title: `Project Title ${index}`,
        description: loremGenerator.generateSentences(15),
        tags: getRandomElementsFromList(tags),
        tasks: this.generateTasks(index)
      });
    }
  }
}