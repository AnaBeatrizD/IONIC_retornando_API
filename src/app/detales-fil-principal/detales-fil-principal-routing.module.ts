import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalesFilPrincipalPage } from './detales-fil-principal.page';

const routes: Routes = [
  {
    path: '',
    component: DetalesFilPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalesFilPrincipalPageRoutingModule {}
