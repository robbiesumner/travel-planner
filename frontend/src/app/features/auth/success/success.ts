import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './success.html',
  styleUrls: ['./success.scss']
})
export class SuccessComponent {}

