import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    //navbar
    trigger('openClose',[
    state('open', style({
      transform: 'translate3d(350px, 0px, 0px)'
      // width: "calc(vw - 350px)",
    })),
    state('closed', style({
      // transform: 'translate3d(0px,0px,0px)'
      // width: "0px",


    })),
    transition('open => closed', [
      animate('0.5s 0.1s ease-in')
]),
transition('closed => open', [
  animate('0.5s 0.1s ease-out')
]),]),
//cover
trigger('openCloseMain',[
state('open', style({
  // transform: 'translate3d(300px, 0px, 0px)',
  width: "calc(100vw - 390px)",
  padding: "0px 30px 0px 360px"
})),
state('closed', style({
  // transform: 'translate3d(0px,0px,0px)',
  width: "calc(100vw - 120px)",
  padding: "0px 60px 0px 60px"

})),
transition('open => closed', [
  animate('0.5s 0.15s ease-in')
]),
transition('closed => open', [
animate('0.5s 0.0s ease-out')
]),

]),

]
})
export class NavBarComponent implements OnInit {
  openSideBar: boolean = false;
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  constructor() { }

  ngOnInit() {
  }

}
