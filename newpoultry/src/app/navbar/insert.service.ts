import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }
 
  public dailypricesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/dailypricesapi",data);
  }

  public employeeservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/employeeapi",data);
  }

  public payrollservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/payrollapi",data);
  }

  public salespersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/salespersonapi",data);
  }

  public purchasepersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/purchasespersonapi",data);
  }

  public mortalityservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/mortalityapi",data);
  }

  public feedpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/feedpurchaseapi",data);
  }

  public feedconsumptionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/feedconsumptionapi",data);
  }

  public eggproductionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/eggproductionapi",data);
  }

  public eggsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/eggsalesapi",data);
  }

  public birdsaleservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/birdssaleapi",data);
  }

  public birdspurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/birdspurchaseapi",data);
  }

  public Searchsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchsalespersonapi",data);
  }

  public searcheggsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searcheggsalesapi",data);
  }

  public searcheggproductionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searcheggproductionapi",data);
  }

  public searchbirdsalesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchbirdsalesapi",data);
  }
  public searchidservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchidapi",data);
  }

   public searchbirdpurchaseservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchpurchaseidapi",data);
  }
  public searchpurchaseidservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchpurchaseapi",data);
  }
  public Searchpurchasepersonservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchpurchaspersoneapi",data);
  }
  public searchmoratalityservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchmortalityapi",data);
  }
  public searchpayrollservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchpayrollapi",data);
  }
  public searchdailypricesservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/searchdailypricesapi",data);
  }
  public getdailypricesservice():Observable<any>{
    return this.http.get("http://localhost:3000/getdashdailypricesapi");
  }
  public getbalancedetailsservice():Observable<any>{
    return this.http.get("http://localhost:3000/getbalancesapi");
  }
}
