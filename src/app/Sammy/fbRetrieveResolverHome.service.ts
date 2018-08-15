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
export class FirebaseResolverHome implements Resolve<Observable<string | null>[]> {
    constructor(private storage: AngularFireStorage) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const returnArray = [
            this.storage
            .ref('Photos/sanFran.jpg')
            .getDownloadURL() as Observable<string | null>,
            this.storage.ref('Photos/python_background.png').getDownloadURL() as Observable<string | null>,
            this.storage.ref('Photos/noteQ.JPG').getDownloadURL() as Observable<string | null>
        ];
        return returnArray;
    }
}
