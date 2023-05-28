import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { InsertService } from '../insert.service';
import { FormGroup,FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';
import { birdsales } from '../Models/birdsales.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birds-sales',
  templateUrl: './birds-sales.component.html',
  styleUrls: ['./birds-sales.component.css']
})
export class BirdsSalesComponent implements OnInit,OnDestroy{
  formdata;
  Birdsales:birdsales[];
  searchdata;
  searchid;
  row='';
  id=0;
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild("test") d;
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
    })
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
    this.Getbirdsales();
  }

  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id);
    }
  }
  birdsale(data){
    this.service.birdsaleservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data Submitted");
        this.formdata.reset();
        this.Getbirdsales();
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

  Getbirdsales(){
    this.crudservice.birdsaleservice().subscribe((response)=>{
      this.Birdsales=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchbirdsales(data){
    this.destroyinterval();
    this.service.searchbirdsalesservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Birdsales=response.result;
        this.searchdata.reset();
      }
      else{
        this.Birdsales=response.result;
        this.row="No Data Exist";
        this.searchdata.reset();
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchiddata(data){
    this.id=setInterval(()=>{
      if(!this.m.nativeElement.value){
        this.Getbirdsales();
        this.row='';
      }
    },500);
    this.service.searchidservice(data).subscribe((response)=>{
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

  destroyinterval(){
    if(this.id){
      clearInterval(this.id);
    }
  }

  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatedbirdservice(this.data).subscribe((response)=>{
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
    this.mainservice.Updatebirdsalesservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/BirdsSales']);

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
