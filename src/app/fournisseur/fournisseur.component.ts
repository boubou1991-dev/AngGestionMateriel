import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../models/stock';
import { Fournisseur } from '../models/fournisseur';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  /*
  myFournisseur: Stock = {
    fournisseur: '', pays: '', type: 'Fournisseur'
  }
  */
 myfournisseur:Fournisseur={
   nomFournisseur:'',pays:''
 };
lesFournisseurs:any;
nomParametres:any;
  fournisseurs: Stock[] = [];
  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit() {
    this.getFournisseur();
  }


  getFournisseur() {
 this.fournisseurService.findAll()
 .subscribe((data)=>{
this.lesFournisseurs=data;
 })
  }

  AddFournisseur() {
  this.nomParametres=this.myfournisseur.nomFournisseur+"/"+this.myfournisseur.pays;
this.fournisseurService.save(this.nomParametres)
.subscribe(()=>{
  console.log("succès..");
  alert("Fournisseur Inséré")
  this.resetFournisseur();
  
})
  }

  deleteFournisseur(fournisseur:Fournisseur){
    let id:any=fournisseur.idFournisseur;
   this.fournisseurService.delete(id)
   .subscribe(()=>{
     alert("Fournisseur Supprimé...");
   });
   
   
  }

  UpdateFournisseur(myfournisseur:Fournisseur){
    let id:any=this.myfournisseur.idFournisseur;
    this.fournisseurService.merge(id,myfournisseur)
    .subscribe(()=>{
    alert('Mis à jour Fournisseur avec succès...');
    });
    console.log("id est :"+id);
  }

  selectFournisseur(fournisseur:Fournisseur){
    this.myfournisseur=fournisseur;
  }

resetFournisseur(){
this.myfournisseur={
  nomFournisseur:'',
  pays:''
}
}



}
