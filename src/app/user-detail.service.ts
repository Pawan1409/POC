import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  

  constructor(private http:HttpClient) { }

  getAllUserDetails():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/user')
  }

  addUserDetail(user):Observable<User[]>{
    return this.http.post<User[]>('http://localhost:3000/user',user,httpOptions)
  }

  deleteUserDetail(id):Observable<User[]>{
    return this.http.delete<User[]>('http://localhost:3000/user/'+id)
  }
}
