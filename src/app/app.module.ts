import { ResumeComponent } from "./sammy-resume/sammy-resume.component";
import { SammyModule } from "./Sammy/sammy-module.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { SammyComponent } from "./Sammy/sammy.component";
import { SammyResumeModule } from "./sammy-resume/sammy-resume.module";
import { BlogModule } from "./blog-module/blog-module.module";
import { SharedModule } from "../shared/shared.module";
import { ProjectsModule } from "./projects/projects.module";
import { ProjectsComponent } from "./projects/projects.component";
import { GuideModuleModule } from "./guide-module/guide-module.module";
import { GuideComponentComponent } from "./guide-component/guide-component.component";
import { AngularMaterialModule } from "./angularMaterialconfig";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    BrowserModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "home",
        component: SammyComponent,
        data: {
          animation: "homePage"
        }
      },
      {
        path: "resume",
        component: ResumeComponent,
        data: {
          animation: "resumePage"
        }
      },
      {
        path: "guides",
        component: GuideComponentComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "/", pathMatch: "full" }
    ]),
    SammyModule,
    SammyResumeModule,
    BlogModule,
    SharedModule,
    ProjectsModule,
    GuideModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
