import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private rota: Router,
    private loadingCtrl: LoadingController,
    public toastController: ToastController,
  ) {}
  
  detalhesFilme(id){
    console.log("passou "+id); 
    this.rota.navigate(['/detalhes-filmes', {id:id}])
  }



}
