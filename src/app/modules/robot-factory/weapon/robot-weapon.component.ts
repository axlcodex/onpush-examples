import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-robot-weapon',
  templateUrl: './robot-weapon.component.html'
})
export class RobotWeaponComponent implements OnChanges {
  ngOnChanges(): void {
    console.log('On Changes for weapon gallery');
  }
}
