import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//il nostro metodo lo andiamo a scrivere dentro l'export
export class AppComponent {
  //la variabile titile avrà inputElement quindi vuol dire che riceverà qualcosa al suo interno
  //la stessa cosa per la variabile link che riceverà qualcosa al suo interno come se fosse la plai text su android studio
  //${titile.value è un modo per inserire direttamente un valore all'interno di una riga}
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(
      `Adding article title: ${title.value} and link: ${link.value} `
    );
    return false;
  }
}
