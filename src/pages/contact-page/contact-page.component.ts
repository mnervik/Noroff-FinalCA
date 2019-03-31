import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  protected name = {
    first: 'Ola',
    last: 'Norman'
  };

  constructor(protected router: Router) {
  }

  form = new FormGroup({
    'fname': new FormControl(),
    'lname': new FormControl(),
    'tel': new FormControl(),
    'email': new FormControl()
  });

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(){
    console.log('Validate!');
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }
}
