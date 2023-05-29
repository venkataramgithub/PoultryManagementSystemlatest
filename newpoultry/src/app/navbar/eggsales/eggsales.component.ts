import { Component, OnInit,} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { eggsales } from '../Models/eggsales.model';
import { Router,ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-eggsales',
  templateUrl: './eggsales.component.html',
  styleUrls: ['./eggsales.component.css']
})
export class EggsalesComponent implements OnInit{
  formdata;
  searchdata;
  Eggsales:eggsales[];
  gettedupdatedata:any;
  row='';
  id;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private route:ActivatedRoute,private mainservice:MainService,private router:Router) { }

  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      id:new FormControl(""),
      numberofeggs:new FormControl(""),
      amount:new FormControl(""),
      date:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl(""),
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
    this.Geteggsales();
   
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  eggsales(data){
    this.service.eggsalesservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.formdata.reset();
        this.Geteggsales();
      }
      else{
        alert("Data Not submitted");
        this.formdata.reset();
      }
    },
    (error)=>{
      alert(error.err);
      this.formdata.reset();
    })
  }

  Geteggsales(){
    this.crudservice.eggsalesservice().subscribe((response)=>{
      this.Eggsales=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searcheggsales(data){
    this.service.searcheggsalesservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Eggsales=response.result;
        this.searchdata.reset();
      }
      else{
        this.Eggsales=response.result;
        this.row="No Data Exist";
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }

  AllRows(){
    this.Geteggsales();
    this.row='';
  }

  getupdatedata(){
    this.data={id:this.id};
    this.mainservice.getupdatedataservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.id,
        numberofeggs:this.gettedupdatedata.NumberofEggs,
        amount:this.gettedupdatedata.Amount,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updateeggsalesservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/EggSales'])

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
