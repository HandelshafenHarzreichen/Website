import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  splashes: String[] = [
    'Hier regiert der Preis',
    'Der Kapitalismus schläft nie',
    'Der Kommunismus schläft nie',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'Nacho stinkt',
    'Wir machen faire Preise, vertrau',
    'Wer bezahlt den Schei* hier eigentlich?',
    'Cords: -6100 100',
    'Kapitalismus ftw',
    '(ノಠ益ಠ)ノ彡┻━┻',
    'Wir kaufen Netherrite/Debre an',
    'Beste Stadt',
    'Stiftung Warentest GUT',
    'Der Shop deines Vertrauens',
    'Wirtschaft? Wirtschaft! Wirtschaft.',
    '*Steampunk Musik*',
    'Kenji geh schlafen',
    'Funktioniert das hier?',
    'Ich denke also bin ich',
    'Ich mag Züge',
    'hi',
    'sank ju for travlieng to Harzreichen Hafen',
    'sponsored by nachos Honig™',
    'Apple suckt',
    'SPRICH STUHL DU HOCKER!',
    '🤓☝',
    '🪑',
    'Niemand mag Phantome',
    '(☞ﾟヮﾟ)☞',
  ];

  splash: String =
    this.splashes[Math.floor(Math.random() * this.splashes.length)];
}
