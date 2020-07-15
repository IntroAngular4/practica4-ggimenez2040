import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-projects-list-component',
  templateUrl: './projects-list-component.component.html',
  styleUrls: ['./projects-list-component.component.css']
})
export class ProjectsListComponentComponent implements OnInit {
  @Input() public projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {}
}
