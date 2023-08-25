import { Component } from '@angular/core';

@Component({
  selector: 'app-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.scss'],
})
export class SellCardComponent {
  sellCurrancies: any[] = [
    {
      left: {
        name: 'Netherrite',
        amount: '1',
        image: 'assets/img/items/netherrite.webp',
      },
    },
    {
      left: {
        name: 'Netherrite Scrap',
        amount: '4',
        image: 'assets/img/items/netherrite_scrap.webp',
      },
    },
    {
      left: {
        name: 'Ancient Debris',
        amount: '4',
        image: 'assets/img/items/ancient_debris.webp',
      },
    },
    {
      left: {
        name: 'Redstone Block',
        amount: '64',
        image: 'assets/img/items/redstone_block.webp',
      },
    },
    {
      left: {
        name: 'Copper Block',
        amount: '2*64',
        image: 'assets/img/items/copper_block.webp',
      },
    },
  ];

  sellList: any[] = [
    {
      right: {
        name: 'Shulker Shell',
        amount: '8*64',
        image: 'assets/img/items/shulker_shell.webp',
      },
      left: {
        name: 'Netherrite',
        amount: '1',
        image: 'assets/img/items/netherrite.webp',
      },
    },
    {
      right: {
        name: 'Wool',
        amount: '64',
        image: 'assets/img/items/wool.webp',
      },
      left: {
        name: 'Diamond',
        amount: '1',
        image: 'assets/img/items/diamond.webp',
      },
    },
    {
      right: {
        name: 'Iron Block',
        amount: '32',
        image: 'assets/img/items/iron_block.webp',
      },
      left: {
        name: 'Diamond',
        amount: '1',
        image: 'assets/img/items/diamond.webp',
      },
    },
    {
      right: {
        name: 'Sniffer Egg',
        amount: '1',
        image: 'assets/img/items/sniffer_egg.webp',
      },
      left: {
        name: 'Diamond',
        amount: '1',
        image: 'assets/img/items/diamond.webp',
      },
    },
    {
      right: {
        name: 'Firework Rocktes',
        amount: '4*64',
        image: 'assets/img/items/firework_rocket.webp',
      },
      left: {
        name: 'Diamond',
        amount: '2',
        image: 'assets/img/items/diamond.webp',
      },
    },
    {
      right: {
        name: 'Totem of Undying',
        amount: '1',
        image: 'assets/img/items/totem_of_undying.webp',
      },
      left: {
        name: 'Gold Block',
        amount: '1',
        image: 'assets/img/items/gold_block.webp',
      },
    },
  ];

  curranciesHidden: boolean = true;

  itemsNotFound: boolean = false;
}
