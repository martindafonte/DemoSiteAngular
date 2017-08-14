import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  cargando_productos: boolean = false;
  productos: any[] = [];
  constructor(private http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {
    if (this.productos.length === 0) {
      this.cargando_productos = true;
      this.http.get('https://demoappangular.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          setTimeout(() => {
            console.log(res.json());
            this.productos = res.json();
            this.cargando_productos = false;
            
          }, 1000)
        }
        , err => console.log(err));
    }
  }
}
