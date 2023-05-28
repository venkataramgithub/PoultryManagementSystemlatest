import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  public mortalityservice():Observable<any>{
    return this.http.get("http://localhost:3000/getmortalityapi");
  }

  public eggsalesservice():Observable<any>{
    return this.http.get("http://localhost:3000/geteggsalesapi");
  }

  public eggproductionservice():Observable<any>{
    return this.http.get("http://localhost:3000/geteggsproductionapi");
  }

  public birdsaleservice():Observable<any>{
    return this.http.get("http://localhost:3000/getbirdsalesapi");
  }

  public birdspurchaseservice():Observable<any>{
    return this.http.get("http://localhost:3000/getbirdspurchaseapi");
  }

  public feedpurchaseservice():Observable<any>{
    return this.http.get("http://localhost:3000/getfeedpurchaseapi");
  }

  public feedconsumptionservice():Observable<any>{
    return this.http.get("http://localhost:3000/getfeedconsumptionapi");
  }

  public salespersonservice():Observable<any>{
    return this.http.get("http://localhost:3000/getsalespersonapi");
  }

  public purchasepersonservice():Observable<any>{
    return this.http.get("http://localhost:3000/getpurchasepersonapi");
  }

  public payrollservice():Observable<any>{
    return this.http.get("http://localhost:3000/getpayrollapi");
  }

  public employeeservice():Observable<any>{
    return this.http.get("http://localhost:3000/getemployeeapi");
  }

  public dailypricesservice():Observable<any>{
    return this.http.get("http://localhost:3000/getdailypricesapi");
  }
}
