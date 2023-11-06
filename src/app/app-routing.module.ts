import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

const routes: Routes = [
  {path: '', component: ContatosComponent},
  {path: 'cadastro-grupos', component: GruposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
