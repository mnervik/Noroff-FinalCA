import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/apis.service";

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
  providers: [ApiService]
})
export class CardPageComponent implements OnInit, OnDestroy {
  private sub; // store the url-parameter
  public card = {
    id: '',
    name: '',
    image: '',
    about: '',
    rarity: '',
    color: []
  };

  constructor(protected router: Router, protected route: ActivatedRoute, protected apiService: ApiService) {
  }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.sub = this.route.queryParams.subscribe(params=>{
      if(params.hasOwnProperty('id') && params.id.length){ // there probably is a better solution!
        this.apiService.getCard(params.id).subscribe(data=>{
          let currentCard = data.cards[0];

          this.card.id = currentCard.id;
          this.card.name = currentCard.name;
          this.card.image = currentCard.imageUrl;

          this.card.about = currentCard.text;
          this.card.rarity = currentCard.rarity;

          for(let i = 0; i < currentCard.colors.length; i++){
            this.card.color.push(currentCard.colors[i]);
          }

          return this.card;
        });
      }else{
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
