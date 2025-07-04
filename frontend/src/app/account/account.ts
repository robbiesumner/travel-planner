import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../features/auth/auth.service';
import { User } from '../core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class AccountComponent {
  user: User | null = null;
  loading = true;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getUserProfile().subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user profile.';
        this.loading = false;
      },
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');

    this.router.navigate(['/login']);
  }
}
