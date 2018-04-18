import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "./Dialog/dialog.component";
import { FormsModule } from "@angular/forms";
import { TypingAnimationModule } from "angular-typing-animation";

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent],
  exports: [DialogComponent, CommonModule, FormsModule, TypingAnimationModule]
})
export class SharedModule {}
