import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/apis.service';
import {FormControl, FormGroup} from "@angular/forms";
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [ApiService]
})
export class DashboardPageComponent implements OnInit {
  public idArr = [];
  public nameArr = [];
  public imageArr = [];

  private resultLimit = 20;

  constructor(protected router: Router, protected apiService: ApiService) {
  }

  form = new FormGroup({
    'input': new FormControl()
  });

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.getData();
  }

  cardClick(id) {
    this.router.navigate(['/card'], {queryParams: {id: id}});
  }

  onSubmit() {
    let keyword = this.form.value.input.toLowerCase();

    for (let i = 0; i < document.getElementsByClassName('hidden').length; i++) {
      document.querySelectorAll('.hidden')[i].classList.remove('hidden');
    }

    for (let i = 0; i < this.resultLimit; i++) {
      let cardName = document.querySelectorAll('.card-container h4')[i].textContent.toLowerCase();

      if (cardName.indexOf(keyword) === -1) {
        document.querySelectorAll('.card-container')[i].classList.add('hidden');
      } else {
        document.querySelectorAll('.card-container')[i].classList.remove('hidden');
      }
    }
  }

  getData() { /* Get cards once! */
    this.apiService.getCardList().subscribe(data => {
      for (let i = 0; i < this.resultLimit; i++) {// get data without filtering
        this.idArr.push(data.cards[i].id);
        this.nameArr.push(data.cards[i].name);
        this.imageArr.push(data.cards[i].imageUrl);
      }
    });
  }

  goContact() {
    this.router.navigate(['/contact']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }
}
