import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  showMore = false;

  toggleInfo() {
    this.showMore = !this.showMore;
  }
}
