import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: Project[] = [];
  public numProjects: number;
  public project: Project;
  public formHidden = false;
  public projectId = '';

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    environment.projects.forEach(e => {
      const currentProject: Project = e;
      this.projects.push(currentProject);
    });

    this.numProjects = this.projects.length;
  }
}
