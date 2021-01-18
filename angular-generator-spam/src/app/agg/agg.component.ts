import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agg',
  templateUrl: './agg.component.html',
  styleUrls: ['./agg.component.css']
})
export class AggComponent implements OnInit {

  @Input() IGive:String
  constructor() { }

  ngOnInit(): void {
  }

}
