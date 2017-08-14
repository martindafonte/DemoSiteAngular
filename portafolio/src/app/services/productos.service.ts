import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  cargando_productos: boolean = false;
  productos: any[] = [];
  productos_filtrado: any[] = [];

  constructor(private http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {
    if (this.productos.length === 0) {
      this.cargando_productos = true;
      let promesa = new Promise((resolve, reject) => {
        this.http.get('https://demoappangular.firebaseio.com/productos_idx.json')
          .subscribe(res => {
            setTimeout(() => {
              // console.log(res.json());
              if (!res.ok)
                reject('No se pudieron obtener los productos. Código:' + res.status + ' - ' + res.statusText);
              if (!res.json())
                reject('No se obtuvo ningún producto');
              this.productos = res.json();
              this.cargando_productos = false;
              resolve();
            }, 800)
          }, err => {
            console.log('Err dentro de suscribe' + err);
            reject(err);
          });
      });
      return promesa;
    }
  }

  public buscar_producto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrar_productos(termino);
      }
      ).catch(reason => {
        console.log('Fallo la promesa ' + reason);
      });
    } else {
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino: string) {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.toLowerCase().indexOf(termino) >= 0
        || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
        console.log(prod);
      }
    });
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://demoappangular.firebaseio.com/productos/${cod}.json`);
  }
}
