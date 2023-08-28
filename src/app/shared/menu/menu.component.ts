import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('menuCheckbox', { static: true }) menuCheckbox!: ElementRef<HTMLInputElement>;
  isMenuOpen = false;
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
  
  toggleMenu() {
    if (!this.isMenuOpen) {
      this.isMenuOpen = this.menuCheckbox.nativeElement.checked;
    } else {
      /* Adds a little time to execute the closing animation 
      for the menu and change the state for isMenuOpen */
      setTimeout(() => { 
        this.isMenuOpen = this.menuCheckbox.nativeElement.checked;
      }, 500);
    }
  }

  uncheckInput() {
    this.menuCheckbox.nativeElement.checked = false;
    setTimeout(() => { 
      this.isMenuOpen = false;
    }, 500);
  }
}
