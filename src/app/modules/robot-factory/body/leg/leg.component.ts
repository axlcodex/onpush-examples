import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html'
})
export class LegComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('LEG On View Checked');
  }
}
