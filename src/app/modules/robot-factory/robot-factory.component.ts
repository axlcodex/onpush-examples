import { Component } from '@angular/core';

@Component({
  selector: 'app-robot-factory',
  templateUrl: './robot-factory.component.html'
})
export class RobotFactoryComponent {
  name: string;

  constructor() {
    this.name = '';
  }

  setModel(name: string): void {
    this.name = name;
  }
}
