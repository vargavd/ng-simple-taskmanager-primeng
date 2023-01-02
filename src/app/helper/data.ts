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

export interface ITask {
  id: string,
  title: string,
  description: string,
  time_tracked_in_minutes: number, // minutes
  status: TASK_STATUS,
  tags: string[],

  getTimeString(): string
};


// PROJECT EXPORTS
export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tasks: ITask[];
};


