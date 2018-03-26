import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './sammy-resume.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ResumeComponent
  ],
  exports: [
    ResumeComponent
  ]

})
export class SammyResumeModule { }
