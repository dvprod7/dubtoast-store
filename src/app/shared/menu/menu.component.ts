import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuFixed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 0 && !this.isMenuFixed) {
      this.isMenuFixed = true;
    } else if (scrollPosition === 0 && this.isMenuFixed) {
      this.isMenuFixed = false;
    }
  }
}
