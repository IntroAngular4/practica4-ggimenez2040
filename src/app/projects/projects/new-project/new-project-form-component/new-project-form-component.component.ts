import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styleUrls: ['./new-project-form-component.component.css']
})
export class NewProjectFormComponentComponent implements OnInit {
  @Output() public createProject = new EventEmitter<Project>();

  constructor() {}

  ngOnInit(): void {}

  public saveProject(id: number, name: string) {
    const currentProject: Project = { id, name };
    this.createProject.emit(currentProject);
  }
}
