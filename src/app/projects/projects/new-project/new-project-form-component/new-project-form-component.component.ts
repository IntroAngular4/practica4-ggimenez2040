import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styleUrls: ['./new-project-form-component.component.css']
})
export class NewProjectFormComponentComponent implements OnInit {
  @Output() public createProject = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public saveProject(name: string) {
    this.createProject.emit(name);
  }
}
