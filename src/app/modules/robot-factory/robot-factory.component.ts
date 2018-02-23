import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-robot-factory',
  templateUrl: './robot-factory.component.html'
})
export class RobotFactoryComponent {
  robot: string;

  constructor() {
    this.robot = 'Default Name';
  }

  setModelName(name: string): void {
    this.robot = name;
  }
}
