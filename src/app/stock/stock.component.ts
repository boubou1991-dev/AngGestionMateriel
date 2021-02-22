import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { StockDispoService } from '../services/stock-dispo.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
resultStock:any;
Stock:any;
searchText="";
  constructor(private stockdispoService:StockDispoService) { }

  ngOnInit() {
    this.getStock();
  }
getStock(){
  this.stockdispoService.findAll()
  .subscribe(data=>this.resultStock=data
  // this.resultStock= this.Stock=data;
  
  )
}
searchStock(){
  //this.getStock();
  this.resultStock=this.resultStock.filter ((data:any)=>data.nomProduit.toLowerCase().includes (this.searchText.toLowerCase()));
}

}
