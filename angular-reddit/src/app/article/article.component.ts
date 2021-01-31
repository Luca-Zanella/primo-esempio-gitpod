import { Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'card'

  //variabili globali
  votes:number;
  title:string;
  link:string;

  constructor() { 
    this.title = 'Angular 2';
    this.link = 'http//angular.io'
    this.votes = 10;
  }

  voteUp(): Boolean {
    this.votes += 1;
    return false; //per far si che l'evento non venga propagato
  }

  voteDown(): Boolean{
    this.votes -= 1;
    return false;
  }


  ngOnInit(): void {
  }

}
