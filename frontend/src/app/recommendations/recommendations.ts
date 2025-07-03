import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsComponent {
  residency: string = '';
  cost: number | null = null;
  durationDays: number | null = null;
  destinationType: string = '';
  temperature: number | null = null;

  submit(): void {
    console.log('Submitted:', {
      residency: this.residency,
      cost: this.cost,
      durationDays: this.durationDays,
      destinationType: this.destinationType,
      temperature: this.temperature
    });
  }
}
