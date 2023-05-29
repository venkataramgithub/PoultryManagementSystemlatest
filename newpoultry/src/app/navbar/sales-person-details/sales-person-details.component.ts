import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { salespersondetails } from '../Models/salespersondetails.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild("destroy",{static:false}) m;

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
      search:new FormControl(""),
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
    this.GetSalesperson();
    this.id=setInterval(()=>{
     if(!this.m.nativeElement.value){
      this.GetSalesperson();
      this.row="";
     }
    },500);
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
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

  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatesalespersonservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      console.log(this.gettedupdatedata);
      this.updatedata={
        id:this.sl,
        firstname:this.gettedupdatedata.FirstName,
        lastname:this.gettedupdatedata.LastName,
        phone:this.gettedupdatedata.Phone,
        state:this.gettedupdatedata.State,
        location:this.gettedupdatedata.Location,
        organizationname:this.gettedupdatedata.OrganizationName
      };
      console.log(this.updatedata);
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatesalespersonservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/SalesPerson']);

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
