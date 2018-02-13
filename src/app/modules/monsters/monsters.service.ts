import { Monster } from './monster';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

export class MonstersService {
  monstersMock: Array<Monster>;

  monstersSubject: ReplaySubject<Array<Monster>>;
  monsters$: Observable<Array<Monster>>;

  constructor() {
    this.monstersMock = [
      {
        name: 'Frankenstein'
      },
      {
        name: 'Dracula'
      }
    ];

    this.monstersSubject = new ReplaySubject<Array<Monster>>();
    this.monsters$ = this.monstersSubject.asObservable();
  }

  getMonsters(): void {
    this.monstersSubject.next(this.monstersMock);
  }

  removeMonster(): void {
    this.monstersMock.shift();
    this.monstersSubject.next(this.monstersMock);
  }
}
