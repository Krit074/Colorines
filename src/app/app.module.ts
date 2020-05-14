import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app.component';
import { MasterPageComponent } from './componentes/masterPage/masterpage.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './servicios/secure/auth.service';
import { WstokenService } from './servicios/secure/wstoken.service';


@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    WstokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
