import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // tslint:disable-next-line: variable-name
  private _projects: Project[] = [];

  constructor() {
    environment.projects.forEach(e => {
      const currentProject: Project = e;
      this._projects.push(currentProject);
    });
  }

  public get projects(): Project[] {
    return this._projects;
  }

  public set projects(value: Project[]) {
    this._projects = value;
  }

  public saveProject(project: Project) {
    this._projects.push(project);
  }
}
