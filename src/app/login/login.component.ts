import { Component, OnInit, AbstractType, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList:any;
  etat:any;
  loginconnect:any;
  constructor(public router:Router,public userService:UserService) { }
@Input() myLogin={utilisateur:'',motpasse:''}

  ngOnInit() {
    this.getUser();
  }

getUser(){
  this.userService.findAll()
  .subscribe(data=>this.userList=data)
}

resetUser(){
  this.myLogin.motpasse='';
  this.myLogin.utilisateur="";
}
  goToLogin(){
    console.log('Login OK');
    
 this.getUser();

    this.userList.forEach((value:any) => {
      
      if (value.login == this.myLogin.utilisateur && value.pwd == this.myLogin.motpasse) {
        this.userList = value;
        this.etat=true;
        console.log('login connecté:', value.login);
        console.log('password connecté:', value.pwd);
       this.loginconnect=value.login;
        this.router.navigate(['/stock']);
      }
   
    });
if(!this.etat){
  alert("Login ou Mot de passe Incorrect");
  this.resetUser();
}

   /// this.router.navigate(['/stock']) 
  //  this.router.navigate(['/employees-list'])
  }

}
