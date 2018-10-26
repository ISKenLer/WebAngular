import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">    
            <input placeholder="Email" formControlName="email">
            <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">
                Email is required!
            </p>            
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <div formGroupName="subject">
            <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label>
            <label><input type="checkbox" name="AngularJS" formControlName="angularJS"> NodeJS</label>
            <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> NodeJS</label>
            </div>
            <button>Submit</button>
        </form>
    `,
    
})

export class SignUpComponent {
    formSignUp: FormGroup;
    constructor() {
        this.formSignUp = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
            nodeJS: new FormControl(),
            angularJS: new FormControl(),
            reactJS: new FormControl(),        
        });
    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}