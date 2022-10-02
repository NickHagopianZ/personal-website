import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgBoolean: boolean = false;
  imgString: string = 'assets/profileSquare.jpg';
  constructor() { }
  imageUrl: string  = `assets/profileSquareOptimized.jpg?${Date.now()}`;

  time = new Date();
  rxTime = new Date();
  intervalId;

  ngOnInit() {
    // Using Basic Interval
    // const epochToday = (new Date).setHours(0,0,0,0).getTime();

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
