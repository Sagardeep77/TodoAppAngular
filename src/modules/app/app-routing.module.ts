import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormListItemComponent } from './components/form-list-item/form-list-item.component';
import { OverviewComponent } from './components/overview/overview.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'/overview',pathMatch:"full"},
  {path:':activeItem',component : DashboardComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
