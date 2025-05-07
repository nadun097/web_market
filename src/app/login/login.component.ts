import { Component } from "@angular/core";
import { NgIf } from '@angular/common';
@Component({
    standalone:true,
    selector: 'app-login',
    imports: [NgIf],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
    variable: string = "hello";  
    
    isLoggedIn: boolean = true;

}