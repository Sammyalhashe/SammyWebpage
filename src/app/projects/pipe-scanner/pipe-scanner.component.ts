import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'sammy-pipe-scanner',
  templateUrl: './pipe-scanner.component.html',
  styleUrls: ['./pipe-scanner.component.css']
})
export class PipeScannerComponent implements OnInit {
  url: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('Photos/team51_featFatSammy.jpg');
    this.url = ref.getDownloadURL();
  }

  ngOnInit() {
  }

}
