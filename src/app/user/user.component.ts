import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers:any;
myUser:User={iduser:1,prenom:'',login:'',pwd:'',type:''}
mySelect:any=[{"nom":"Administrateur"},{"nom":"Gestionnaire"}];
  constructor(public http:HttpClient,public userService:UserService) {
   // this.myUser={} as User;
   }

  ngOnInit() {
    this.getUsers();
  }
  
  saveUserData(){
    var dataTosend={prenom:this.myUser.prenom,login:this.myUser.login,pwd:this.myUser.pwd,type:this.myUser.type};
   
    var url="http://localhost:2000/insertUtilisateur/";
    this.http.post(url,{data:JSON.stringify(dataTosend)},
    {headers:new HttpHeaders({"content-Type":"application/json"})})
    .subscribe((data)=>{
   alert(data);
    })
    
  }


  getUsers(){
    this.userService.findAll()
    .subscribe(data=>this.listUsers=data)
  }

  createUser(myUser:User){
    this.saveUserData();
console.log("Compte User:",myUser);

  }

  updateUser(myUser:User){
    let id:any=this.myUser.iduser;
  this.userService.update(id,myUser)
  .subscribe(()=>{
    alert('Mise à jour avec Succès...');
  })
  console.log("ID user update:"+this.myUser.iduser);
  
  }

  SelectUser(user:User){
    
this.myUser=user;
console.log("user:",this.myUser);

  }

  deleteUser(c:any=User){
   console.log("I duser:"+c.iduser);
   this.userService.delete(c.iduser)
   .subscribe(()=>{
     console.log('suppression effectuée...');  
    })
  }

}
