import { Component } from '@angular/core';

import { MonstersService } from './monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent {
  constructor(public monstersSrv: MonstersService) {
    this.monstersSrv.createMonster();
  }

  changeName(): void {
    this.monstersSrv.changeName();
  }
}
