import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mortalitydelete',
  templateUrl: './mortalitydelete.component.html',
  styleUrls: ['./mortalitydelete.component.css']
})
export class MortalitydeleteComponent implements OnInit {
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
    this.mainservice.deletemortalityservice(this.data).subscribe((response)=>{
      if(response.submit==true){
        this.router.navigate(['/navbar/Mortality']);
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
