import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      destinationType: [''],
      climate: [''],
      experienceLevel: [5]
    });
  }

  setDestination(type: string) {
    this.form.patchValue({ destinationType: type });
  }

  setClimate(cl: string) {
    this.form.patchValue({ climate: cl });
  }

  onNext() {
    // Placeholder for future navigation or search logic
    console.log(this.form.value);
  }
}
