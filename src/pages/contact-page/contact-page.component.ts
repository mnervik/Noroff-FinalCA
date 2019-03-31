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

  onSubmit() {
    /* Reset Error */
    for (let i = 0; i < document.getElementsByClassName('error').length; i++) {
      //@ts-ignore
      document.getElementsByClassName('error')[i].style.display = 'none';
    }

    /* Tel Field */
    let telError = document.getElementById('error-tel');
    let telField = document.querySelector('input[type="tel"]');
    //@ts-ignore
    let telValue = telField.value;

    /* Email Field */
    let emailError = document.getElementById('error-email');
    let emailField = document.querySelector('input[type="email"]');
    //@ts-ignore
    let emailValue = emailField.value;

    /* Validation */
    if (!this.validateEmail(emailValue)) emailError.style.display = 'block';
    if (!this.validateTlf(telValue)) telError.style.display = 'block';
  }

  validateEmail(email) {
    if (!email.length) return false;

    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validateTlf(tlf) {
    if (!tlf.length) return false;

    let re_space = /^\d{3} \d{3} \d{4}$/;
    let re_dash = /^\d{3}-\d{3}-\d{4}$/;
    let re_dot = /^\d{3}.\d{3}.\d{4}$/;

    return (re_space.test(tlf) || re_dash.test(tlf) || re_dot.test(tlf))
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }
}
