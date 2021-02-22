import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
apiUrl="http://localhost:4000/stock";
apiUrlProduit="http://localhost:2000/produits";
  constructor(private http:HttpClient) { }

  findAll(){
    //return this.http.get<Stock[]>(this.apiUrl)
    return this.http.get(this.apiUrlProduit)
  }

  
  findAll2(){
    return this.http.get<Stock[]>(this.apiUrl)
  //  return this.http.get(this.apiUrlProduit)
  }
  persist(stock:Stock){
    return this.http.post<Stock>(this.apiUrl,stock)
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`) 
  }
  
  update(stock:Stock){
    return this.http.put(`${this.apiUrl}/${stock.id}`,stock)
  }
}
