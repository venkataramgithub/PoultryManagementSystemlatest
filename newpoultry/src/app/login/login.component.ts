import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  constructor(private route:Router) { }
  ngOnInit() {
    this.formdata=new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")
    });
  }

  login(data){
    if(data.username=="admin" && data.password=="admin123"){
      this.route.navigate(["/navbar"])
      this.storelogin(data.username);
    }
    else{
      alert("Username and password are incorrect");
    }
  }
  storelogin(id){
    sessionStorage.setItem("adminid",id);
  } 
}
