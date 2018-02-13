import {
  AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input,
  OnChanges
} from '@angular/core';

import { Monster } from '../monster';
import { MonstersService } from '../monsters.service';

@Component({
  selector: 'monster',
  template: '<p>{{ monster.name }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonsterComponent implements AfterViewChecked, AfterContentChecked, OnChanges, DoCheck {
  @Input() monster: Monster;

  constructor(public monstersSrv: MonstersService) { }

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
}
