import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../Sammy/timer.service';
import { IListItem } from '../../shared/listItems';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sammy-guide-component',
  templateUrl: './guide-component.component.html',
  styleUrls: ['./guide-component.component.css']
})
export class GuideComponentComponent implements OnInit, OnDestroy {
  JerrorMessage: string;
  errorMessage: string;
  items: IListItem[];
  Jitems: IListItem[];
  pySubscription: Subscription;
  qcSubscription: Subscription;

  constructor(private _timer: TimerService) {}

  ngOnInit() {
    // subscribing to the service timer.service
    this.pySubscription = this._timer
      .getPythonLinks()
      .subscribe(
        links => (this.items = links),
        err => (this.errorMessage = err as any)
      );

    this.qcSubscription = this._timer
      .getQcLinks()
      .subscribe(
        links => (this.Jitems = links),
        err => (this.JerrorMessage = err as any)
      );
  }

  ngOnDestroy(): void {
    this.pySubscription.unsubscribe();
    this.qcSubscription.unsubscribe();
  }
}
