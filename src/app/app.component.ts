import { Component } from '@angular/core';
import {QuoteService} from './services/quote.service';
import {Quotes} from './models/quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';

  public quote = new Quotes('','');

  constructor(public quoteService:QuoteService){
   this.getQuote();
    console.log("This is working");
  }

  public getQuote():any{
    this.quoteService.getRandomQuote().subscribe((data:any)=>{
      this.quote = new Quotes(data.content,data.author);
      console.log(this.quote);
     });
  }
}
