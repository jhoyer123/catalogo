import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-6 lg:px-12 py-20">
      {/* inicio fondo movil */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://i.pinimg.com/736x/34/5a/86/345a865b53ce69a9d616241aa95f73c2.jpg"
          alt="Fondo Tech"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        {/* Más claro para que no oscurezca tanto */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* fin fondo movil */}
      {/* inicio fondo PC/Tablet */}
      <div className="hidden lg:block absolute inset-0">
        {/* Imagen Left */}
        <img
          src="https://i.pinimg.com/1200x/df/8b/c8/df8bc81afb3df8bafb18e5b11a02267b.jpg"
          alt="Setup Left"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay suave para mejorar lectura */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* fin fondo PC/Tablet */}
      <div className="relative z-10 max-w-3xl text-center space-y-8 animate-fade-in-up">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase rounded-full backdrop-blur-sm bg-white/20 text-white shadow-lg border border-white/20">
          <Sparkles className="w-3 h-3" />
          Nueva Colección 2025
        </span>

        {/* Título */}
        <h1 className="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tight text-white font-ubuntu drop-shadow-lg">
          Tech <br /> Zone
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl sm:text-3xl font-light text-white/90 leading-tight">
          Innovación que <span className="font-semibold italic">define</span> tu
          espacio.
        </h2>

        {/* Párrafo */}
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
          Laptops y accesorios diseñados para profesionales que buscan elevar su
          productividad.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-10 pt-2">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">2.5K+</p>
            <p className="text-xs text-white/70">Productos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">15K+</p>
            <p className="text-xs text-white/70">Clientes</p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            to="/catalogo"
            className="group relative px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-500 overflow-hidden bg-white text-[#0A0A0A] hover:scale-105 shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explorar Catálogo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/catalogo?oferta=1"
            className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-white/50 text-white backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            Ver Ofertas
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
