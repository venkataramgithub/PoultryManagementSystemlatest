import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  public getupdatedataservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdateeggsalesapi",data);
  }
  public Updateeggsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updateeggsalesapi",data);
  }
  public getupdatedeggservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdateeggsproductionapi",data);
  }
  public Updateeggproductionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updateeggproductionapi",data);
  }
  public getupdatedbirdservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatebirdproductionapi",data);
  }
  public Updatebirdsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatebirdsalesapi",data);
  }
  public getupdatedbirdpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatebirdpurchaseapi",data);
  }
  public Updatebirdpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatebirdpurchaseapi",data);
  }
  public getupdatemortalityservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatemortalityapi",data);
  }
  public Updatemortalityservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatemortalityapi",data);
  }
  public getupdatefeedpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatefeedpurchaseapi",data);
  }
  public Updatefeedpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatefeedpurchaseapi",data);
  }
}
