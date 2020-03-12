import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TasksComponent } from './tasks/tasks.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
  },
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
export const routingComponents=[TeamsComponent, TasksComponent, EventsComponent];
