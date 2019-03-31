import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private cardUrl = 'https://api.magicthegathering.io/v1/cards/';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
  }

  getCardList(){
    return this.http.get(this.conversionUrl + this.cardUrl).pipe(
      map(response =>{
        return response.json();
      })
    );
  }

  getCard(id){
    return this.http.get(this.conversionUrl + this.cardUrl + '?id=' + id).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
