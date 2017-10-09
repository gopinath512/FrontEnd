import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages-component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { UserComponent } from './user.component';
import { NavComponent } from './nav.component';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { MessageDetailComponent } from './message-Detail-component';

var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/:name',
    component: MessagesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'message/:id',
    component: MessageDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    NavComponent,
    NewMessageComponent,
    MessageDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     BrowserModule,
     HttpModule,
     MaterialModule,
     RouterModule.forRoot(routes)
  ],
  providers: [AuthService,WebService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }