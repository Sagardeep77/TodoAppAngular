import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormModalService {

  public formModalState =new Subject<boolean>();  
  constructor() { }

  private showModal = false;
  openModal(){
    this.showModal = true
  }

  closeModal(){
    this.showModal = false;
  }

  toggleModal(){
    this.showModal = !this.showModal;
     this.formModalState.next(this.showModal);
  }

  getModalState(){
    return this.showModal;
  }
}
