import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDetailsComponent {
  destination = 'Paris';

  itinerary = [
    {
      day: 1,
      activities: [
        "Arrive in Paris from Germany...",
        "Check into your hotel/hostel...",
        "Visit the Eiffel Tower...",
        "Lunch near the Eiffel Tower...",
        "Arc de Triomphe & Champs-Élysées...",
        "French dinner in a cozy restaurant..."
      ],
      notes: "Dress in extremely warm layers..."
    },
    {
      day: 2,
      activities: [
        "Visit the Louvre Museum...",
        "Lunch at a brasserie...",
        "Walk through Tuileries Garden...",
        "Explore Galerie Vivienne...",
        "Dinner in the Latin Quarter..."
      ],
      notes: "Covered passages are a hidden gem..."
    },
    {
      day: 3,
      activities: [
        "Montmartre & Sacré-Cœur...",
        "Brunch in Montmartre...",
        "Optional: Musée d'Orsay or Rodin...",
        "Souvenir shopping at Galeries Lafayette...",
        "Depart from Paris..."
      ],
      notes: "Wear good warm walking shoes..."
    }
  ];

  tips = [
    "Paris is not a beach destination – focus is on city culture.",
    "Bundle up for -10°C: layers, boots, scarf, gloves.",
    "Stick to budget: hostels, bakeries, Metro pass.",
    "Book attractions in advance: Eiffel Tower, Louvre.",
    "Warm up frequently: cafés, galleries, indoor spots.",
    "Be alert: tourist areas and public transport."
  ];
}
