import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componentlogin } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Componentlogin],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'project-web_market'; 
}
