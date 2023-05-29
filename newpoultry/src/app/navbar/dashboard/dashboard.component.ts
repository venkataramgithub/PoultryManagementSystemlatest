import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dailyprices:any={};
  balances:any={};
  constructor(private router:Router,private service:InsertService) { }

  ngOnInit() {
    this.checklogin();
    this.getdailyprices();
    this.getbalancedetails();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }

  getdailyprices(){
    this.service.getdailypricesservice().subscribe((response)=>{
      this.dailyprices=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }
  getbalancedetails(){
    this.service.getbalancedetailsservice().subscribe((response)=>{
      this.balances={
        totalcustomers:response.result[0].totalcustomers,
        totalsales:response.result2[0].totalsales,
        totalmortality:response.result3[0].totalmortality,
        balancefeed:response.result4[0].feed-response.result5[0].feedconsumed,
        balanceeggs:response.result6[0].eggproduced-response.result7[0].eggsaled,
        balancechicken:response.result9[0].chickenpurchased-response.result8[0].chickensaled-response.result3[0].totalmortality
      };
      
    },
    (error)=>{

    });
  }
}
