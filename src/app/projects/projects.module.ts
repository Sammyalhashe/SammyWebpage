import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      animation: 'projectPage'
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {}
