import { AfterViewChecked, ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { MonstersService } from './monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonstersComponent implements OnChanges, AfterViewChecked {
  constructor(public monstersSrv: MonstersService) {
    this.monstersSrv.getMonsters();
  }

  ngAfterViewChecked(): void {
    console.log('On After View Checked');
  }

  ngOnChanges(): void {
    console.log('On Changes');
  }
}
