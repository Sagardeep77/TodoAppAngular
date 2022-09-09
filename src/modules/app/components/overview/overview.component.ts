import { Component, OnInit } from '@angular/core';
import { CommmunicationService } from 'src/services/commmunication.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private communicationService : CommmunicationService) { }

  ngOnInit() {
    
  }

}
