import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routes} from './app.route';
import { ModulecComponent } from './modulec/modulec.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatIconModule, MatProgressBarModule, MatSidenavModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {ResponsiveConfig, ResponsiveModule} from "ng2-responsive";

const config = {
  breakPoints: {
    xs: {max: 600},
    sm: {min: 601, max: 959},
    md: {min: 960, max: 1279},
    lg: {min: 1280, max: 1919},
    xl: {min: 1920}
  },
  debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition(){
  return new ResponsiveConfig(config);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModulecComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [
    {
      provide: ResponsiveConfig,
      useFactory: ResponsiveDefinition }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
