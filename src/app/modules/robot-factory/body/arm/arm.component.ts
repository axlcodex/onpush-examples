import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-arm',
  templateUrl: './arm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArmComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('ARM On View Checked');
  }
}
