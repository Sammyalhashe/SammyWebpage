import { Component, OnInit } from "@angular/core";
import { TimerService } from "../Sammy/timer.service";
import { IListItem } from "../../shared/listItems";

@Component({
  selector: "sammy-guide-component",
  templateUrl: "./guide-component.component.html",
  styleUrls: ["./guide-component.component.css"]
})
export class GuideComponentComponent implements OnInit {
  JerrorMessage: string;
  errorMessage: string;
  items: IListItem[];
  Jitems: IListItem[];
  constructor(private _timer: TimerService) {}

  ngOnInit() {
    // subscribing to the service timer.service
    this._timer
      .getPythonLinks()
      .subscribe(
        links => (this.items = links),
        err => (this.errorMessage = err as any)
      );

    this._timer
      .getQcLinks()
      .subscribe(
        links => (this.Jitems = links),
        err => (this.JerrorMessage = err as any)
      );
  }
}
