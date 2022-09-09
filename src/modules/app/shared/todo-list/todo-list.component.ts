import { Component, Input, OnInit } from "@angular/core";
import { CommmunicationService } from "src/services/commmunication.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormModalService } from "src/services/form-modal.service";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  @Input() listName: string = "";
  currentList = [];
  constructor(
    private communicationService: CommmunicationService,
    private router: Router,
    private formModalService: FormModalService
  ) {}

  handleRoute(e) {
    if (this.listName.toLowerCase() === "to-do") {
      this.router.navigate(["add-item"]);
    } else if (this.listName.toLowerCase() === "in-progress") {
      // this.formModalService.openModal();
      this.formModalService.toggleModal();
    } else if (this.listName.toLowerCase() === "completed") {
    }
  }

  ngOnInit() {
    this.currentList = this.communicationService.getItem(
      this.listName.toLowerCase()
    );
    this.handleNotification(this.listName.toLowerCase());
  }

  handleNotification(type) {
    if (type === "to-do") {
      this.communicationService.toDoItemsSubj.subscribe((list) => {
        this.currentList = list;
      });
    } else if (type === "in-progress") {
      this.communicationService.inProgressItemsSubj.subscribe((list) => {
        this.currentList = list;
      });
    }
    if (type === "completed") {
      this.communicationService.completedItemsSubj.subscribe((list) => {
        this.currentList = list;
      });
    }
  }
}
