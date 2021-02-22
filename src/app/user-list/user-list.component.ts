import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUsers:any;
  myUser:User ={prenom:'',login:'',pwd:'',type:''}
  constructor(public userService:UserService,public http:HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(){
    this.userService.findAll()
    .subscribe(data=>this.listUsers=data)
  }

  updateUserData(){
    var dataTosend={iduser:2,prenom:'Modif Yaya',login:this.myUser.login,pwd:this.myUser.pwd,type:this.myUser.type};
    //var dataTosend={nomproduit:"aaaa",categorie:"bbbb",quantite:33,responsable:"ccc",motif:"dddd"};
   
    var url="http://localhost:2000/updateUtilisateur";
    this.http.put(url,{data:JSON.stringify(dataTosend)},
    {headers:new HttpHeaders({"content-Type":"application/json"})})
    .subscribe((data)=>{
   alert(data);
    })
    
  }

  SelectUser(user:User){
    this.updateUserData();
this.myUser=user;
console.log("user:",this.myUser);

  }
  deleteUser(){
    
  }

}
