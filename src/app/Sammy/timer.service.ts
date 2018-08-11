import { IListItem } from '../../shared/listItems';
import { of, Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TimerService {
    ref: Observable<any[]>;

    constructor(private _http: HttpClient, private db: AngularFirestore) {
        this.ref = this.db.collection('sampleData').valueChanges();
        this.ref.pipe(
            tap(val => console.log(val)),
            catchError(err => of(err))
        );
    }

    getPythonLinks(): Observable<IListItem[]> {
        return this.db.collection('pythonPosts').valueChanges() as Observable<IListItem[]>;
    }

    getQcLinks(): Observable<IListItem[]> {
        return this.db.collection('qmPosts').valueChanges() as Observable<IListItem[]>;
    }
}
