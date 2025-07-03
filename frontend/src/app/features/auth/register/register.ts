import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  identifier: string = ''; // Username or Email
  fullName: string = '';
  password: string = '';
  year: number = new Date().getFullYear();

  constructor(private router: Router) {}

  register(): void {
    if (this.identifier && this.fullName && this.password) {
      console.log('Registered user:', {
        identifier: this.identifier,
        fullName: this.fullName,
        password: this.password
      });

      this.router.navigate(['/login']);
    } else {
      console.warn('Please fill out all fields.');
    }
  }
}






