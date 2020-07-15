import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form-component',
  templateUrl: './filter-projects-form-component.component.html',
  styleUrls: ['./filter-projects-form-component.component.css']
})
export class FilterProjectsFormComponentComponent implements OnInit {
  @Output() public findProject = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public findProjectByName(name: string) {
    this.findProject.emit(name);
  }
}
