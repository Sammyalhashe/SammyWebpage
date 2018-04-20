import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SammyComponent } from './sammy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogModule } from '../blog-module/blog-module.module';
import { BlogComponent } from '../blog-module/blog.component';
import { TimerService } from './timer.service';
import { DialogComponent } from '../../shared/Dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ScrollToModule.forRoot(),
    RouterModule.forChild([{ path: 'guides/:id', component: BlogComponent }]),
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [SammyComponent],
  exports: [SammyComponent],
  providers: [TimerService]
})
export class SammyModule {}
