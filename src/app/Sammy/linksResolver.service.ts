// Angular Imports
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

// RxJS Imports
import { Observable } from 'rxjs/Observable';

// Application Imports
import { IresolveReturn } from '../../shared/IresolveReturn';
import { IListItem } from '../../shared/listItems';
import { TimerService } from './timer.service';

@Injectable()
export class LinksResolver implements Resolve<IresolveReturn> {
  constructor(private timerService: TimerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      pythonLinks: this.timerService.getPythonLinks(),
      qcLinks: this.timerService.getQcLinks()
    };
  }
}
