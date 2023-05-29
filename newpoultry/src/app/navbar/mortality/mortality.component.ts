import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { mortality } from '../Models/mortality.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mortality',
  templateUrl: './mortality.component.html',
  styleUrls: ['./mortality.component.css']
})
export class MortalityComponent implements OnInit {
  formdata;
  Mortality:mortality[];
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
      numberofdeaths:new FormControl(""),
      date:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
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
    this.Getmortality();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  mortality(data){
    this.service.mortalityservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.Getmortality();
        this.formdata.reset();
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

  Getmortality(){
    this.crudservice.mortalityservice().subscribe((response)=>{
      this.Mortality=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchmoratality(data){
    this.service.searchmoratalityservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Mortality=response.result;
        this.row="";
      }
      else{
        this.Mortality=response.result;
        this.row="No Data Exist";
      }
    },
    (error)=>{
      alert(error.err);
    })
  }
  AllRows(){
    this.Getmortality();
    this.row='';
  }
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatemortalityservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        numberofdeaths:this.gettedupdatedata.NumberofDeaths,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatemortalityservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/Mortality']);

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
