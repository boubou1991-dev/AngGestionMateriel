import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
apiUrl="http://localhost:2000";
  constructor(private Http:HttpClient) { }

  findAll(){
    return this.Http.get(this.apiUrl+"/operations")
  }

  save(op:string){
    return this.Http.get(this.apiUrl+"/InsertOP/"+op)
  }

  updateQuantity(link:string){
  return this.Http.get(this.apiUrl+"/updateQuantity/"+link)
  }
}
