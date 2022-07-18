import { Component, Input, OnInit } from '@angular/core';
import { InfoModalData } from 'src/app/shared/models/modal.model';

@Component({
  selector: 'app-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.scss']
})
export class DashboardBoxComponent implements OnInit {
  @Input() title: string; 
  @Input() modalInfo: InfoModalData; 

  constructor() { }

  ngOnInit(): void {
  }
}
