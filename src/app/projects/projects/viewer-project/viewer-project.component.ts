import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects.service';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: Project[] = [];
  public project: Project;
  public formHidden = false;
  public projectId = '';

  constructor(private projectsService: ProjectsService, activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.projects = this.projectsService.projects;
  }

  public findProject(name: string) {
    this.projects = this.projects.filter(p => p.name.includes(name) === true);
  }
}
