import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalesFilPrincipalPageRoutingModule } from './detales-fil-principal-routing.module';
import { DetalesFilPrincipalPage } from './detales-fil-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalesFilPrincipalPageRoutingModule
  ],
  declarations: [DetalesFilPrincipalPage]
})
export class DetalesFilPrincipalPageModule {}
