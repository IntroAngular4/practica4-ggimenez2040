import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { DashboardComponentComponent } from './projects/viewer-project/dashboard-component/dashboard-component.component';
import { FilterProjectsFormComponentComponent } from './projects/viewer-project/filter-projects-form-component/filter-projects-form-component.component';
import { ViewerProjectFormComponentComponent } from './projects/viewer-project/viewer-project-form-component/viewer-project-form-component.component';
import { ProjectsListComponentComponent } from './projects/new-project/projects-list-component/projects-list-component.component';
import { NewProjectFormComponentComponent } from './projects/new-project/new-project-form-component/new-project-form-component.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, DashboardComponentComponent, FilterProjectsFormComponentComponent, ViewerProjectFormComponentComponent, ProjectsListComponentComponent, NewProjectFormComponentComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
