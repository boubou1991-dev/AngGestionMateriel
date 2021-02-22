import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactService } from './services/contact-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ErrorloginComponent } from './errorlogin/errorlogin.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { OperationComponent } from './operation/operation.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { StockComponent } from './stock/stock.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CategorieService } from './services/categorie.service';
import { FournisseurService } from './services/fournisseur.service';
import { LoginService } from './services/login.service';
import { OperationService } from './services/operation.service';
import { ProduitService } from './services/produit.service';
import { StockDispoService } from './services/stock-dispo.service';
import { StockService } from './services/stock.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewContactComponent,
    EditContactComponent,
    CategorieComponent,
    ErrorloginComponent,
    FournisseurComponent,
    LoginComponent,
    NavbarComponent,
    NavbarMenuComponent,
    OperationComponent,
    ProduitComponent,
    ProduitListComponent,
    StockComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ContactService,CategorieService,FournisseurService,LoginService,OperationService,ProduitService
  ,StockDispoService,StockService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
