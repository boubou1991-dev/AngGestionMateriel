import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
apiUrl="http://localhost:2000/categories";
  constructor(public http:HttpClient) { }

  findAll(){
    return this.http.get(this.apiUrl)
  }
}
