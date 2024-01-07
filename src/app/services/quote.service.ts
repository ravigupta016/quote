import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http:HttpClient) { }

  public getRandomQuote(){
    return this.http.get('https://api.quotable.io/random')
  }
}
