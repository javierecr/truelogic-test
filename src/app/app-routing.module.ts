import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'competitions/:id',
    loadChildren: () =>
      import('./competition/competition.module').then(
        (m) => m.CompetitionPageModule
      ),
  },
  {
    path: 'competitions/:id/teams/:teamId',
    loadChildren: () =>
      import('./team/team.module').then((m) => m.TeamPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
