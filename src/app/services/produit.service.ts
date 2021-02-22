import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
apiUrl="http://localhost:2000";
  constructor(private Http:HttpClient) { }

  findAll(){
    return this.Http.get(this.apiUrl+"/produits")
  }

  findOne(nom:string){
   return this.Http.get(this.apiUrl+"/produits/"+nom)
  }

  save(nom:string){
    return this.Http.get(this.apiUrl+'/insertProduct/'+nom)
  }

  delete(id:number){
    return this.Http.get(this.apiUrl+"/DeleteProduits/"+id)
      }
    
}
