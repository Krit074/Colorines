import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WstokenService {
  headers = new HttpHeaders({ Accept: 'application/json'});

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.headers = this.headers.append('Content-Type', 'application/json');
  }
  
  public llamadaPost(arregloData: any, servicio: any) {
    const url = `${ servicio }`;
    return this.http.post<any>(url, arregloData, { headers: this.headers });
  }

  public llamadaGet(stringData: string, servicio: any) {
    const url = `${ servicio }`;
    return this.http.get<any>(url + stringData);
  }
}
