import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('pulse', [
      state('rest', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1)' })),
      transition('rest => hover', [
        animate(
          '500ms ease-in-out',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.1)', offset: 0.5 }),
            style({ transform: 'scale(1)', offset: 1 })
          ])
        )
      ])
    ])
  ],
  host: { '[@fadeIn]': '' }
})
export class PreferencesComponent {
  form: FormGroup;
  hovered = 'rest';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      destinationType: [''],
      climate: [''],
      experienceLevel: [5],
      residency: ['', Validators.required],
      budget: [null],
      tripType: [''],
      durationDays: [1],
      temperature: [15]
    });
  }

  onEnter(id: string) {
    this.hovered = id;
  }

  onLeave() {
    this.hovered = 'rest';
  }

  setDestination(type: string) {
    this.form.patchValue({ destinationType: type });
  }

  setClimate(cl: string) {
    this.form.patchValue({ climate: cl });
  }

  onNext() {
    this.router.navigate(['/results'], { state: { preferences: this.form.value } });
  }
}
