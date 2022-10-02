import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Nick Hagopian-Zirkel';
  pageHeight:number = 712;
  scrollLocation:number = 0;
  adjustScrollLocation():void {
    this.pageHeight = document.getElementById("page-1").offsetHeight
    this.scrollLocation = document.getElementById("scroll-container").scrollTop;
  }
}
