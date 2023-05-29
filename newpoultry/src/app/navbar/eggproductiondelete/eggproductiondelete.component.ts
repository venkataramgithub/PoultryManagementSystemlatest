import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eggproductiondelete',
  templateUrl: './eggproductiondelete.component.html',
  styleUrls: ['./eggproductiondelete.component.css']
})
export class EggproductiondeleteComponent implements OnInit {
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
    this.mainservice.deleteeggproductionservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/EggProduction']);
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
