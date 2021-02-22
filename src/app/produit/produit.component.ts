import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';
import { ProduitService } from '../services/produit.service';
import { Caterogie } from '../models/categorie';
import { CategorieService } from '../services/categorie.service';
import { FournisseurService } from '../services/fournisseur.service';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 // Produits: Stock[] = [];
 Produits:any;
 listCategorie:any;
 Listproduit: any;
 listFournisseur:any;
 nameProductUrl:any;
 stockactuel: number = 0;
  stockFinale:number=0;
  @Input() myAchat = { depotQuantite: 0 }

  showForm = false;

  myproduct: Stock = {
    id:1,nomProduit: '', type: 'Produit', categorie: '', fournisseur: '', quantite: 0, date: new Date(),depotQuantite:0
  }

  constructor(private produitService: ProduitService,public categorieService:CategorieService,
    public fournisseurService:FournisseurService, public OperationService:OperationService) { }

  ngOnInit() {
    this.getProduit();
    this.getCategorie();
    this.getFournisseur();
    // this.getListProduit();
  }
 /** Code avec Back End Node Js */

 getProduit(){
   this.produitService.findAll()
   .subscribe(data=>this.Listproduit= data)
 }

 getFournisseur(){
   this.fournisseurService.findAll()
   .subscribe(data=>this.listFournisseur=data)
 }
 getCategorie(){
this.categorieService.findAll()
.subscribe(data=>
  this.listCategorie=data)
 }

 searchQuantity(){
  this.produitService.findOne(this.myproduct.nomProduit)
  .subscribe(data=>{
    this.nameProductUrl=data;
    console.log("url product:"+this.nameProductUrl);
  });
}

UpdateQuantiteLocal() {
  this.nameProductUrl.forEach((value:any) => {
   if(value.nomProduit == this.myproduct.nomProduit){
      this.stockactuel =value.quantite;
    this.stockFinale= this.stockactuel + this.myAchat.depotQuantite;
     console.log('stock finale:'+this.stockFinale+' quantity avtuelle:'+ this.stockactuel+ 'nom produit:'+value.nomProduit);
          this.OperationService.updateQuantity(value.nomProduit+'/'+this.stockFinale)
           .subscribe(()=>{
             console.log('quantity updated....')
           })

     //this.showForm = false;
    }   
  });

}


  resetProduct() {
  
      this.myproduct.nomProduit='';
      this.myproduct.categorie= '';
      this.myproduct.quantite= 0;
      this.myproduct.fournisseur='',
      this.myproduct.date=new Date();
    }



  persistProduit() {
    let requete=this.myproduct.nomProduit+"/"+this.myproduct.quantite+"/serie/"+this.myproduct.date+"/1/"+this.myproduct.categorie;
   if(this.myproduct.nomProduit ===""){
alert("Remplir tous les champs...");
   }else{
    this.produitService.save(requete)
    .subscribe(()=>{
      console.log('insert product..');
      
     
    })
    alert('produit Inséré...');
    this.resetProduct();
   }
 
  }

  EditProduit(produit:any) {

    this.myproduct = produit;
    console.log("Produit selectionné:",this.myproduct);
    
  }

  deleteProduit(c:Stock){
    console.log("I duser:"+c.id);
    /*
    this.produitService.delete(c.id)
    .subscribe(()=>{
      console.log('suppression effectuée...');  
     })
     */
   }

  depotProduit(myproduct:Stock) {
   
    this.searchQuantity()
    this.UpdateQuantiteLocal();
    
  }

  updateProduit() {
  }
  

}

