import { Component } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent {
  arrayLibros: any[] = [];

  idLibro: number | null = null;
  titulo: string = '';
  autor: string = '';
  editorial: string = '';
  anioPublicacion: number = 0;
  numeroPaginas: number = 0;
  genero: string = '';
  prestado: boolean = false;
  valoracion: number = 0;

  constructor(private sLibro: LibroService) {}

  ngOnInit() {
    this.arrayLibros = this.sLibro.getLibros();
  }

  prepararEdicion(libro: any) {
    this.idLibro = libro.id;
    this.titulo = libro.titulo;
    this.autor = libro.autor;
    this.editorial = libro.editorial;
    this.anioPublicacion = libro.anioPublicacion;
    this.numeroPaginas = libro.numeroPaginas;
    this.prestado = libro.prestado;
    this.valoracion = libro.valoracion;
  }

  limpiarFormulario() {
    this.idLibro = null;
    this.titulo = '';
    this.autor  = '';
    this.editorial = '';
    this.anioPublicacion = 0;
    this.numeroPaginas = 0;
    this.prestado = false;
    this.valoracion = 0;
  }

  guardar() {
    if(this.idLibro !== null){
      this.sLibro.updateLibro(this.idLibro, this.prestado, this.valoracion);
    } else {
      this.sLibro.addLibro(this.titulo, this.autor, this.editorial, this.anioPublicacion, this.numeroPaginas, this.genero, this.prestado, this.valoracion);
    }

    this.ngOnInit();
    this.limpiarFormulario();
  }

  eliminar(id: number){
    this.sLibro.deleteLibro(id);
    this.ngOnInit();
  }
}
