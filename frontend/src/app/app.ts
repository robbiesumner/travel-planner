import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './index.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
