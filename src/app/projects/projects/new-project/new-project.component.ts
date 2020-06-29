import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projects: Project[] = [];
  public numProjects: number;
  public project: Project;
  public formHidden = false;

  constructor() {}

  ngOnInit(): void {
    environment.projects.forEach(e => {
      const currentProject: Project = e;
      this.projects.push(currentProject);
    });

    this.numProjects = this.projects.length;
  }

  public saveProject(id: number, name: string) {
    const currentProject = { id, name };
    this.projects.push(currentProject);
  }
}
