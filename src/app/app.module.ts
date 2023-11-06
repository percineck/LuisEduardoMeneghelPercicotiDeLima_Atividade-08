import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { TopoComponent } from './pages/topo/topo.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;
  
@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    ContatosComponent,
    RodapeComponent,
    TopoComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
