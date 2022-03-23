import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import contacts from '../../assets/json/contacts.json';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  searchText: string = '';
  url = "assets/json/contacts.json";
  contacts: any = [];

  @Output() chatEvent = new EventEmitter<object>();

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.getContactData();
  }

  showChat(cName:string, cImage:string){
    this.chatEvent.emit({
      contactName: cName,
      contactImage: cImage
    });
  }

  onSearch(){
    
    var tempResult: any[] = []; 
    this.contacts.forEach((element: { name: string; }) => {
      let position = element.name.toLowerCase().search(this.searchText);
      console.log(position)
      if(position > -1){
        tempResult.push(element);
      }
    });

    this.contacts = tempResult;
  
    if(this.searchText===''){
      this.getContactData();
    }
  }

  getContactData(){
    this.contactService.getContacts(this.url).subscribe(data => {
      this.contacts = data;
    });
  }

}
