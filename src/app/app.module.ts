import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProfesorComponent } from './search-profesor/search-profesor.component';
import { ListAsignaturasComponent } from './list-asignaturas/list-asignaturas.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProfesorComponent,
    ListAsignaturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
