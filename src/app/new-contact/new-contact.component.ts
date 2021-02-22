import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Model/Contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
mode:number=1;
  constructor(private contactService:ContactService,private router:Router) { }
  contact:Contact=new Contact();
  ngOnInit(): void {
  }

  addContact(){
    this.contactService.save(this.contact)
    .subscribe((data)=>{
      alert('Contact Sauvegardé');
     // this.contact=data;
      console.log(this.contact);
      this.mode=2;
    })
  }

  RetourAddContact(){
    this.mode=1;
this.router.navigate(['newContact']);
  }

}
