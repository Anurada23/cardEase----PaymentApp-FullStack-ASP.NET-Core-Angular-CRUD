import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  constructor(private http: HttpClient) { }

  url: string = environment.apiBaseUrl + "/PaymentDetail"



  //refreshList(): Observable <any> {
  //  return this.http.get(this.url);

  //}

  paymentDetailsList: any[] = [];  // store records here

  refreshList(): Observable<any> {
    return this.http.get(this.url).pipe(
      tap((data: any) => {
        this.paymentDetailsList = data;  // store data
      })
    );
  }

  postPaymentDetail(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  putPaymentDetail(id: number, data: any): Observable<any> {
    return this.http.put(this.url + '/' + id, data);
  }

  deletePaymentDetail(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  

}
