import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedelete',
  templateUrl: './employeedelete.component.html',
  styleUrls: ['./employeedelete.component.css']
})
export class EmployeedeleteComponent implements OnInit {
  data={};
  deleteid;
  constructor(private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.deleteid=params.get('deleteid');
      if(this.deleteid){
        this.deleterow();
      }
    });
  }

  deleterow(){
    this.data={deleteid:this.deleteid};
    this.mainservice.deleteemployeeservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/Employees']);
      }
      else{
        alert("Not Deleted");
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
}
