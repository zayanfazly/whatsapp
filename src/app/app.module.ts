import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {CheckboxModule} from 'primeng/checkbox';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { ContactsComponent } from './contacts/contacts.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    ContactsComponent,
    ActionMenuComponent,
    ChatAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
