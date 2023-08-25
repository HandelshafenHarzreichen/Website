import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.scss'],
})
export class BuyCardComponent {
  buyList: any[] = [
    {
      left: {
        name: 'Copper Block',
        amount: '64',
        image: 'assets/img/items/copper_block.webp',
      },
      right: {
        name: 'Diamond',
        amount: '8',
        image: 'assets/img/items/diamond.webp',
      },
    },
  ];
}
