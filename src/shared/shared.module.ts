import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './Dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { TypingAnimationModule } from 'angular-typing-animation';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [CommonModule, ScrollToModule.forRoot()],
  declarations: [DialogComponent],
  exports: [
    DialogComponent,
    CommonModule,
    FormsModule,
    TypingAnimationModule,
    ScrollToModule
  ]
})
export class SharedModule {}
