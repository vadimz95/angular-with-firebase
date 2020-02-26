import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  socialAuth = false;
  error: any;
  dataLoading = false;
  brokenNetwork = false;

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (environment.socialAuthEnabled) {
      this.socialAuth = true;
    }
  }

  login(formData) {
    this.authService.login(formData);
  }

  loginWithGoogle() {
    this.authService.googleSignin();
  }
}
