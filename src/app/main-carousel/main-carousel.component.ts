import { Component } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {
  carouselData: any;
  currentSlide=0;
  interval: any;

  ngInit(){
    this.carouselData=homeCarouselData;
    this.autoPlay();
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide
  }
}
