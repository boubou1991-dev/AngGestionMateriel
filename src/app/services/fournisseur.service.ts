import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
apiUrl="http://localhost:2000";
  constructor(public http:HttpClient) { }

  findAll(){
    return this.http.get(this.apiUrl+"/fournisseur")
  }

  save(requete:string){
  return this.http.get(this.apiUrl+"/insertFournisseur/"+requete);
  }

  merge(id:number,fournisseur:Fournisseur){
    return this.http.get(this.apiUrl+"/updateFournisseur/"+id+"/"+fournisseur.nomFournisseur+"/"+fournisseur.pays);
  }
  delete(id:number){
return this.http.get(`${this.apiUrl}/deleteFournisseur/${id}`);
  }
}
