export interface ProductoInt {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string;
  oferta: boolean;
  descOferta?: string;
  nuevoPrecio?: number;
}

export interface CategoriaInt {
  id: number;
  nombre: string;
  imagen?: string;
}
