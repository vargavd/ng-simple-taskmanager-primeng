import { Injectable, OnInit } from "@angular/core";

import { getProjects, IProject } from "../sample/projects";

@Injectable()
export class ProjectService {
  projects: IProject[];

  constructor() {
    this.projects = getProjects();
  }

  getProjects(numberOfProjects?: number) {
    if (numberOfProjects != null) {
      return this.projects.slice(0, numberOfProjects);
    }

    return this.projects.slice();
  }
}
