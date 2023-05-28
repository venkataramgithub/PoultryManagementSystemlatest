import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { EggProductionComponent } from './navbar/egg-production/egg-production.component';
import { EggsalesComponent } from './navbar/eggsales/eggsales.component';
import { BirdsPurchaseComponent } from './navbar/birds-purchase/birds-purchase.component';
import { BirdsSalesComponent } from './navbar/birds-sales/birds-sales.component';
import { MortalityComponent } from './navbar/mortality/mortality.component';
import { FeedPurchaseComponent } from './navbar/feed-purchase/feed-purchase.component';
import { FeedConsumptionComponent } from './navbar/feed-consumption/feed-consumption.component';
import { PurchasePersonDetailsComponent } from './navbar/purchase-person-details/purchase-person-details.component';
import { SalesPersonDetailsComponent } from './navbar/sales-person-details/sales-person-details.component';
import { PayRollComponent } from './navbar/pay-roll/pay-roll.component';
import { DailyPricesComponent } from './navbar/daily-prices/daily-prices.component';
import { EmployeesComponent } from './navbar/employees/employees.component';

import { MainService } from './main.service';
import { InsertService } from './navbar/insert.service';
import { CrudService } from './navbar/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    EggProductionComponent,
    EggsalesComponent,
    BirdsPurchaseComponent,
    BirdsSalesComponent,
    MortalityComponent,
    FeedPurchaseComponent,
    FeedConsumptionComponent,
    PurchasePersonDetailsComponent,
    SalesPersonDetailsComponent,
    PayRollComponent,
    DailyPricesComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MainService,InsertService,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
