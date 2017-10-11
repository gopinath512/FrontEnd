import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
        <mat-card>
            <md-input-container>
                <input mdInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </md-input-container>
            <md-input-container>
                <input mdInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </md-input-container>
            <button md-raised-button color="primary" (click)="login()">Login</button>
       </mat-card>
    `
})
export class LoginComponent {
    constructor(private auth: AuthService) { }

    loginData = {
        email: '',
        password: ''
    }

    login() {
        console.log(this.loginData);
        this.auth.login(this.loginData);
    }
}