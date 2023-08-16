import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonClass: string = '';
}
