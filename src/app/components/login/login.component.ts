import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  user?: SocialUser;
  loggedIn?: boolean;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: SocialAuthService) {
      this.loginForm = this.fb.group({
        username: ['', Validators.email],
        password: ['', Validators.required]
      });
     }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  onSubmit()
  {
    console.log("hei");
  }
  signInWithGoogle(): void {
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
       this.user = user;
       console.log(this.user)
     }).catch((err)=>{
       console.log("error to login")
     })
  }

}
