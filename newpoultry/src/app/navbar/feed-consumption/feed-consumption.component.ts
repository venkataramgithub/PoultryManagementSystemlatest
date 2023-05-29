import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { feedconsumption } from '../Models/feedconsumption.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-consumption',
  templateUrl: './feed-consumption.component.html',
  styleUrls: ['./feed-consumption.component.css']
})
export class FeedConsumptionComponent implements OnInit {
  formdata;
  Feedconsumption:feedconsumption[];
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }
 
  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      employeeassigned:new FormControl(""),
      quantity:new FormControl(""),
      price:new FormControl(""),
      date:new FormControl("")
    });
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
    this.Getfeedconsumption();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  feedconsumption(data){
    this.service.feedconsumptionservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.Getfeedconsumption();
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

  Getfeedconsumption(){
    this.crudservice.feedconsumptionservice().subscribe((response)=>{
      this.Feedconsumption=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatefeedconsumptionservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        employeedassigned:this.gettedupdatedata.EmployeeAssigned,
        quantity:this.gettedupdatedata.Quantity,
        price:this.gettedupdatedata.Price,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatefeedconsumptionservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/FeedConsumption']);

      }
      else{
        alert("Not Updated")
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
  
}
