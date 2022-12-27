import { Injectable, OnInit } from "@angular/core";

import { Projects, IProject } from "../sample/projects";

@Injectable()
export class ProjectService {
  projects: IProject[];

  constructor() {
    this.projects = [...Projects];
  }

  getProjects(numberOfProjects?: number) {
    if (numberOfProjects != null) {
      return this.projects.slice(0, numberOfProjects);
    }

    return this.projects.slice();
  }
}
