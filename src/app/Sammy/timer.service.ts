import { IpicsItem } from './../../shared/IpicsItem';
import { IListItem } from './../../shared/listItems';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class TimerService {
  private pyURL = './api/json/pythonLinks.json';
  private qcURL = './api/json/qcLinks.json';
  private tpURL = './api/json/tennisPicsLinks.json';

  constructor(private _http: HttpClient) {}

  getPythonLinks(): Observable<IListItem[]> {
    return this._http
      .get<IListItem[]>(this.pyURL)
      .do(data => console.log('All Data : ' + JSON.stringify(data)))
      .catch((err: HttpErrorResponse) => {
        console.log(err.message);
        return Observable.throw(err.message);
      });
  }

  getQcLinks(): Observable<IListItem[]> {
    return this._http
      .get<IListItem[]>(this.qcURL)
      .do(data => console.log('All Data : ' + JSON.stringify(data)))
      .catch((err: HttpErrorResponse) => {
        console.log(err.message);
        return Observable.throw(err.message);
      });
  }
}
