// 3rd PARTY IMPORTS
import { LoremIpsum } from "lorem-ipsum";

// SOME HELPERS OBJECTS
export const tags:string[] = ['Aesenum', 'Gevoida', 'Poracum', 'Esoveicum', 'Inventore', 'Neque', 'Adipisicing', 'Nobis'];

export const loremGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});

// TASK EXPORTS
export enum TASK_STATUS {
  NOT_STARTED = 'pi-stop',
  IN_PROGRESS = 'pi-hourglass',
  FINISHED = 'pi-check-square'
};

export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public time_tracked_in_minutes: number, // minutes
    public status: TASK_STATUS,
    public tags: string[]
  ) {}

  getTimeString() {
    const hours = Math.floor(this.time_tracked_in_minutes / 60);
    const minutes = this.time_tracked_in_minutes % 60;

    // padding 0s
    const minutes_string = minutes > 9 ? minutes.toString() : `0${minutes}`;

    return `${hours}h ${minutes_string}m`;
  }
};


// PROJECT EXPORTS
export class Project {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public tags: string[],
    public tasks: Task[]
  ) {}
  

  getExcerpt():string {
    return this.description.length > 100 ? 
      (this.description.slice(0, 100).trim() + '...') : 
      this.description;
  }

  getNotStartedTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.NOT_STARTED);
  }
  getInProgressTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.IN_PROGRESS);
  }
  getFinishedTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.FINISHED);
  }

  getTimeTracked():string {
    const allTimeTrackedInMinutes = this.tasks
      .filter(task => task.status !== TASK_STATUS.NOT_STARTED)
      .map(task => task.time_tracked_in_minutes)
      .reduce((sumTimeTracked:number, currentTimeTracked:number) => sumTimeTracked + currentTimeTracked, 0);

    return Math.floor(allTimeTrackedInMinutes / 60) + 'h ' + (allTimeTrackedInMinutes % 60) + 'm';
  }
};


