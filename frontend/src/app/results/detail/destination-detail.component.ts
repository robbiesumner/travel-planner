import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.scss'
})
export class DestinationDetailComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
