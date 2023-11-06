import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  contacts: Contact[] = [];
  id?:number;
  name:string='';
  phone:string='';
  group?:Group=undefined;
  save(){
    if(this.id){
      this.update();
    }
    else{
      this.create();
    }
    this.clean();
  }
  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  create(){
    let contact:Contact={
      id:this.generateRandomNumber(0,100),
      name:this.name,
      phone:this.phone,
      group:this.group,
    }
    this.contacts.push({...contact})
  }
  update(){
    const index = this.contacts.findIndex(c => c.id === this.id);
    if (index >= 0 && index < this.contacts.length) {
      let contact:Contact={
        id:this.id,
        name:this.name,
        phone:this.phone,
        group:this.group,
      }
      this.contacts[index]=({...contact})
    }
  }
  clean(){
    this.id=undefined;
    this.name='';
    this.phone='';
    this.group=undefined;
  }
  editItem(id?:number){
    const contact=this.contacts.find(contato => contato.id === id);
    if(contact){
      this.id=contact!.id;
      this.name=contact!.name||'';
      this.phone=contact!.phone||'';
      this.group=contact.group;
    }
  }
  deleteItem(id?:number){
    const index = this.contacts.findIndex(c => c.id === id);
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
    this.clean();
  }
}
