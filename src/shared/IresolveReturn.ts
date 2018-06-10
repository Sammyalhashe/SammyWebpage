import { Observable } from 'rxjs/Observable';
import { IListItem } from './listItems';
export interface IresolveReturn {
  pythonLinks: Observable<IListItem[]>;
  qcLinks: Observable<IListItem[]>;
}
