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
export class FirebaseResolver implements Resolve<Observable<string | null>> {
  constructor(private storage: AngularFireStorage) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.storage
      .ref('Photos/SanFranBeach.jpg')
      .getDownloadURL() as Observable<string | null>;
  }
}
