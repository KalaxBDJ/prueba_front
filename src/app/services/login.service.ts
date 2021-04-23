import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http : HttpClient) 
  {

  }

  login(username : string , password : string )
  {
    return this.http.post("http://localhost:8080/valid",{username,password});
  }

  getUsers()
  {
    return this.http.get("http://localhost:8080/users");
  }

  update(id : number , desc : string , pais : string)
  {
    return this.http.patch("http://localhost:8080/update",{id , desc , pais});
  }
}
