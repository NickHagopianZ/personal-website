import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  imgBoolean:boolean = false;
  imgString:string[] = [""];
  screenWidth: number;
  initialPicture: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    //  this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }



  displayPicture(image:string, option:number, album:string = "none", start:number = 0){
    this.initialPicture = start;
    if (option === 1){
      // alert(this.screenWidth);
      return;
    }
    if (album === "none"){
      this.imgString = ["/assets/" + image];
    }
    else if (album === "frisbee"){
      this.imgString = ["/assets/fris3.jpg","/assets/fris1.jpeg","/assets/fris2.jpg"]
    }
    this.imgBoolean = true;      
  }
  constructor() {
    this.onResize();
  }
  ngOnInit() {
  }

}
