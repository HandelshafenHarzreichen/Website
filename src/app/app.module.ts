import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { TradesComponent } from './trades/trades.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CardComponent } from './utils/card/card.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { MembersComponent } from './home/members/members.component';
import { ButtonComponent } from './utils/button/button.component';
import { SellCardComponent } from './trades/sell-card/sell-card.component';
import { BuyCardComponent } from './trades/buy-card/buy-card.component';
import { TradeGridComponent } from './utils/trade-grid/trade-grid.component';
import { InnerTradeGridComponent } from './utils/trade-grid/inner-trade-grid/inner-trade-grid.component';
import { OrdenDesStuhlsComponent } from './orden-des-stuhls/orden-des-stuhls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradesComponent,
    PrivacyComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
    ButtonComponent,
    SellCardComponent,
    BuyCardComponent,
    TradeGridComponent,
    InnerTradeGridComponent,
    OrdenDesStuhlsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
