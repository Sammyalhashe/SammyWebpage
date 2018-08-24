import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sammy-pey',
  templateUrl: './pey.component.html',
  styleUrls: ['./pey.component.css']
})
export class PeyComponent implements OnInit, OnDestroy {
  reportSub: Subscription;
  reportURL: string | null;
  constructor(private storage: AngularFireStorage) {
    this.reportSub = this.storage.ref('Downloadable/report.pdf').getDownloadURL().subscribe(report => {
      this.reportURL = report;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.reportSub.unsubscribe();
  }

}
