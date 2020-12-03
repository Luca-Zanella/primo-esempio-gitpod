import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  name:String[]

  constructor() {
    this.name = ["Ruspa","Autocarro","Gru","Escavatori","AutoGru","Elevatori da Cantiere","Carrelli elevatori","trattori","rimorchi","piattaforma"]
   }

  ngOnInit(): void {
  }

}
