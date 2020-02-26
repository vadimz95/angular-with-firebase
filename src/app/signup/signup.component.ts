import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isPasswordConfirm = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(formData) {
    if (this.isPasswordConfirm) {
      this.authService.createUser(formData).then(
        () => {
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
