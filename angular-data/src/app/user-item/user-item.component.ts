import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  name: string; // aggiunta la proprietà "name"
  constructor() {
    this.name = "Felipe"; //assegnarà name "Felipe" a tutte le istanze
  }

  ngOnInit(): void {
  }

}
