import { Component } from '@angular/core';
import { SigninService } from './sign-in.service';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">    
            <input 
                placeholder="Email" 
                ngModel
                #txtEmail="ngModel"
                name="email"
                required
                email
            >
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not value
            </p>
            <br><br>
            <input type="password" placeholder="Password" ngModel name="password">
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
    `,
    providers: [SigninService]
})

export class SignInComponent {
    constructor (private signInService:SigninService) {}
    onSubmit(formSignIn) {
        this.signInService.sendPost(formSignIn.value)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
}