import { Routes } from '@angular/router';
import { BreedsPageComponent } from './features/breeds/pages/breeds-page/breeds-page';

export const routes: Routes = [
  { path: '', component: BreedsPageComponent },
  { path: '**', redirectTo: '' } 
];
