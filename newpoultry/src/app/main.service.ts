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
  public getupdatefeedconsumptionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatefeedconsumptioneapi",data);
  }
  public Updatefeedconsumptionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatefeedconsumptionapi",data);
  }
  public getupdatesalespersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatesalespersonapi",data);
  }
  public Updatesalespersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatesalespersonapi",data);
  }
  public getupdatepurchasepersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatepurchasepersonapi",data);
  }
  public Updatepurchasepersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatepurchasepersonapi",data);
  }
  public getupdatepayrollservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatepayrollapi",data);
  }
  public Updatepayrollservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatepayrollapi",data);
  }
  public getupdateemployeeservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdateemployeeapi",data);
  }
  public Updateemployeeservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updateemployeeapi",data);
  }
  public getupdatedailypricesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/getUpdatedailypricesapi",data);
  }
  public Updatedailypricesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/Updatedailypricesapi",data);
  }
  public deleteeggsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deleteeggsalesapi",data);
  }
  public deleteeggproductionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deleteeggproductionapi",data);
  }
  public deletebirdsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletebirdsalesapi",data);
  }
  public deletebirdpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletebirdpurchaseapi",data);
  }
  public deletemortalityservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletemortalityeapi",data);
  }
  public deletefeepurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletefeedpurchaseapi",data);
  }
  public deletefeedconsumptionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletefeedconsumptionapi",data);
  }
  public deletesalespersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletesalespersonapi",data);
  }
  public deletedailypricesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletedailypricesapi",data);
  }
  public deleteemployeeservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deleteemployeeapi",data);
  }
  public deletepayrollservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletepayrollapi",data);
  }
  public deletepurchasepersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/deletepurchasepersonapi",data);
  }
}
