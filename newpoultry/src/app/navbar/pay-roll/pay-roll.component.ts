import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { expense } from '../Models/expense.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-roll',
  templateUrl: './pay-roll.component.html',
  styleUrls: ['./pay-roll.component.css']
})
export class PayRollComponent implements OnInit {
  formdata;
  Expense:expense[];
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
      employeename:new FormControl(""),
      expensename:new FormControl(""),
      amount:new FormControl(""),
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
    this.Getpayroll();
  }

  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  payroll(data){
    this.service.payrollservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data Submitted");
        this.Getpayroll();
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

  Getpayroll(){
    this.crudservice.payrollservice().subscribe((response)=>{
      this.Expense=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchpayroll(data){
    this.service.searchpayrollservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Expense=response.result;
        this.row='';
      }
      else{
        this.Expense=response.result;
        this.row="No Data Exist";
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
  AllRows(){
    this.Getpayroll();
    this.row='';
  }

  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatepayrollservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        employeename:this.gettedupdatedata.EmployeeName,
        expensename:this.gettedupdatedata.ExpenseName,
        amount:this.gettedupdatedata.Amount,
        date:this.gettedupdatedata.Date,
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatepayrollservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/PayRoll']);

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
