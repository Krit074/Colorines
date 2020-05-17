import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare function esVacio(String): any;

@Injectable()
export class UtilitariosService {
  headers = new HttpHeaders({ Accept: 'application/json'});

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.headers = this.headers.append('Content-Type', 'application/json');
  }
  
  obtieneColoritos(pag): any {
    return this.http.get('https://reqres.in/api/colors' + pag, { headers: this.headers });
  }
}
