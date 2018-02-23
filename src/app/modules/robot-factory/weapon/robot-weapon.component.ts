import { ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-robot-weapon',
  templateUrl: './robot-weapon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotWeaponComponent implements OnChanges {
  ngOnChanges(): void {
    console.log('On Changes for weapon gallery');
  }
}
