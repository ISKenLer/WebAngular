import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { NgModelDirective } from './ng-model.directive';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in.component'
import { SignUpComponent } from './sign-up.component'

import { IpComponent } from './ip.component'
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent,
    NgModelDirective,
    SignInComponent,
    SignUpComponent,
    WeatherComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
