import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeItem : string;
  constructor(private route : ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.activeItem = paramMap.get("activeItem")
    });
  }

}
