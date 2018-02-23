import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-arm',
  templateUrl: './arm.component.html'
})
export class ArmComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('ARM On View Checked');
  }
}
