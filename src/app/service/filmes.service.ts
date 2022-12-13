import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'})
export class FilmesService {
  getDetale(id: number): any {
    throw new Error('Method not implemented.'); }
  constructor(private http: HttpClient) { }
  getProductions(){
    console.log('no getProductions') 
    // esse retorno busca o dadis da api 
      return new Promise((resolve, reject) => {
          this.http.get('https://lmcapifilmes.herokuapp.com/api/productions', {})    
          .subscribe // se estiver tudo certo cai aqui 
           // retorna informado a abaixo
          ( (data: any) => {
              console.log("retorno",data.Production);          
              return resolve(data.Production)
  // se não retorna esse erros
            }), (error => {
              return reject(error)
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);});});}
  sinopseFilmes(id:Params){
    console.log('no sinopseFilmes') 
    // esse retorno busca o dados da api 
      return new Promise((resolve, reject) => {
          this.http.get('https://lmcapifilmes.herokuapp.com/api/productions', {})    
          .subscribe // se estiver tudo certo cai aqui 
           // retorna informado a abaixo
          ( (data: any) => {
              console.log("retorno",data.Production);          
              return resolve(data.Production)}), (error => {
              return reject(error)
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);});}); } }
