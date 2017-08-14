import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})

export class ItemComponent implements OnInit {

  producto: any = undefined;
  codigo: string;

  constructor(private route: ActivatedRoute, private _ps: ProductosService) {
    route.params.subscribe(parametros => {
      this.codigo = parametros['id'];
      _ps.cargar_producto(this.codigo).subscribe(res => {
        this.producto = res.json();
      }, err => console.log(err));
    });
  }

  ngOnInit() {
  }

}
