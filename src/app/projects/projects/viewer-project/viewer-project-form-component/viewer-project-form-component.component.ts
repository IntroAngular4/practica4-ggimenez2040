import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer-project-form-component',
  templateUrl: './viewer-project-form-component.component.html',
  styleUrls: ['./viewer-project-form-component.component.css']
})
export class ViewerProjectFormComponentComponent implements OnInit {
  @Input() public projectId: string;

  constructor() {}

  ngOnInit(): void {}
}
