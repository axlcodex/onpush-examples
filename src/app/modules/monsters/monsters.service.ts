import { Monster } from './monster';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

export class MonstersService {
  monsterMock: Monster;

  monsterSubject: ReplaySubject<Monster>;
  monster$: Observable<Monster>;

  constructor() {
    this.monsterMock = {
      name: 'Frankenstein'
    };

    this.monsterSubject = new ReplaySubject<Monster>();
    this.monster$ = this.monsterSubject.asObservable();
  }

  createMonster(): void {
    this.monsterSubject.next(this.monsterMock);
  }

  changeName(): void {
    const monster = {
      name: 'Dracula'
    };
    this.monsterSubject.next(monster);
  }
}
