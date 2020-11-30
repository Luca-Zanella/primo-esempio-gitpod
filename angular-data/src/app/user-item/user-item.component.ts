import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() name: string; //input poi verrà ripreso dentro l'html dove volgiamo
  
  constructor() {}

  ngOnInit(): void {}
}
