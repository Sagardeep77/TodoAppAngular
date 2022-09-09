import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from "./components/header/header.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { TodoListComponent } from "./shared/todo-list/todo-list.component";
import { TodoListItemComponent } from "./shared/todo-list-item/todo-list-item.component";
import { CommmunicationService } from "src/services/commmunication.service";
import { FormListItemComponent } from "./components/form-list-item/form-list-item.component";
import { FileUploadService } from "src/services/file-upload.service";
import { FormsModule } from "@angular/forms";
import { FormModalComponent } from "./components/form-modal/form-modal.component";
import { FormModalService } from "src/services/form-modal.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    OverviewComponent,
    TodoListComponent,
    TodoListItemComponent,
    FormListItemComponent,
    FormModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CommmunicationService, FileUploadService,FormModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
