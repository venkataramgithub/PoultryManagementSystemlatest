import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { feedconsumption } from '../Models/feedconsumption.model';

@Component({
  selector: 'app-feed-consumption',
  templateUrl: './feed-consumption.component.html',
  styleUrls: ['./feed-consumption.component.css']
})
export class FeedConsumptionComponent implements OnInit {
  formdata;
  Feedconsumption:feedconsumption[];
  constructor(private service:InsertService,private crudservice:CrudService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      employeeassigned:new FormControl(""),
      quantity:new FormControl(""),
      price:new FormControl(""),
      date:new FormControl("")
    });
    this.Getfeedconsumption();
  }

  feedconsumption(data){
    this.service.feedconsumptionservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
      }
      else{
        alert("Data not submitted");
      }
    },
    (error)=>{
      alert(error.err);
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
}
