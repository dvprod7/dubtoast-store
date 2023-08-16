import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements AfterViewInit{
  
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const wordList = this.elementRef.nativeElement.querySelector('.word-list') as HTMLUListElement;
    const totalWidth = wordList.offsetWidth;
    const cloneList = wordList.cloneNode(true) as HTMLUListElement;

    cloneList.classList.add('cloned-list');
    wordList.parentNode?.appendChild(cloneList);

    function loopCarousel() {
      cloneList.style.transform = `translateX(-${totalWidth}px)`;
      setTimeout(() => {
        cloneList.style.transition = 'none';
        cloneList.style.transform = 'translateX(0)';
        setTimeout(() => {
          cloneList.style.transition = 'transform 20s linear';
          loopCarousel();
        }, 10);
      }, 20000);
    }

    loopCarousel();
  }
}
