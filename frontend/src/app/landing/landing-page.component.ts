import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
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
export class LandingPageComponent {
  hoverState = 'rest';
}
