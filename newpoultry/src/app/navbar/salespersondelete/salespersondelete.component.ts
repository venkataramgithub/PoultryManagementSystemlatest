import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salespersondelete',
  templateUrl: './salespersondelete.component.html',
  styleUrls: ['./salespersondelete.component.css']
})
export class SalespersondeleteComponent implements OnInit {
  deleteid;
  data={};
  constructor(private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.deleteid=params.get('deleteid');
    });
    if(this.deleteid){
      this.deleterow();
    }
  }
  deleterow(){
    this.data={deleteid:this.deleteid};
    this.mainservice.deletesalespersonservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/SalesPerson']);
      }
      else{
        alert("Not Deleted");
        this.router.navigate(['./navbar/SalesPerson']);
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
}
