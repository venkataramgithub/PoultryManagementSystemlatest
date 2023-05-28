import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'navbar',component:NavbarComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'EggProduction',component:EggProductionComponent},
      {path:'EggSales',component:EggsalesComponent},
      {path:'BirdsPurchase',component:BirdsPurchaseComponent},
      {path:'BirdsSales',component:BirdsSalesComponent},
      {path:'Mortality',component:MortalityComponent},
      {path:'FeedPurchase',component:FeedPurchaseComponent},
      {path:'FeedConsumption',component:FeedConsumptionComponent},
      {path:'PurchasePerson',component:PurchasePersonDetailsComponent},
      {path:'SalesPerson',component:SalesPersonDetailsComponent},
      {path:'PayRoll',component:PayRollComponent},
      {path:'DailyPrices',component:DailyPricesComponent},
      {path:'Employees',component:EmployeesComponent},
      {path:'EggSales/:id',component:EggsalesComponent},
      {path:'EggProduction/:id',component:EggProductionComponent},
      {path:'BirdsSales/:id',component:BirdsSalesComponent},
      {path:'BirdsPurchase/:id',component:BirdsPurchaseComponent},
      {path:'Mortality/:id',component:MortalityComponent},
      {path:'FeedPurchase/:id',component:FeedPurchaseComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
