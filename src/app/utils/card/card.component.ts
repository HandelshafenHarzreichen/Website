import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() alt: String = '';
  @Input() src: String = '';
  @Input() center: Boolean = false;
  @Input() maxWidth: String = '100%';
  @Input() light: Boolean = false;
  @Input() warn: Boolean = false;
}
