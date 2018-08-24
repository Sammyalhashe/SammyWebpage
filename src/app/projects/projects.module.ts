import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { Routes, RouterModule } from '@angular/router';
import { PipeScannerComponent } from './pipe-scanner/pipe-scanner.component';
import { FinderThingyComponent } from './finder-thingy/finder-thingy.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { PeyComponent } from './pey/pey.component';


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      animation: 'projectPage'
    },
    children: [
        {
            path: 'pey',
            component: PeyComponent,
            data: {
                animation: 'pey'
            }
        },
      {
        path: 'pipeScanner',
          component: PipeScannerComponent,
          data: {
              animation: 'pipeScanner'
          }
      },
      {
        path: 'finderThingy',
          component: FinderThingyComponent,
          data: {
              animation: 'finderThingy'
          }
      },
      {
        path: 'myWebsite',
          component: MyWebsiteComponent,
          data: {
              animation: 'myWebsite'
          }
      },
        {
            path: '',
            redirectTo: 'pipeScanner',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [
        ProjectsComponent,
        PipeScannerComponent,
        FinderThingyComponent,
        MyWebsiteComponent,
        PeyComponent
    ]
})
export class ProjectsModule {}
