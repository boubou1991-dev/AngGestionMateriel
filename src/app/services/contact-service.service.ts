import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

apiUrl="http://localhost:8080/contacts";

findAll(){
return this.http.get(`${this.apiUrl}`);
}

findOne(id:number){
  return this.http.get(`${this.apiUrl}/${id}`);
}
save(c:Contact){
  return this.http.post(`${this.apiUrl}`,c);
}

delete(id:number){
  return this.http.delete(this.apiUrl+"/"+id);
}

update(c:Contact){
return this.http.put(this.apiUrl+"/"+c.id,c);
}
}
