import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedpurchasedelete',
  templateUrl: './feedpurchasedelete.component.html',
  styleUrls: ['./feedpurchasedelete.component.css']
})
export class FeedpurchasedeleteComponent implements OnInit {
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
    this.mainservice.deletefeepurchaseservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/FeedPurchase']);
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
