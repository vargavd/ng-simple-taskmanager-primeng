export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  taskIds: number[];
}

const tags = ['aesenum', 'gevoida', 'poracum', 'esoveicum'];

export function getProjects(): IProject[] {
  const getTags = () => {
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

  return [
    {
      id: 0,
      title: 'Project Title 1',
      description: "Lorem ipsum dolor sit amet ut eum movet putent persequeri",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 2',
      description: "In quo idque saepe', et pro meliu Utamur Cum sint sale a",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 3',
      description: "No sed lobortis perpetua tractato Ex eam nominati philosophia",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 4',
      description: "Meis vidit omnis ei si Habemus appareat consequat ut se",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 5',
      description: "Te sed lorem hendrerit Posse oratio quo t",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 6',
      description: "Ei ipsum primis quo At vix graeco imperdiet temporibu",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 7',
      description: "At eam augue corrumpi Cum in discere molestiae",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 8',
      description: "Vim dolor mucius scaevola ea Quo dolorum interesset c",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 9',
      description: "Sed at case nusquam singuli Vim ei accusata referrentur",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 10',
      description: "Mea id volumus ocurreret Nam ex invenire deterruisset",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 11',
      description: "Ne has prima postulant salutand Augue vivendo volumus vis in",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 12',
      description: "Ponderum consequat intellegam eu eam His in scaevola platonem dissentiet",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 13',
      description: "Falli simul vulputate usu eu ex tation audire posidonium mel",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 14',
      description: "Per in deserunt percipitur Ei conceptam reformidans pro",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 15',
      description: "Per eu copiosae patrioque interesset An utroque facilisis philosophia si",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 16',
      description: "Agam oratio commodo eu vis At nonumes offendit sadipscing eam",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 17',
      description: "Augue impetus eum ex Oblique officiis et eos",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 18',
      description: "Id case petentium voluptatum per Vel perfecto omittantur cu",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 19',
      description: "Eos erroribus cotidieque at In vel purto paulo facilisi",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 20',
      description: "Est suas agam ei Torquatos complectitur eu per",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 21',
      description: "Saperet invidunt no iu At autem solet suscipit eam",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 22',
      description: "Ei prima abhorreant pro Dicam possit vel id",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 23',
      description: "Qquas ridens accusata sea ad In usu fastidii percipit tincidunt",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 24',
      description: "Ad vel alterum apeirian complectitur Usu id accusata postulant",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 25',
      description: "Ea has iriure legimus Quo in pertinax conclusionemque",
      tags: getTags(),
      taskIds: []
    },
    {
      id: 0,
      title: 'Project Title 26',
      description: "Duis debitis his no Eum ei quod oportere Ei mel justo malorum definitiones",
      tags: getTags(),
      taskIds: []
    }
  ];
};
