// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirige la ruta vacía al componente de Breeds
  { path: '', redirectTo: 'breeds', pathMatch: 'full' },

  // Carga el componente standalone de Breeds
  {
    path: 'breeds',
    loadComponent: () =>
      import('./pages/breeds-page/breeds-page')
        .then(m => m.BreedsPageComponent)
  },

  // Ruta comodín para 404, opcional
  { path: '**', redirectTo: 'breeds' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
