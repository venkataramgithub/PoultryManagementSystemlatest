import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { expense } from '../Models/expense.model';

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
  constructor(private service:InsertService,private crudservice:CrudService) { }

  ngOnInit() {
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
    this.Getpayroll();
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
}
