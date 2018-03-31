import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './Dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule],
    declarations: [DialogComponent],
    exports: [
        DialogComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }