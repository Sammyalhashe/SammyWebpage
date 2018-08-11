// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// application Components and Modules
import { AppComponent } from './app.component';
import { SammyComponent } from './Sammy/sammy.component';
import { ResumeComponent } from './sammy-resume/sammy-resume.component';
import { SammyModule } from './Sammy/sammy-module.module';
import { SammyResumeModule } from './sammy-resume/sammy-resume.module';
import { BlogModule } from './blog-module/blog-module.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsComponent } from './projects/projects.component';
import { GuideModuleModule } from './guide-module/guide-module.module';
import { GuideComponentComponent } from './guide-component/guide-component.component';
import { LinksResolver } from './Sammy/linksResolver.service';

// External Modules
import { AngularMaterialModule } from './angularMaterialconfig';
import { TimerService } from './Sammy/timer.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        BrowserModule.withServerTransition({ appId: 'SammyWebpage' }),
        RouterModule.forRoot([
            {
                path: 'home',
                component: SammyComponent,
                data: {
                    animation: 'homePage'
                },
                resolve: {
                    links: LinksResolver
                }
            },
            {
                path: 'resume',
                component: ResumeComponent,
                data: {
                    animation: 'resumePage'
                }
            },
            // {
            //   path: 'guides',
            //   component: GuideComponentComponent,
            //   data: {
            //     animation: 'guidePage'
            //   },
            //   resolve: {
            //     links: LinksResolver
            //   }
            // },
            {
                path: 'guides',
                loadChildren: './guide-module/guide-module.module#GuideModuleModule'
            },
            {
                path: 'guides/:id',
                loadChildren: './blog-module/blog-module.module#BlogModule'
            },
            // {
            //   path: 'projects',
            //   loadChildren: './projects/projects.module#ProjectsModule',
            //   component: ProjectsComponent,
            //   data: {
            //     animation: 'projectPage'
            //   }
            // },
            {
                path: 'projects',
                loadChildren: './projects/projects.module#ProjectsModule'
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: '/', pathMatch: 'full' }
        ]),
        AngularFireModule.initializeApp(environment.firebase, 'ArduinoHandler'), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
        SammyModule,
        SammyResumeModule,
        BlogModule,
        SharedModule,
        ProjectsModule,
        GuideModuleModule
    ],
    providers: [LinksResolver],
    bootstrap: [AppComponent]
})
export class AppModule {}
