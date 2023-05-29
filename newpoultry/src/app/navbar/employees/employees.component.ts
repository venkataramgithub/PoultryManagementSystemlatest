import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from "../insert.service";
import { CrudService } from '../crud.service';
import { employee } from '../Models/employee.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  formdata;
  Employee:employee[];
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      employeename:new FormControl(""),
      phone:new FormControl(""),
      job:new FormControl(""),
      salary:new FormControl("")
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
    this.Getemployee();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
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
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdateemployeeservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        name:this.gettedupdatedata.Name,
        phone:this.gettedupdatedata.Phone,
        job:this.gettedupdatedata.Job,
        salary:this.gettedupdatedata.Salary,
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updateemployeeservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/Employees']);

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
