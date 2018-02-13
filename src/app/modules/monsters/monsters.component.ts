import {
  AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck,
  OnChanges
} from '@angular/core';
import { MonstersService } from './monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonstersComponent implements OnChanges, AfterViewChecked, AfterContentChecked, DoCheck {
  constructor(public monstersSrv: MonstersService) {
    this.monstersSrv.getMonsters();
  }

  ngAfterViewChecked(): void {
    console.log('On After View Checked');
  }

  ngAfterContentChecked(): void {
    console.log('On After Content Checked');
  }

  ngOnChanges(): void {
    console.log('On Changes');
  }

  ngDoCheck(): void {
    console.log('On Do Check');
  }

  changeName(): void {
    this.monstersSrv.changeName();
  }
}
