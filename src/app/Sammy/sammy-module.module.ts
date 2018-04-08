import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SammyComponent } from "./sammy.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BlogModule } from "../blog-module/blog-module.module";
import { BlogComponent } from "../blog-module/blog.component";
import { TimerService } from "./timer.service";
import { DialogComponent } from "../../shared/Dialog/dialog.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild([
      { path: "abc", component: BlogComponent },
      { path: "multipleInheritance", component: BlogComponent },
      { path: "parseJson", component: BlogComponent },
      { path: "Rigetti_vs_IBM", component: BlogComponent },
      { path: "linAlg", component: BlogComponent }
    ]),
    FormsModule,
    SharedModule
  ],
  declarations: [SammyComponent],
  exports: [SammyComponent],
  providers: [TimerService]
})
export class SammyModule {}
