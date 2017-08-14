import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InformacionService {

  info: any = {};
  equipo: any[] = [];
  data_loaded: boolean = false;
  sobre_nosotros_loaded: boolean = false;

  constructor(public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => {
        // console.log(data.json());
        this.info = data.json();
        this.data_loaded = true;
      });
  }

  carga_sobre_nosotros() {
    this.http.get("https://demoappangular.firebaseio.com/equipo.json")
      .subscribe(data => {
        // console.log(data.json());
        this.equipo = data.json();
        this.sobre_nosotros_loaded = true;
      });
  }

}
