import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url du backend
  URL=" http://localhost:3000/users"
  httpOPtions={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>(this.URL);
  }

  getUserById(id:number){}

  addUser(u:User){
    return this.http.post<User>(this.URL, u, this.httpOPtions);
  }

  updateUser(id:number, u:User){}

  deleteUser(id:string){
    let URL2= this.URL + "/"+ id;
    return this.http.delete<User>(URL2);
  }

}
