import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Model/Contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService:ContactService,private router:Router) { }
pageContacts:any;
motCle:string="";

  ngOnInit(): void {
    this.getAllContact();
  }


getAllContact(){
  this.contactService.findAll()
  .subscribe(data=>{
    this.pageContacts=data;
    console.log(data);
    
  })
}
chercher(){

}

onDeleteContact(c :Contact){
  this.contactService.delete(c.id)
  .subscribe(()=>{
    alert('Contact Supprimé');
    this.getAllContact();
  })
}
onEditContact(id:number){
this.router.navigate(['editContact',id]);
}

}
