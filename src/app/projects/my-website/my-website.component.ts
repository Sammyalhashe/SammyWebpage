import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'sammy-my-website',
  templateUrl: './my-website.component.html',
  styleUrls: ['./my-website.component.css']
})
export class MyWebsiteComponent implements OnInit {
  url: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('Photos/website.JPG');
    this.url = ref.getDownloadURL();
  }

  ngOnInit() {
  }

}
