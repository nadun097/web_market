import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Componentlogin } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'web_market';
}
