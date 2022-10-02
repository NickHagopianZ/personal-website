import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {
  @Input() img:string[];
  @Input() download:boolean;

  @Input() currentImage: number = 0;

  constructor() { }

  next(str:string) {
    if (str === '+') {
      if (this.img.length > this.currentImage + 1){
        this.currentImage++;
      }
    }
    if (str === '-'){
      if (0 < this.currentImage){
        this.currentImage--;
      }
    }
  }

  ngOnInit() {
  }

}
