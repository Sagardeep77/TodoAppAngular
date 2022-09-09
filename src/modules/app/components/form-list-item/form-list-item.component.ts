import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from "@angular/common";
import { ListItem } from 'src/models/listItem';
import { CommmunicationService } from 'src/services/commmunication.service';
import { FileUploadService } from 'src/services/file-upload.service';

@Component({
  selector: 'form-list-item',
  templateUrl: './form-list-item.component.html',
  styleUrls: ['./form-list-item.component.scss']
})
export class FormListItemComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; 
  file: File = null; 

  constructor(
    // private fileUploadService:FileUploadService,
    private communicationService:CommmunicationService,
    private location:Location
    ) { }

  ngOnInit() {
  }

  
  handleBack(){
    this.location.back();
  }

  handleSubmitForm(event,formValue){
    event.preventDefault();
    const {title,description,priority} = formValue;
    const item : ListItem = {
      id : 0,title,description,priority,image:{
        format : "",
        data : ""
      }
    }
    this.communicationService.addItem(item,"to-do").then(res => {
      this.handleBack();
    }).catch(this.handleError)
  }

  handleError(e){

  }
 
  onUpload() {
    this.loading = !this.loading;
    // this.fileUploadService.upload(this.file).subscribe(
    //     (event: any) => {
    //         if (typeof (event) === 'object') {

    //             // Short link via api response
    //             this.shortLink = event.link;

    //             this.loading = false; // Flag variable 
    //         }
    //     }
    // );
}
}
