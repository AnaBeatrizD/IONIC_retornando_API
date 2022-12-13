import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detales-fil-principal',
  templateUrl: './detales-fil-principal.page.html',
  styleUrls: ['./detales-fil-principal.page.scss'],
})
export class DetalesFilPrincipalPage implements OnInit {
  id: number = 0;
  titulo: string = "";
  genero: string = "";
  duracao: number = 0;
  descricao: string = "";
  img: string = "";
  constructor( 
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('passou no detalhesFilmes');
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.carregarDetalhesFilmes();
  }

  async carregarDetalhesFilmes() {
    let url = 'http://lmcapifilmes.herokuapp.com/api/production/' + this.id;

    fetch(url)
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        this.img = json.Production.photo_link;
        this.titulo = json.Production.title;
        this.duracao = json.Production.duration;
        this.descricao = json.Production.description;
        this.genero = json.Production.genre;
        console.log(this.titulo);
      });

  }
}
