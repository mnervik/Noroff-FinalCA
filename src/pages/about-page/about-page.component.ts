import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  dropdownEvent(){
    let style = document.getElementById('more-info-content').style;
    if(style.display === 'none') style.display = 'block';
    else style.display = 'none';
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  goContact() {
    this.router.navigate(['/contact']);
  }
}
