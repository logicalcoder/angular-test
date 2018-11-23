import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  getUser(id: String): Observable<User> {
    return this.http.get<User>('api/users/' + id);
  }

  addUser(user: User): void{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 

    let options = {
      headers: httpHeaders
    }; 
    
    this.http.post('api/users', user, options).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
