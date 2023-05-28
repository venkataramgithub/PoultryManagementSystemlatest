import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { InsertService } from '../insert.service';
import { CrudService } from '../crud.service';
import { feedpurchase } from '../Models/feedpurchase.model';
import { MainService } from '../../main.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-purchase',
  templateUrl: './feed-purchase.component.html',
  styleUrls: ['./feed-purchase.component.css']
})
export class FeedPurchaseComponent implements OnInit {
  formdata;
  Feedpurchase:feedpurchase[];
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private service:InsertService,private crudservice:CrudService,private mainservice:MainService,private route:ActivatedRoute,private router:Router) { }
  @ViewChild('test') d;
  @ViewChild('test1') d1;
  ngOnInit() {
    this.formdata=new FormGroup({
      quantity:new FormControl(""),
      price:new FormControl(""),
      date:new FormControl("")
    });
    this.route.paramMap.subscribe(params=>{
      this.sl=params.get('id');
      if(this.sl){
        this.d.nativeElement.style.display="block";
        this.d1.nativeElement.style.display="none";
        this.getupdatedata();
      }
      else{
        this.d.nativeElement.style.display="none";
        this.d1.nativeElement.style.display="block";
      }
    });
    this.Getfeedpurchase();
  }

  feedpurchase(data){
    this.service.feedpurchaseservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data Submitted");
        this.Getfeedpurchase();
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

  Getfeedpurchase(){
    this.crudservice.feedpurchaseservice().subscribe((response)=>{
      this.Feedpurchase=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatefeedpurchaseservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        quantity:this.gettedupdatedata.Quantity,
        price:this.gettedupdatedata.Price,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatefeedpurchaseservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/FeedPurchase']);

      }
      else{
        alert("Not Updated")
      }
    },
    (error)=>{
      alert(error.err);
    });
  }
}
