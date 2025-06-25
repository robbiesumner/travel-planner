import { Component }        from '@angular/core';
import { RouterOutlet }     from '@angular/router';
import { HeaderComponent }  from './shared/header.component';
import { FooterComponent }  from './shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,                    // wichtig!
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // hier muss es style**Urls** heißen
})
export class AppComponent {
  title = 'frontend';
}
