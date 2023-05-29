import { Component, OnInit} from '@angular/core';
import { InsertService } from '../insert.service';
import { FormGroup,FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';
import { dailyprices } from '../Models/dailyprices.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};

  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      date:new FormControl(""),
      chickenprice:new FormControl(""),
      eggprice:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
    })
    this.route.paramMap.subscribe(params=>{
      this.sl=params.get('id');
      if(this.sl){
        document.getElementById("eggsales").style.display="none";
        document.getElementById("eggsales-update").style.display="block";
        this.getupdatedata();
      }
      else{
        document.getElementById("eggsales").style.display="block";
        document.getElementById("eggsales-update").style.display="none";
      }
    });
    this.Getdailyprices();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
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
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatedailypricesservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        date:this.gettedupdatedata.date,
        eggprice:this.gettedupdatedata.EggPrice,
        chickenprice:this.gettedupdatedata.ChickenPrice,
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatedailypricesservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/DailyPrices']);

      }
      else{
        alert("Not Updated");
      }
    },
    (error)=>{
      alert(error.err);
    });
  } 
  
}
