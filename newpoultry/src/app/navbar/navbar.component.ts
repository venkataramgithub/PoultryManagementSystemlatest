import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
    this.checklogin();
  }

  checklogin(){
    if(sessionStorage.length==0){
      this.route.navigate(["/"]);
    }
  }
  logout(){
    sessionStorage.clear();
    this.route.navigate(["/"]);
  }
}
