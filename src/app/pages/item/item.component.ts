import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      this.productosService
        // tslint:disable-next-line: no-string-literal
        .getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          // tslint:disable-next-line: comment-format
          //console.log(producto);
          // tslint:disable-next-line: no-string-literal
          this.id = parametros['id'];
          this.producto = producto;
        });
    });
  }
}
