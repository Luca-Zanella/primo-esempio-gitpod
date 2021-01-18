import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'angular-generator-spam';
  
  articles = new Array<string>(); //dichiaro un array di stringhe vuote
  //prendo 2 variabili come input dell'html
  addSpam(spamText: HTMLInputElement, num: HTMLInputElement): boolean {
    //creo una variabile cont che sarà uguale al valore di num
    let cont = Number(num.value);
    //questo è quello che uscirà prendendo le 2 variabili
    console.log(`spamText: ${spamText.value} and spamNum: ${num.value}`);
    //ciclo una variabile i finche è minore di cont che naturalmente continuerà finche non avrà raggiunto il numero di cilci richiesti dall'utente
    for(let i:number =0; i< cont; i++)
    {
      //ocn questo metodo pusherà il nostro spamText.value per quante volte lo cicla che è stato richiesto dall'utente
      this.articles.push(spamText.value);
    }
    //ritorna false perchè è boolean
    return false;
    
  }
}
