import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponentComponent } from '../guide-component/guide-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
  declarations: [GuideComponentComponent]
})
export class GuideModuleModule {}
