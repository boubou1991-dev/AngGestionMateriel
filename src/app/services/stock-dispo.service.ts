import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDispoService {
apiUrl="http://localhost:2000/stock";
  constructor(private Http:HttpClient) { }

findAll(){
  return this.Http.get(this.apiUrl)
}

}
