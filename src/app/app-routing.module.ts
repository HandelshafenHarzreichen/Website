import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TradesComponent } from './trades/trades.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { OrdenDesStuhlsComponent } from './orden-des-stuhls/orden-des-stuhls.component';

const routes: Routes = [
  { path: 'trades', component: TradesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'ordendesstuhls', component: OrdenDesStuhlsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
