import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './componentes/app.component';

import { HttpClientModule } from '@angular/common/http';
import { UtilitariosService } from './servicios/utilitarios.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UtilitariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
