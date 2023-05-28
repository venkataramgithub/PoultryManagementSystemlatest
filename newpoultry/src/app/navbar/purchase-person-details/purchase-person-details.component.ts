import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { salespersondetails } from '../Models/salespersondetails.model';

@Component({
  selector: 'app-purchase-person-details',
  templateUrl: './purchase-person-details.component.html',
  styleUrls: ['./purchase-person-details.component.css']
})
export class PurchasePersonDetailsComponent implements OnInit,OnDestroy {
  formdata;
  searchdata;
  id=0;
  Salespersondetails:salespersondetails[];
  constructor(private service:InsertService,private crudservice:CrudService) { }

  @ViewChild('test',{static:false}) d;
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
      search:new FormControl("")
    })
    this.Getpurchaseperson();
    this.id=setInterval(()=>{
      if(!this.d.nativeElement.value){
        this.Getpurchaseperson();
      }
    },500);
  }

  purchaseperson(data){
    this.service.purchasepersonservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Date Submitted");
        this.formdata.reset();
        this.Getpurchaseperson();
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

  Getpurchaseperson(){
    this.crudservice.purchasepersonservice().subscribe((response)=>{
      this.Salespersondetails=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  Searchpurchaseperson(data){
    this.service.Searchpurchasepersonservice(data).subscribe((response)=>{
      this.Salespersondetails=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id);
    }
  }
}
