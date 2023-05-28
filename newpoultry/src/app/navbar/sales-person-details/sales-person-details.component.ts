import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { salespersondetails } from '../Models/salespersondetails.model';

@Component({
  selector: 'app-sales-person-details',
  templateUrl: './sales-person-details.component.html',
  styleUrls: ['./sales-person-details.component.css']
})
export class SalesPersonDetailsComponent implements OnInit,OnDestroy {
  formdata;
  searchdata;
  id=0;
  row='';
  Salespersondetails:salespersondetails[];
  constructor(private service:InsertService,private crudservice:CrudService) { }

  @ViewChild("test",{static:false}) d;
  ngOnInit() {
    this.formdata=new FormGroup({
      firstname:new FormControl(""),
      lastname:new FormControl(""),
      phone:new FormControl(""),
      state:new FormControl(""),
      location:new FormControl(""),
      organizationname:new FormControl("")
    });
    this.searchdata=new FormGroup({
      search:new FormControl(""),
    });
    this.GetSalesperson();
    this.id=setInterval(()=>{
     if(!this.d.nativeElement.value){
      this.GetSalesperson();
      this.row="";
     }
    },500);
  }
  
  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id);
    }
  }

  salesperson(data){
    this.service.salespersonservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Date Submitted");
        this.formdata.reset();
        this.GetSalesperson();
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

  GetSalesperson(){
    this.crudservice.salespersonservice().subscribe((response)=>{
      this.Salespersondetails=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchsales(data){
    this.service.Searchsalesservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Salespersondetails=response.result;
      }
      else{
        this.Salespersondetails=response.result;
        this.row="No Data Exist";
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }
}
