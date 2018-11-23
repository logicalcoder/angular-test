import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login (us: string, password: string) {
    const enco: any = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
  
    const body: any = new HttpParams()
      .set('username', us)
      .set('password', password)
      .set('submit', 'Login');
  
    return this.http.post('access',
      body.toString(),
      {
        headers: enco, withCredentials: true
      }
    );
  }
}
