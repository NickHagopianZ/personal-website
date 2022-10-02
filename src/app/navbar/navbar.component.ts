import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() scrollLocation:number;
  @Input() pageHeight:number;

  showIcons:boolean = false;
  additionalIcons() {
    this.showIcons = !this.showIcons;
  }

  contactMe: boolean = false;

  highlightGroup:number = -1;

  scrolling: boolean = false;
  ngOnChanges(  changes: SimpleChanges) {
    this.scrolls();
  }

  timeLeft: number = 0;
  interval: any;

  initialIgnores: number = 1;

  scrolls() :void{
    if (this.initialIgnores > 0){
      this.initialIgnores = this.initialIgnores - 1;
    }
    else {
      this.scrolling = true;
      if (this.timeLeft === 0){
        this.timeLeft = 5;
        this.interval = setInterval(() => {
          if(this.timeLeft > 0) {
            this.timeLeft= this.timeLeft - 1;
          } else {
            clearInterval(this.interval);
            this.scrolling = false;
          }
        },100)
      }
      if (this.timeLeft > 0){
        this.timeLeft = 5;
      }
    }
  }



  // timeleft: number = 60;
  // interval;



  hoverGroup(group:number):void{
    this.highlightGroup = group;
  }

  constructor() { }

  ngOnInit() {
  }

}
