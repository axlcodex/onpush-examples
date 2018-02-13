import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MonstersService } from './monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonstersComponent {
  constructor(public monstersSrv: MonstersService) {
    this.monstersSrv.getMonsters();
  }
}
