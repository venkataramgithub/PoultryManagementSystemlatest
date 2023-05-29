import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { eggsproduction } from '../Models/eggsproduction.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-egg-production',
  templateUrl: './egg-production.component.html',
  styleUrls: ['./egg-production.component.css']
})
export class EggProductionComponent implements OnInit {
  formdata;
  Eggsproduction:eggsproduction[];
  searchdata;
  row='';
  gettedupdatedata:any={};
  id;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      noofeggs:new FormControl(""),
      date:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
    });
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
      if(this.id){
        document.getElementById("eggsales").style.display="none";
        document.getElementById("eggsales-update").style.display="block";
        this.getupdatedata();
      }
      else{
        document.getElementById("eggsales").style.display="block";
        document.getElementById("eggsales-update").style.display="none";
      }
    });
    this.Geteggsproduction();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  eggproduction(data){
    this.service.eggproductionservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.Geteggsproduction();
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

  Geteggsproduction(){
    this.crudservice.eggproductionservice().subscribe((response)=>{
      this.Eggsproduction=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searcheggproduction(data){
    this.service.searcheggproductionservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Eggsproduction=response.result;
        this.searchdata.reset();
      }
      else{
        this.Eggsproduction=response.result;
        this.row="No Data Exist";
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }

  AllRows(){
    this.Geteggsproduction();
    this.row='';
  }

  getupdatedata(){
    this.data={id:this.id};
    this.mainservice.getupdatedeggservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.id,
        numberofeggs:this.gettedupdatedata.noofeggs,
        date:this.gettedupdatedata.date
      };
      console.log(this.updatedata);
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updateeggproductionservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/EggProduction']);

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
