import { Injectable, OnInit } from "@angular/core";

import { Projects, IProject } from "../sample/projects";

@Injectable()
export class ProjectService {
  projects: IProject[];

  constructor() {
    this.projects = [...Projects];
  }

  getProjects() {
    return this.projects.slice();
  }
}
