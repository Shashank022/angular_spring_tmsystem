import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents=[TeamsComponent, TasksComponent];
