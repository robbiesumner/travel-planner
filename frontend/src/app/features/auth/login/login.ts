import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  username = '';
  password = '';
  loginValid = true;
  year = new Date().getFullYear();

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {
      this.loginValid = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/preferences']);
    } else {
      this.loginValid = false;
    }
  }
}


