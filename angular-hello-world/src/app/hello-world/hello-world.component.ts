import { Component, OnInit } from '@angular/core';

//dove viene dichiarato il componente
@Component({
  //il selector è il nome del tag che ci inventiamo
  selector: 'app-hello-world',
  //serve per specificare da dove arriva l'index html
  //dentro questo url ci sarà il codice del tag html che abbiamo deciso di creare
  templateUrl: './hello-world.component.html',
  //dentro questo url ci sarà il codice del css per il codice html del url
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
