import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'guides/:id',
    component: BlogComponent,
    data: {
      animation: 'blogPage'
    }
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BlogComponent]
})
export class BlogModule {}
