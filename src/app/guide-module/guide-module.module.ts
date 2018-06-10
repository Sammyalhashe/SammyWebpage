import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponentComponent } from '../guide-component/guide-component.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LinksResolver } from '../Sammy/linksResolver.service';

const routes: Routes = [
  {
    path: 'guides',
    component: GuideComponentComponent,
    data: {
      animation: 'guidePage'
    },
    resolve: {
      links: LinksResolver
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  declarations: [GuideComponentComponent]
})
export class GuideModuleModule {}
