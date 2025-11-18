import React from "react";
import { Link } from "react-router-dom";
import { type ProductoInt } from "../../interfaces/Producto";

interface ProductCardProps {
  producto: ProductoInt;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ producto }) => {
  console.log("🔄 Re-render <ProductCard />:", producto.id);
  //const navigate = useNavigate();

  return (
    // 1. Contenedor principal: Fondo claro (Base/100) y borde/sombra oscuros (400/800)
    <div className="group flex flex-col h-full bg-[#F5F5F5] overflow-hidden rounded-none sm:rounded-xl shadow-lg border border-[#D4D4D4]/50 hover:border-[#737373]/50 transition-all duration-500 hover:-translate-y-1">
      {/* --- SECCIÓN DE IMAGEN --- */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#FAFAFA]">
        {/* Overlay sutil al hacer hover */}
        {/* El overlay es más oscuro para el modo claro */}
        <div className="absolute inset-0 bg-[#A3A3A3]/0 group-hover:bg-[#A3A3A3]/20 transition-colors duration-500 z-10"></div>

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Badge de categoría: Fondo oscuro (800) con texto muy claro (Base/100) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#262626] text-[#FFFFFF] rounded-sm">
            {producto.categoria}
          </span>
        </div>
      </div>

      {/* --- SECCIÓN DE CONTENIDO --- */}
      <div className="flex flex-col grow p-5 sm:p-6 space-y-4">
        {/* Título y decorador */}
        <div className="space-y-2">
          {/* Título: Texto oscuro (800) para máxima legibilidad */}
          <h3 className="font-serif text-xl sm:text-2xl leading-tight text-[#262626] line-clamp-2 min-h-14">
            {producto.nombre}
          </h3>
          {/* Línea decorativa que cambia de color en hover (400 a 700) */}
          <div className="w-12 h-0.5 bg-[#D4D4D4] group-hover:bg-[#404040] transition-colors duration-300"></div>
        </div>

        {/* Lógica de Precios */}
        <div className="mt-auto pt-2">
          {/* Caso 1: Precio Normal */}
          {!producto.oferta && (
            <div className="flex items-end justify-between">
              <div>
                {/* Etiqueta de precio: Color gris medio (500) */}
                <p className="text-[10px] tracking-widest text-[#737373] uppercase mb-1">
                  Precio
                </p>
                {/* Precio: Texto oscuro (800) */}
                <p className="text-2xl font-light text-[#262626]">
                  ${producto.precio}
                  {/* Unidad: Gris medio (500) */}
                  <span className="text-xs font-normal text-[#737373] ml-1">
                    USD
                  </span>
                </p>
              </div>
              {/* Botón Minimalista */}
              <Link
                to={`/detallesProducto/${producto.id}`}
                // Borde gris claro (400) | Hover: Fondo oscuro (800) y texto claro (Base)
                className="group/btn relative p-3 rounded-full border border-[#D4D4D4] hover:bg-[#262626] hover:border-[#262626] transition-all duration-300"
                aria-label="Ver detalles"
              >
                <svg
                  // Ícono: Color oscuro (800) | Hover: Texto claro (Base)
                  className="w-5 h-5 text-[#262626] group-hover/btn:text-[#FFFFFF] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}

          {/* Caso 2: Oferta - Usando un color de acento fuera de la paleta para **distinción** */}
          {producto.oferta && (
            <div className="flex items-end justify-between w-full">
              <div className="space-y-1">
                {/* Título de Oferta: Usamos un rojo/naranja distintivo para llamar la atención */}
                <p className="text-[10px] tracking-widest text-red-600 uppercase">
                  Oferta Especial
                </p>
                <div className="flex items-baseline gap-3">
                  {/* Precio Nuevo Destacado: Usamos el mismo rojo/naranja fuerte */}
                  <p className="text-2xl font-light text-red-600">
                    ${producto.nuevoPrecio}
                  </p>
                  {/* Precio Viejo Tachado: Gris medio (500) */}
                  <p className="text-sm text-[#737373] line-through decoration-[#737373]">
                    ${producto.precio}
                  </p>
                </div>
              </div>
              {/* Botón Minimalista (Igual al caso anterior) */}
              <Link
                to={`/detallesProducto/${producto.id}`}
                // Borde gris claro (400) | Hover: Fondo oscuro (800) y texto claro (Base)
                className="group/btn relative p-3 rounded-full border border-[#D4D4D4] hover:bg-[#262626] hover:border-[#262626] transition-all duration-300"
                aria-label="Ver detalles"
              >
                <svg
                  // Ícono: Color oscuro (800) | Hover: Texto claro (Base)
                  className="w-5 h-5 text-[#262626] group-hover/btn:text-[#FFFFFF] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔥 OPTIMIZACIÓN IMPORTANTE
// Solo se vuelve a renderizar si cambian los datos del producto.
// Si cambian filtros que NO afectan al producto → NO se re-renderiza.
export const ProductCard = React.memo(
  ProductCardComponent,
  (prevProps, nextProps) => {
    // Comparación profunda necesaria para evitar renders
    return (
      prevProps.producto.id === nextProps.producto.id &&
      prevProps.producto.nombre === nextProps.producto.nombre &&
      prevProps.producto.categoria === nextProps.producto.categoria &&
      prevProps.producto.precio === nextProps.producto.precio &&
      prevProps.producto.imagen === nextProps.producto.imagen
    );
  }
);
