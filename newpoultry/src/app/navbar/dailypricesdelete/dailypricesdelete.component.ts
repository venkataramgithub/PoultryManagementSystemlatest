import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dailypricesdelete',
  templateUrl: './dailypricesdelete.component.html',
  styleUrls: ['./dailypricesdelete.component.css']
})
export class DailypricesdeleteComponent implements OnInit {
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
    this.mainservice.deletedailypricesservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/DailyPrices']);
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
