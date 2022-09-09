import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { dummyInProgress, dummyTodo, ListItem } from 'src/models/listItem';
@Injectable({
  providedIn: 'root'
})
export class CommmunicationService {

  constructor() {

  }
  public toDo : ListItem[] = dummyTodo;
  public inProgress : ListItem[] = dummyInProgress;
  public completed : ListItem[] = [];
  public toDoItemsSubj = new Subject<any>();
  public inProgressItemsSubj = new Subject<any>();
  public completedItemsSubj = new Subject<any>();
  public totalItems = dummyTodo.length+dummyInProgress.length;
  addItem(item:ListItem , type:string){
    this.totalItems++;
    return new Promise((res,rej)=>{
      item.id = this.totalItems;
      switch(type){
        case "to-do" : {
          this.toDo.push(item);
          this.toDoItemsSubj.next(this.toDo);
          res(item);
          return;
        }
        case "in-progress" : {
          this.inProgress.push(item);
          this.inProgressItemsSubj.next(this.inProgress);
          res(item);
          return;
        }
        case "completed" : {
          this.completed.push(item);
          this.completedItemsSubj.next(this.completed);
          res(item);
          return;
        }
        default : {
          rej("No such type");
          return
        }
      }
    })
    
  }

  notify(type,value){
    
  }

  removeItem(id:number, type:string){
    return new Promise((res,rej)=>{
      switch(type){
        case "to-do" : {
          this.toDo = this.toDo.filter(item => item.id != id);
          this.toDoItemsSubj.next(this.toDo);
          res(this.toDo);
          return;
        }
        case "in-progress" : {
          this.inProgress = this.inProgress.filter(item => item.id != id);
          res(this.inProgress);
          this.inProgressItemsSubj.next(this.inProgress);
          return;
        }
        case "completed" : {
          this.completed = this.completed.filter(item => item.id != id);
          res(this.completed);
          this.completedItemsSubj.next(this.completed);
          return;
        }
        default : {
          rej("No such type");
          return
        }
      }
    })
    
  }

  getItem(type:string){
    switch(type){
      case "to-do":{
        return this.toDo;
      }
      case "in-progress":{
        return this.inProgress;
      }
      case "completed":{
        return this.completed;
      }
      default : {
        return [];
      }
    }
  }
}
