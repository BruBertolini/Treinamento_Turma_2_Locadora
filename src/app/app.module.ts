import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroFilmeService } from './registro-filme.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    CadastroFilmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistroFilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
