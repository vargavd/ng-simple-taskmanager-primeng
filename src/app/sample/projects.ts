// IMPORTS
import { LoremIpsum } from "lorem-ipsum";


// SOME HELPERS
const tags = ['Aesenum', 'Gevoida', 'Poracum', 'Esoveicum', 'Inventore', 'Neque', 'Adipisicing', 'Nobis'];
const getRandomTagArray = () => {
  const clonedTags = tags.slice()

  const getTag = () => {
    let i = Math.floor(Math.random() * clonedTags.length);
    return clonedTags.splice(i, 1)[0];
  };

  const returnTags: string[] = [getTag()];

  if (Math.random() < 0.5) {
    returnTags.push(getTag());

    if (Math.random() < 0.5) {
      returnTags.push(getTag());

      if (Math.random() < 0.5) {
        returnTags.push(getTag());
      }
    }
  }

  return returnTags;
};
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


// EXPORTS
export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  taskIds: number[];
}

export const Projects: IProject[] = [
  {
    id: 0,
    title: 'Project Title 1',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 2',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 3',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 4',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 5',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 6',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 7',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 8',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 9',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 10',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 11',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 12',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 13',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 14',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 15',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 16',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 17',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 18',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 19',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 20',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 21',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 22',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 23',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 24',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 25',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  },
  {
    id: 0,
    title: 'Project Title 26',
    description: loremGenerator.generateSentences(2),
    tags: getRandomTagArray(),
    taskIds: []
  }
];
