import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl="http://localhost:2000/users";
apiUrlDelete="http://localhost:2000"
  constructor(public http:HttpClient) { }

  findAll(){
    return this.http.get(this.apiUrl)
  }

  delete(id:number){
//return this.http.delete(this.apiUrl+"/"+id)
return this.http.get(this.apiUrlDelete+"/deleteUser/"+id)
  }

update(id:number,user:User){
  return this.http.get(this.apiUrlDelete+"/updateUser/"+id+"/"+user.prenom+"/"+user.login+"/"+user.pwd+"/"+user.type)
}



}
