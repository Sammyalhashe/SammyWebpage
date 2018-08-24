// Angular Imports
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

// RxJS Imports
import { Observable } from 'rxjs';

import { AngularFireStorage } from 'angularfire2/storage';
// Application Imports

@Injectable()
export class FirebaseResolverPic implements Resolve<Observable<string | null>> {
  constructor(private storage: AngularFireStorage) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const pic = this.storage
    //   .ref('Photos/SanFranBeach.jpg')
    //   .getDownloadURL() as Observable<string | null>;

    return this.storage
      .ref('Photos/SanFranBeach.jpg')
      .getDownloadURL() as Observable<string | null>;
  }
}

@Injectable()
export class FirebaseResolverResume
  implements Resolve<Observable<string | null>> {
  constructor(private storage: AngularFireStorage) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const resume = this.storage
    //   .ref('Downloadable/resume.pdf')
    //   .getDownloadURL() as Observable<string | null>;

    return this.storage
      .ref('Downloadable/resume.pdf')
      .getDownloadURL() as Observable<string | null>;
  }
}
