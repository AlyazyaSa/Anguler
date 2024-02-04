import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MainComponent } from './Component/main/main.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';

@Component({
  selector: 'app-root',//dirictive
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projst';
}
