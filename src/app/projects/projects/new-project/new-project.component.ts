import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../core/services/projects.service';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projects: Project[] = [];
  public formHidden = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.projects;
  }

  public saveProject(project: Project) {
    this.projectsService.saveProject(project);
  }
}
