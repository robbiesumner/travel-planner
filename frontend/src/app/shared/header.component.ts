import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get homeLink(): string {
    return localStorage.getItem('isLoggedIn') === 'true' ? '/home' : '/login';
  }
  get accountLink(): string {
    return localStorage.getItem('isLoggedIn') === 'true'
      ? '/account'
      : '/login';
  }
}
