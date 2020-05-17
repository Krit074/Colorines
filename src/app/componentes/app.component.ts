import { Component, HostListener } from '@angular/core';
import { UtilitariosService } from '../servicios/utilitarios.service';

declare function esVacio(String): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorin-app';

  colores: any;
  pagina = 1;
  pensando = false;
  hayMas = true;
  hayMenos = false;
  
  mensaje = '';
  mostrarMensaje = false;

  constructor( private utilitarios : UtilitariosService) {
    document.getElementById('loadingScreen').setAttribute('hidden', 'true');
  }

  ngOnInit() {
    this.obtenerColoritos('');
  }

  obtenerColoritos(pag: string){
    this.utilitarios.obtieneColoritos(pag).subscribe(
      (data: any) => { 
        this.pensando = false;
        if (!esVacio(data)) {
          this.colores = data.data;
        } else {
          this.colores = [];
        }
        if(esVacio(this.colores)){
          this.hayMas = false;
        } else {
          this.hayMas = true;
        }
      }
    );
  }

  textoCopiaOk(texto: string){
    this.mensaje = texto;
    this.mostrarMensaje = true;
    setTimeout(() => this.mostrarMensaje = false, 3000);
  }  
  
  cambiarPagina(variacion: string){
    this.colores = [];
    this.pensando = true;
    if(variacion == '-'){
      if(this.pagina != 1){
        this.pagina = this.pagina - 1;
      }
    } else {
      this.pagina = this.pagina + 1;
    }

    if(this.pagina == 1){
      this.hayMenos = false;
      this.obtenerColoritos('');
    } else {
      this.hayMenos = true;
      this.obtenerColoritos('?page='+this.pagina);
    }
  }

  copiarDatos(dato: string, pos: number){
    const colorin = this.colores[pos];
    let texto = '';
    const datoCopia = document.createElement("textarea");
    document.body.appendChild(datoCopia);

    if(!esVacio(dato)){
      datoCopia.value = colorin[dato];
      texto = 'Valor copiado: ' + colorin[dato];
    } else {
      datoCopia.value = JSON.stringify(colorin);
      texto = 'Info de "' + colorin.name.toUpperCase() + '" copiada al portapapeles!'
    }

    datoCopia.select();
    document.execCommand("copy");
    document.body.removeChild(datoCopia);
    this.textoCopiaOk(texto);
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }
}
