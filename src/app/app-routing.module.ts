import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BodyComponent} from './body/body.component';
import { RPGComponent } from './rpg/rpg.component';
import { TarefasComponent} from './tarefas/tarefas.component';


const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: "BeatEmUp", component:BodyComponent},
{path: 'RPG', component:RPGComponent},
{path: 'Tarefas',component:TarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
