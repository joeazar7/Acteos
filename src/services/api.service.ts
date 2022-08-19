import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  get(url:any): Observable<any> {
    return this.http.get(url).pipe(
      map((data: any) => {
        //handle api 200 response code here or you wanted to manipulate to response
        return data;
      }),
      catchError((error) => {
        // handle error
        if (error.status == 404) {
          //Handle Response code here
        }
        return throwError(error);
      })
    );
  }

 
  
}
