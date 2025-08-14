import { Injectable } from '@angular/core';

export interface Product{
  id:number;
  nombre:string;
  descripcion:string;
  marca:string;
  precio:string;
  imagen:string
}

@Injectable({
  providedIn: 'root'
})

export class Products {

    private products:Product[] = [
       {
      id: 1,
      nombre: 'Honda Transa LP',
      descripcion : 'Ideal para ciudad',
      marca: 'Honda',
      precio: '$16,517',
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      nombre: 'CBR 1000 RRR',
      descripcion: 'Potente y elegante',
      marca: 'Honda',
      precio: '$39,211',
      imagen: '/img/CBR1000RRR.jpg'
    },
    {
      id: 3,
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      marca: 'Kawasaky',
      precio: '$9,200',
      imagen: '/img/kawasaky-600.jpg'
    },
     {
      id: 4,
      nombre: 'Kawasaky Z900',
      descripcion: 'Potente y elegante',
      marca: 'Kawasaky',
      precio: '$16,274',
      imagen: '/img/Z900.jpg'
    },
   {
      id: 5,
      nombre: 'Suzuki 1200',
      descripcion: 'Moderna y económica',
      marca: 'Suzuki',
      precio: '$13,900',
      imagen: '/img/suzuki-1200.jpg'
   },
   {
      id: 6,
      nombre: 'V-STROM 1050',
      descripcion: 'Potente y elegante',
      marca: 'Suzuki',
      precio: '$19,720',
      imagen: '/img/V-STROM-1050.jpg'
   },

   {
      id: 7,
      nombre: 'MT 09',
      descripcion: 'Potente y elegante',
      marca: 'Yamaha',
      precio: '$15,300',
      imagen: '/img/MT09.jpg'
   },
   {
      id: 8,
      nombre: 'XSR900',
      descripcion: 'Potente y elegante',
      marca: 'Yamaha',
      precio: '$16,538',
      imagen: '/img/XSR900.jpg'
   },
   {
      id: 9,
      nombre: 'Super Teneré 1200ZE',
      descripcion: 'Potente y elegante',
      marca: 'Yamaha',
      precio: '$19,717',
      imagen: '/img/SuperTenere1200ZE.jpg'
   }
  ]
  constructor() { }
    getProducts():Product[]{
      return this.products;
    }
}
