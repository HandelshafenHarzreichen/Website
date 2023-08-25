import { Component, Input } from '@angular/core';

@Component({
  selector: 'trade-grid',
  templateUrl: './trade-grid.component.html',
  styleUrls: ['./trade-grid.component.scss'],
})
export class TradeGridComponent {
  @Input() items: any[] = [];
  @Input() orSymbol: boolean = false;
}
