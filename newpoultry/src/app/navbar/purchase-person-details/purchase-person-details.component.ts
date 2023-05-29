import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { salespersondetails } from '../Models/salespersondetails.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-person-details',
  templateUrl: './purchase-person-details.component.html',
  styleUrls: ['./purchase-person-details.component.css']
})
export class PurchasePersonDetailsComponent implements OnInit,OnDestroy {
  formdata;
  searchdata;
  id=0;
  row='';
  Salespersondetails:salespersondetails[];
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild('destroy',{static:false}) m;
  ngOnInit() {
    this.checklogin();
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
    this.Getpurchaseperson();
    this.id=setInterval(()=>{
      if(!this.m.nativeElement.value){
        this.Getpurchaseperson();
        this.row='';
      }
    },500);
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
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
      if(response.result.length>0){
        this.Salespersondetails=response.result;
        this.row='';
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

  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id);
    }
  }
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatepurchasepersonservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        firstname:this.gettedupdatedata.FirstName,
        lastname:this.gettedupdatedata.LastName,
        phone:this.gettedupdatedata.Phone,
        state:this.gettedupdatedata.State,
        location:this.gettedupdatedata.Location,
        organizationname:this.gettedupdatedata.OrganizationName
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatepurchasepersonservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/PurchasePerson']);

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
