import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-weapon-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('GALLERY On View Checked');
  }
}
