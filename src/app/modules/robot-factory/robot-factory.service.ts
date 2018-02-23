import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class RobotFactoryService {
  robotSubject: BehaviorSubject<any>;
  robot$: Observable<any>;

  constructor() {
    this.robotSubject = new BehaviorSubject<any>({ name: 'Default Name' });
    this.robot$ = this.robotSubject.asObservable();
  }

  setName(name: string): void {
    this.robotSubject.next({ name: name});
  }
}
