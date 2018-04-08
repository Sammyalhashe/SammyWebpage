import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class TimerService {
  createTimer(): Observable<number> {
    return Observable.timer(25);
  }
}
