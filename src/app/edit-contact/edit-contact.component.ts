import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Model/Contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:any=new Contact();
  idContact:any;
  constructor(private contactService:ContactService,private router:Router,private activedRoute:ActivatedRoute) {
    this.idContact=activedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.contactService.findOne(this.idContact)
    .subscribe(data=>{
      this.contact=data;
    })
  }
  
  updateContact(){
   this.contactService.update(this.contact)
   .subscribe(data=>{
     alert('Mise à jour effectué');
     console.log(data);
     
     this.router.navigate(['contact']);
   })
  }

  RetourAddContact(){
    this.contact=new Contact();
  }
  
}
