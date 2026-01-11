interface ProductoImageInt {
  image_url: string;
}

//interface product en vista de catalogo
export interface ProductInt {
  id: string;
  nameProd: string;
  brand: string;
  isOfferActive: boolean;
  price: number;
  priceOffer: number | null;
  product_images: ProductoImageInt[];
  categories: { nameCat: string };
}

export interface CategoriaInt {
  id: number;
  nombre: string;
  imagen?: string;
}

//interface de profuct en vista de detalle
export interface ProductDetailInt {
  brand: string;
  categoryId: string;
  cost: number;
  created_at: Date;
  description: string;
  endDate: Date | null;
  id: string;
  isOfferActive: boolean;
  nameProd: string;
  price: number;
  priceOffer: number | null;
  product_images: ProductoImageInt[];
  sku: string;
  slug: string;
  startDate: Date | null;
  updated_at: Date;
  categories: { nameCat: string };
}
