// IMPORTS
import { LoremIpsum } from "lorem-ipsum";
import { getRandomInteger, getRandomStringArray } from "./helper-funcs";


// SOME HELPERS OBJECTS
const tags = ['Aesenum', 'Gevoida', 'Poracum', 'Esoveicum', 'Inventore', 'Neque', 'Adipisicing', 'Nobis'];

const loremGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});



// PROJECT EXPORTS
export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  taskIds: number[];
};

export const Projects: IProject[] = [
  {
    id: 0,
    title: 'Project Title 1',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 2',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 3',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 4',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 5',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 6',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 7',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 8',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 9',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 10',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 11',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 12',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 13',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 14',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 15',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 16',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 17',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 18',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 19',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 20',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 21',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 22',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 23',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 24',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 25',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 26',
    description: loremGenerator.generateSentences(2),
    tags: getRandomStringArray(tags),
    taskIds: []
  }
];


// TASK EXPORTS
export enum TASK_STATUS {
  NOT_STARTED = 'pi-stop',
  IN_PROGRESS = 'pi-hourglass',
  FINISHED = 'pi-check-square'
};

export interface ITask {
  id: number,
  title: string,
  description: string,
  time_tracked_in_minutes: number, // minutes
  status: TASK_STATUS,
  projectId: number,

  getTimeString(): string
};

export function getTasks(): ITask[] {
  let tasks: ITask[] = [];

  for (let i = 0; i < 10 + getRandomInteger(10); i++) {
    tasks.push({
      id: i + 1,
      title: `Task Title ${i + 1}`,
      description: loremGenerator.generateSentences(4),
      time_tracked_in_minutes: (getRandomInteger(4, true) * 60) + ((getRandomInteger(4, true) * 15)),
      status: Object.values(TASK_STATUS)[getRandomInteger(3)],
      projectId: Projects[getRandomInteger(Projects.length)].id,

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
};



