import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-eggsalesdelete',
  templateUrl: './eggsalesdelete.component.html',
  styleUrls: ['./eggsalesdelete.component.css']
})
export class EggsalesdeleteComponent implements OnInit {
  deleteid;
  data={};
  constructor(private route:ActivatedRoute,private mainservice:MainService,private router:Router) { }

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
    this.mainservice.deleteeggsalesservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/EggSales']);
      }
      else{
        alert("Not Deleted");
      }
    },
    (error)=>{
      alert(error.err);
    })
  }

}
