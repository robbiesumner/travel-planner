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
  selector: 'app-register',
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
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService],
})
export class RegisterComponent {
  identifier: string = ''; // Username or Email
  fullName: string = '';
  password: string = '';
  year: number = new Date().getFullYear();

  constructor(private router: Router, private authService: AuthService) {}

  register(): void {
    if (this.identifier && this.fullName && this.password) {
      this.authService
        .register(this.identifier, this.fullName, this.password)
        .subscribe({
          next: () => {
            // Registration successful, redirect to success
            this.router.navigate(['/success']);
          },
          error: (error: any) => {
            // Handle error during registration
            console.error('Registration error:', error);
          },
        });
    }
  }
}
