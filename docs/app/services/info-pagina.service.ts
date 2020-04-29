import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info_pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    // console.log('Holi Jorgii');
    this.cargaEquipo();
    this.cargarInfor();
    //Leer el archivo JSON
  }

  private cargarInfor() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
        //console.log(resp['instagram']);
      });
  }

  private cargaEquipo() {
    this.http
      .get('https://angular-html-142e9.firebaseio.com/euqipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
}
