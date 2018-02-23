import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-robot-body',
  templateUrl: './robot-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotBodyComponent {
  @Input() robot: any;
}
