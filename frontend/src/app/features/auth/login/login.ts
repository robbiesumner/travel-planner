import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService],
})
export class LoginComponent {
  username = '';
  password = '';
  loginValid = true;
  year = new Date().getFullYear();

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: { access_token: string }) => {
        const token = response.access_token;
        if (token) {
          this.loginValid = true;
          localStorage.setItem('jwt', token);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/home']);
        } else {
          this.loginValid = false;
        }
      },
      error: () => {
        this.loginValid = false;
      },
    });
