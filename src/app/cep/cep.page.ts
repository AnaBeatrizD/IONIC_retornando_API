import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep:string = "";
  estado:string ="";
  cidade:string="";
  bairro:string="";
  rua:string="";
  
  constructor() { }
  ngOnInit() {}

  BuscarEndereco() {
   if(this.cep === ""){
     alert("Necessario inserir Cep")
    return;
   }

   let url = "https://viacep.com.br/ws/" + this.cep + "/json/";
   console.log(url);

   fetch(url)
   .then ((resposta) => {return resposta.json();})
   .then ((json) => {
    this.estado = json.uf;
    this.cidade = json.localidade;
    this.bairro = json.bairro;
    this.rua = json.logradouro;
   });
  }
   
}
