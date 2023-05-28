import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { dailyprices } from '../Models/dailyprices.model';

@Component({
  selector: 'app-daily-prices',
  templateUrl: './daily-prices.component.html',
  styleUrls: ['./daily-prices.component.css']
})
export class DailyPricesComponent implements OnInit {
  formdata;
  Dailyprices:dailyprices[];
  searchdata;
  row='';
  constructor(private service:InsertService,private router:Router,private crudservice:CrudService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      date:new FormControl(""),
      chickenprice:new FormControl(""),
      eggprice:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
    })
    this.Getdailyprices();
  }

  dailyprices(data){
    this.service.dailypricesservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted successfully");
        this.Getdailyprices();
        this.formdata.reset();
      }
      else{
        alert("Data not submitted");
        this.formdata.reset();
      }
    },
    (error)=>{
      alert(error.err);
      this.formdata.reset();
    });
  }

  Getdailyprices(){
    this.crudservice.dailypricesservice().subscribe((response)=>{
      this.Dailyprices=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchdailyprices(data){
    this.service.searchdailypricesservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Dailyprices=response.result;
        this.row='';
      }
      else{
        this.Dailyprices=response.result;
        this.row="No Data Exist";
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
  AllRows(){
    this.Getdailyprices();
    this.row='';
  }
}
