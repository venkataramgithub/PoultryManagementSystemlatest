import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { birdsales } from '../Models/birdsales.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birds-purchase',
  templateUrl: './birds-purchase.component.html',
  styleUrls: ['./birds-purchase.component.css']
})
export class BirdsPurchaseComponent implements OnInit {
  formdata;
  Birdsales:birdsales[];
  searchdata;
  row='';
  searchid;
  destroyid=0;
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild('test') d;
  @ViewChild('test1') d1;
  @ViewChild('destroy') m;
  ngOnInit() {
    this.formdata=new FormGroup({
      id:new FormControl(""),
      noofchicks:new FormControl(""),
      amount:new FormControl(""),
      date:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
    });
    this.searchid=new FormGroup({
      search:new FormControl("")
    });
    this.route.paramMap.subscribe(params=>{
      this.sl=params.get('id');
      if(this.sl){
        this.d.nativeElement.style.display="block";
        this.d1.nativeElement.style.display="none";
        this.getupdatedata();
      }
      else{
        this.d.nativeElement.style.display="none";
        this.d1.nativeElement.style.display="block";
      }
    });
    this.Getbirdspurchase();
  }

  birdspurchase(data){
    this.service.birdspurchaseservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.formdata.reset();
        this.Getbirdspurchase();
      }
      else{
        alert("Data Not submitted");
        this.formdata.reset();
      }
    },
    (error)=>{
      alert(error.err);
      this.formdata.reset();
    });
  }

  Getbirdspurchase(){
    this.crudservice.birdspurchaseservice().subscribe((response)=>{
      this.Birdsales=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchbirdpurchase(data){
    this.destronsearch();
    this.service.searchbirdpurchaseservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Birdsales=response.result; 
        this.searchdata.reset();
      }
      else{
        this.Birdsales=response.result;
        this.row="No Data Exist";
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchiddata(data){
    this.destroyid=setInterval(()=>{
      console.log(this.m.nativeElement.value);
      if(!this.m.nativeElement.value){
        this.Getbirdspurchase();
        this.row='';
      }
    },500);
    this.service.searchpurchaseidservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Birdsales=response.result;
      }
      else{
        this.Birdsales=response.result;
        this.row="No Data Exist";
      }
    },
    (error)=>{
      alert(error.err);
    });
  }

  ngOnDestroy(){
    if(this.destroyid){
      clearInterval(this.destroyid);
    }
  }

  destronsearch(){
     if(this.destroyid){
      clearInterval(this.destroyid);
    }
  }

  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatedbirdpurchaseservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        numberofchicks:this.gettedupdatedata.NoofChicks,
        amount:this.gettedupdatedata.Amount,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatebirdpurchaseservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/BirdsPurchase']);

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
