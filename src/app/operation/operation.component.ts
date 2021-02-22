import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { OperationService } from '../services/operation.service';
import { ProduitService } from '../services/produit.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  showForm: any = false;

  listProduits: any;
  nameProductUrl: any;
  searchText = "";
  quant: number = 0;
  stockactuel: number = 0;
  stockFinale: number = 0;
  // operations: Stock[] = [];
  operations: any;
  query: string = "";
  dateCourant = new Date();
  myOperation: Stock = {
    nomProduit: '', quantite: 0, responsable: '', libelle: '', type: 'Operations', date: new Date()
  };

  constructor(public http: HttpClient, public OperationService: OperationService, public productService: ProduitService) { }
  ngOnInit() {
    this.getOperation();
    this.getListProduit();
    this.searchQuantity();
  }

  searchQuantity() {
    this.productService.findOne(this.myOperation.nomProduit)
      .subscribe(data => {
        this.nameProductUrl = data;
        console.log("url product:" + this.nameProductUrl);
      });
  }

  getOperation() {
    this.OperationService.findAll()
      .subscribe(data =>
        this.operations = data
      )
  }

  getListProduit() {
    this.productService.findAll()
      .subscribe(data =>
        this.listProduits = data)
  }

  saveOperation() {
    let query = 'Retrait Stock/boubou/2/' + this.myOperation.date + '/6/2020/'
      + this.myOperation.responsable + '/' + this.myOperation.libelle + '/0/' + this.myOperation.quantite + '/' + this.stockFinale + '/' + this.myOperation.nomProduit + '/op/imei/3';
    this.OperationService.save(query)
      .subscribe(() => {
        console.log('operation effectuée....')
      })
    alert('Operation effectuée');

  }

  saveOperationRetour() {
    let query = 'Retour Stock/boubou/2/' + this.myOperation.date + '/6/2020/'
      + this.myOperation.responsable + '/' + this.myOperation.libelle + '/0/' + this.myOperation.quantite + '/' + this.stockFinale + '/' + this.myOperation.nomProduit + '/op/imei/3';
    this.OperationService.save(query)
      .subscribe(() => {
        console.log('operation effectuée....')
      })
    alert('Operation effectuée');

  }

  ResetOperation() {
    this.myOperation.nomProduit = '';
    this.myOperation.quantite = 0;
    this.myOperation.responsable = '';
    this.myOperation.libelle = '';
    this.myOperation.date = new Date;
  }

  UpdateQuantiteLocal() {

    this.nameProductUrl.forEach((value: any) => {

      if (value.nomProduit == this.myOperation.nomProduit) {
        this.stockactuel = value.quantite;
        this.stockFinale = this.stockactuel - this.myOperation.quantite;

        if (this.myOperation.nomProduit === "") {
          alert("Veuillez remplir tous les champs");
        } else {
          this.OperationService.updateQuantity(value.nomProduit + '/' + this.stockFinale)
            .subscribe(() => {
              console.log('quantity updated....')
            })

          this.showForm = false;
        }

      }


    });

  }
  UpdateQuantiteLocalRetour() {

    this.nameProductUrl.forEach((value: any) => {

      if (value.nomProduit == this.myOperation.nomProduit) {
        this.stockactuel = value.quantite;
        this.stockFinale = this.stockactuel + this.myOperation.quantite;
        // console.log('stock finale:'+this.stockFinale+' quantity avtuelle:'+ this.stockactuel+ 'nom produit:'+value.nomProduit);
        if (this.myOperation.nomProduit === "") {
          alert("Veullez remplir tous les Champs...");
        } else {
          this.OperationService.updateQuantity(value.nomProduit + '/' + this.stockFinale)
            .subscribe(() => {
              console.log('quantity updated....')
            })

          this.showForm = false;
        }

      }


    });

  }

  RetraitOperation(myOperation: any) {
    this.UpdateQuantiteLocal();
    this.saveOperation();
    this.ResetOperation();
  }

  RetourOperation(myOperation: any) {
    this.UpdateQuantiteLocalRetour();
    this.saveOperationRetour();
    this.ResetOperation();
  }

  searchOperation() {
    this.operations = this.operations.filter((data: any) => data.date.toLowerCase().includes(this.searchText.toLowerCase()));

    //   this.resultStock=this.resultStock.filter ((data:any)=>data.nomProduit.toLowerCase().includes (this.searchText.toLowerCase()));

  }

}
