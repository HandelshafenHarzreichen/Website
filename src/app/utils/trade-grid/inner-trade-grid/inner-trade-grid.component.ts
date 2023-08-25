import { Component, Input } from '@angular/core';

@Component({
  selector: 'inner-trade-grid',
  templateUrl: './inner-trade-grid.component.html',
  styleUrls: ['./inner-trade-grid.component.scss'],
})
export class InnerTradeGridComponent {
  @Input() orSymbol: boolean = false;
  @Input() item: any;
}
