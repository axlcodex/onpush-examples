import { Component } from '@angular/core';

import { RobotFactoryService } from './robot-factory.service';

@Component({
  selector: 'app-robot-factory',
  templateUrl: './robot-factory.component.html',
  providers: [RobotFactoryService]
})
export class RobotFactoryComponent {
  constructor(public robotFactorySrv: RobotFactoryService) { }

  setModelName(name: string): void {
    this.robotFactorySrv.setName(name);
  }
}
