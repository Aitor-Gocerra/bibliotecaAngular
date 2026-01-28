import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private listaLibros = [
    { 
      id: 1, 
      titulo: 'Cien años de soledad', 
      autor: 'Gabriel García Márquez', 
      editorial: 'Sudamericana', 
      anioPublicacion: 1967, 
      numeroPaginas: 471, 
      genero: 'realismo mágico', 
      prestado: false, 
      valoracion: 4.8 
    },
    { 
      id: 2, 
      titulo: 'Don Quijote de la Mancha', 
      autor: 'Miguel de Cervantes', 
      editorial: 'Francisco de Robles', 
      anioPublicacion: 1605, 
      numeroPaginas: 863, 
      genero: 'novela', 
      prestado: true, 
      valoracion: 4.9 
    },
    { 
      id: 3, 
      titulo: '1984', 
      autor: 'George Orwell', 
      editorial: 'Secker & Warburg', 
      anioPublicacion: 1949, 
      numeroPaginas: 328, 
      genero: 'distopía', 
      prestado: false, 
      valoracion: 4.7 
    },
    { 
      id: 4, 
      titulo: 'El principito', 
      autor: 'Antoine de Saint-Exupéry', 
      editorial: 'Reynal & Hitchcock', 
      anioPublicacion: 1943, 
      numeroPaginas: 96, 
      genero: 'fábula', 
      prestado: true, 
      valoracion: 4.6 
    },
    { 
      id: 5, 
      titulo: 'La sombra del viento', 
      autor: 'Carlos Ruiz Zafón', 
      editorial: 'Planeta', 
      anioPublicacion: 2001, 
      numeroPaginas: 565, 
      genero: 'misterio', 
      prestado: false, 
      valoracion: 4.5 
    }
  ]

  constructor() { }

  getLibros() {
    return this.listaLibros;
  }

  addLibro(titulo: string, autor: string, editorial: string, anioPublicacion: number, numeroPaginas: number, genero: string, prestado: boolean, valoracion: number){
    const newId = this.listaLibros.length + 1;

    const nuevoLibro = {
      id: newId,
      titulo,
      autor,
      editorial,
      anioPublicacion,
      numeroPaginas,
      genero,
      prestado,
      valoracion
    }

    this.listaLibros.push(nuevoLibro);
  }

  updateLibro(id: number, prestado: boolean, valoracion: number) {
    const posicion = this.listaLibros.findIndex(libro => libro.id === id);

    if(posicion !== -1) {
      this.listaLibros[posicion].prestado = prestado;
      this.listaLibros[posicion].valoracion = valoracion;
    }
  }

  deleteLibro(id:number) {
    this.listaLibros = this.listaLibros.filter(libro => libro.id !== id);
  }
}
