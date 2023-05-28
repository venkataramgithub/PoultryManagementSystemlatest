import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from "../insert.service";
import { CrudService } from '../crud.service';
import { employee } from '../Models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  formdata;
  Employee:employee[];
  constructor(private service:InsertService,private crudservice:CrudService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      employeename:new FormControl(""),
      phone:new FormControl(""),
      job:new FormControl(""),
      salary:new FormControl("")
    });
    this.Getemployee();
  }

  employee(data){
    this.service.employeeservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data submitted");
        this.Getemployee();
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

  Getemployee(){
    this.crudservice.employeeservice().subscribe((response)=>{
      this.Employee=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }
}
