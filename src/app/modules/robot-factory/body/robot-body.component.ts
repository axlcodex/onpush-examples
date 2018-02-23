import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-robot-body',
  templateUrl: './robot-body.component.html'
})
export class RobotBodyComponent {
  @Input() robot: any;
}
