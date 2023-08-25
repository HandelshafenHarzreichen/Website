import { Component } from '@angular/core';

@Component({
  selector: 'app-orden-des-stuhls',
  templateUrl: './orden-des-stuhls.component.html',
  styleUrls: ['./orden-des-stuhls.component.scss'],
})
export class OrdenDesStuhlsComponent {
  splashes: String[] = [
    'Hi CC_TV',
    'Harzreichen 🤝 Orden des Stuhls',
    'https://ordendesstuhls.de/',
    'Pen meinte das hier wäre witzig',
    'Stand 06.09.2023 22:30',
  ];

  splash: String =
    this.splashes[Math.floor(Math.random() * this.splashes.length)];
}
