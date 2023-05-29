import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedconsumptiondelete',
  templateUrl: './feedconsumptiondelete.component.html',
  styleUrls: ['./feedconsumptiondelete.component.css']
})
export class FeedconsumptiondeleteComponent implements OnInit {
  deleteid;
  data={};
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
    this.mainservice.deletefeedconsumptionservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/FeedConsumption']);
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
