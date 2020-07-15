import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  @Input() public projects: Project[] = [];
  @Input() public projectId: string;

  constructor() {}

  ngOnInit(): void {}
}
