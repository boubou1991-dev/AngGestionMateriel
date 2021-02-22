import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LoginComponent } from './login/login.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { OperationComponent } from './operation/operation.component';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {component:ContactsComponent,  path:'contact'},
  {component:NewContactComponent,path:'newContact'},
  {component:EditContactComponent,path:'editContact/:id'},
  //{redirectTo:'/contact',path:'',pathMatch:'full'},
  //{path:'',pathMatch:'full',redirectTo:'stock'},
{path:'',pathMatch:'full',redirectTo:'login'},
{path:'produit',component:ProduitComponent},
{path:'login',component:LoginComponent},
{path:'stock',component:StockComponent},
{path:'categorie',component:CategorieComponent},
{path:'fournisseur',component:FournisseurComponent},
{path:'operation',component:OperationComponent},
{path:'user',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
