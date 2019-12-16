import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //este é o comando que vai permitir que minha aplicação consuma dados de webservices

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TituloComponent } from './titulo/titulo.component';
import { RPGComponent } from './rpg/rpg.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';




@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    BodyComponent,
    FooterComponent,
    TituloComponent,
    RPGComponent,
    HomeComponent,
    TarefasComponent
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
