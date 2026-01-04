interface ProductoImageInt {
  image_url: string;
}

export interface ProductoInt {
  brand: string;
  categoryId: string;
  cost: number;
  created_at: Date;
  deleted_at: Date | null;
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

export interface CategoriaInt {
  id: number;
  nombre: string;
  imagen?: string;
}
