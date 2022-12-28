import { Injectable } from "@angular/core";

import { Projects, IProject } from "../helper/data";

@Injectable()
export class ProjectService {
  projects: IProject[];

  constructor() {
    this.projects = Projects;
  }

  getProjects(numberOfProjects?: number) {
    if (numberOfProjects != null) {
      return this.projects.filter((_, i) => i < numberOfProjects);
    }

    return this.projects;
  }
}
