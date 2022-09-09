import { Component, OnInit,OnDestroy ,ViewChild, ElementRef } from '@angular/core';
import { ListItem } from 'src/models/listItem';
import { CommmunicationService } from 'src/services/commmunication.service';
import { FormModalService } from 'src/services/form-modal.service';

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit{
  modalState : boolean = false;
  todoList : ListItem[] = [];
  itemId :string ;
  category = "";

  constructor(
    private formModalService : FormModalService,
    private communicationService : CommmunicationService
  ){
    
  }
  
  ngOnInit(): void {
    this.todoList = this.communicationService.toDo;
    this.communicationService.toDoItemsSubj.subscribe((list)=>{
      this.todoList = list;
    })
    let subs = this.formModalService.formModalState.subscribe(data => {
      this.modalState=data;
    })
  }
  ngOnChange(){
    
  }

  handleSubmit(event){

    const numId =  parseInt(this.itemId);
    let item = this.todoList.find(item => item.id === numId);
    this.communicationService.removeItem(numId,"to-do").then((list : ListItem[])=>{
      this.todoList = list;
    });
    this.communicationService.addItem(item,this.category).then((res)=>{
      this.closePopup();
    });
  }

  closePopup(){
    this.formModalService.toggleModal();
  }
}
