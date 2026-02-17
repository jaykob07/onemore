import Image from "@/components/ui/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// 1. DEFINICIÓN DE TIPOS (TypeScript)
// =========================================================================

// Estructura de precios individuales
interface PriceDetail {
  unitario: number;
  mayorista: number;
  dropshipping: number;
}


// Tipos de categorías válidas (Union Type) para la indexación segura
type CategoryName = 
  "Cartera Fiesta" | "Collares Indu" | "Chalinas" | "Pañoletas" | 
  "Collar Chunky" | "Aretes"  | "Pulseras" | "Coronas" | 
  "Collares Brillantes" | "Botones Buho" | "Boton Flor" | "Boton Colibri" | "Boton Pelicano" | "Boton Muñeca";

// Estructura del objeto de configuración de precios
type PricingConfig = Record<CategoryName, PriceDetail>;

// Estructura de los ítems de galería
interface GalleryItem {
  id: number;
  category: CategoryName; // Asegura que solo se usen categorías válidas
  image: string;
}

// CONFIGURACIÓN DE PRECIOS POR CATEGORÍA
const PRICES_BY_CATEGORY: PricingConfig = {
  "Cartera Fiesta": { unitario: 49900, mayorista: 29900, dropshipping: 32499 },
  "Collares Indu": { unitario: 29900, mayorista: 15000, dropshipping: 18000 },
  "Chalinas": { unitario: 29900, mayorista: 18000, dropshipping: 20000 },
  "Pañoletas": { unitario: 15000, mayorista: 8000, dropshipping: 10000 },
  "Collar Chunky": { unitario: 35000, mayorista: 20000, dropshipping: 22000 },
  "Aretes": { unitario: 12000, mayorista: 6000, dropshipping: 7500 },
  "Botones Buho": { unitario: 8000, mayorista: 4000, dropshipping: 5000 },
  "Boton Flor": { unitario: 10000, mayorista: 4000, dropshipping: 5000 },
  "Boton Colibri": { unitario: 12000, mayorista: 4000, dropshipping: 5000 },
  "Boton Pelicano": { unitario: 12000, mayorista: 4000, dropshipping: 5000 },
  "Boton Muñeca": { unitario: 8000, mayorista: 4000, dropshipping: 5000 },
  "Pulseras": { unitario: 18000, mayorista: 9000, dropshipping: 11000 },
  "Coronas": { unitario: 60000, mayorista: 40000, dropshipping: 45000 },
  "Collares Brillantes": { unitario: 45000, mayorista: 25000, dropshipping: 28000 },
};

const galleryItems: GalleryItem[] = [
    
    { id: 1, category: "Cartera Fiesta", image: "/images/bolso-fiesta-1.jpeg" },
    { id: 1.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew1.jpg" },
    { id: 2, category: "Cartera Fiesta", image: "/images/bolso-fiesta-2.jpeg" },
    { id: 3, category: "Cartera Fiesta", image: "/images/bolso-fiesta-3.jpeg" },
    { id: 4, category: "Cartera Fiesta", image: "/images/bolso-fiesta-4.jpeg" },
    { id: 4.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew2.jpg" },
    { id: 5, category: "Cartera Fiesta", image: "/images/bolso-fiesta-5.jpeg" },
    { id: 6, category: "Cartera Fiesta", image: "/images/bolso-fiesta-6.jpeg" },
    { id: 6.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew3.jpg" },
    { id: 7, category: "Cartera Fiesta", image: "/images/bolso-fiesta-7.jpeg" },
    { id: 8, category: "Cartera Fiesta", image: "/images/bolso-fiesta-8.jpeg" },
    { id: 8.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew4.jpg" },
    { id: 9, category: "Cartera Fiesta", image: "/images/bolso-fiesta-9.jpeg" },
    { id: 10, category: "Cartera Fiesta", image: "/images/bolso-fiesta-10.jpeg" },
    { id: 10.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew5.jpg" },
    { id: 11, category: "Cartera Fiesta", image: "/images/bolso-fiesta-11.jpeg" },
    { id: 12, category: "Cartera Fiesta", image: "/images/bolso-fiesta-12.jpeg" },
    { id: 12.2, category: "Cartera Fiesta", image: "/images/cartera-galerianew6.jpg" },
    { id: 13, category: "Cartera Fiesta", image: "/images/cartera-fiesta-1.jpeg" },
    { id: 14, category: "Cartera Fiesta", image: "/images/cartera-fiesta-2.jpeg" },
    { id: 15, category: "Cartera Fiesta", image: "/images/cartera-fiesta-3.jpeg" },
    { id: 16, category: "Cartera Fiesta", image: "/images/cartera-fiesta-4.jpeg" },
    { id: 17, category: "Cartera Fiesta", image: "/images/cartera-fiesta-5.jpeg" },
    { id: 18, category: "Cartera Fiesta", image: "/images/cartera-fiesta-6.jpeg" },
    { id: 19, category: "Cartera Fiesta", image: "/images/cartera-fiesta-7.jpeg" },
    { id: 20, category: "Cartera Fiesta", image: "/images/cartera-fiesta-8.jpeg" },
    { id: 21, category: "Cartera Fiesta", image: "/images/cartera-fiesta-9.jpeg" },
    { id: 22, category: "Cartera Fiesta", image: "/images/cartera-fiesta-10.jpeg" },
    { id: 23, category: "Cartera Fiesta", image: "/images/cartera-fiesta-11.jpeg" },
    { id: 24, category: "Cartera Fiesta", image: "/images/cartera-fiesta-12.jpeg" },
    { id: 25, category: "Aretes", image: "/images/aretes-brillantes-1.jpeg" },
    { id: 26, category: "Aretes", image: "/images/aretes-brillantes-2.jpeg" },
    { id: 27, category: "Aretes", image: "/images/aretes-brillantes-3.jpeg" },
    { id: 28, category: "Aretes", image: "/images/aretes-brillantes-4.jpeg" },
    { id: 29, category: "Aretes", image: "/images/aretes-brillantes-5.jpeg" },
    { id: 30, category: "Aretes", image: "/images/aretes-brillantes-6.jpeg" },
    { id: 31, category: "Aretes", image: "/images/aretes-brillantes-7.jpeg" },
    { id: 32, category: "Aretes", image: "/images/aretes-brillantes-8.jpeg" },
    { id: 33, category: "Aretes", image: "/images/aretes-brillantes-9.jpeg" },
    { id: 34, category: "Aretes", image: "/images/aretes-brillantes-10.jpeg" },
    { id: 35, category: "Aretes", image: "/images/aretes-brillantes-11.jpeg" },
    { id: 36, category: "Aretes", image: "/images/aretes-brillantes-12.jpeg" },
    { id: 37, category: "Collar Chunky", image: "/images/collar-chunky-1.jpeg" },
    { id: 38, category: "Collar Chunky", image: "/images/collar-chunky-2.jpeg" },
    { id: 39, category: "Collar Chunky", image: "/images/collar-chunky-3.jpeg" },
    { id: 40, category: "Collar Chunky", image: "/images/collar-chunky-4.jpeg" },
    { id: 41, category: "Collar Chunky", image: "/images/collar-chunky-5.jpeg" },
    { id: 42, category: "Collar Chunky", image: "/images/collar-chunky-6.jpeg" },
    { id: 43, category: "Collar Chunky", image: "/images/collar-chunky-7.jpeg" },
    { id: 44, category: "Collar Chunky", image: "/images/collar-chunky-8.jpeg" },
    { id: 45, category: "Collar Chunky", image: "/images/collar-chunky-9.jpeg" },
    { id: 46, category: "Collar Chunky", image: "/images/collar-chunky-10.jpeg" },
    { id: 47, category: "Collar Chunky", image: "/images/collar-chunky-11.jpeg" },
    { id: 48, category: "Collar Chunky", image: "/images/collar-chunky-12.jpeg" },
    { id: 49, category: "Collares Brillantes", image: "/images/collares-brillantes-1.jpeg" },
    { id: 50, category: "Collares Brillantes", image: "/images/collares-brillantes-2.jpeg" },
    { id: 51, category: "Collares Brillantes", image: "/images/collares-brillantes-3.jpeg" },
    { id: 52, category: "Collares Brillantes", image: "/images/collares-brillantes-4.jpeg" },
    { id: 53, category: "Collares Brillantes", image: "/images/collares-brillantes-5.jpeg" },
    { id: 54, category: "Collares Brillantes", image: "/images/collares-brillantes-6.jpeg" },
    { id: 55, category: "Collares Brillantes", image: "/images/collares-brillantes-7.jpeg" },
    { id: 56, category: "Collares Brillantes", image: "/images/collares-brillantes-8.jpeg" },
    { id: 57, category: "Collares Brillantes", image: "/images/collares-brillantes-9.jpeg" },
    { id: 58, category: "Coronas", image: "/images/corona-n2.jpg" },
    { id: 59, category: "Coronas", image: "/images/corona-n3.jpg" },
    { id: 60, category: "Coronas", image: "/images/corona-n4.jpg" },
    { id: 61, category: "Coronas", image: "/images/corona-n5.jpg" },
    { id: 62, category: "Coronas", image: "/images/corona-n6.jpg" },
    { id: 63, category: "Coronas", image: "/images/corona-n7.jpg" },
    { id: 64, category: "Coronas", image: "/images/corona-n9.jpg" },
    { id: 65, category: "Coronas", image: "/images/corona-n10.jpg" },
    { id: 66, category: "Coronas", image: "/images/corona-n11.jpg" },
    { id: 67, category: "Coronas", image: "/images/corona-n12.jpg" },
    { id: 68, category: "Collares Indu", image: "/images/collares-indu-dama-01.jpeg" },
    { id: 69, category: "Collares Indu", image: "/images/collares-indu-dama-02.jpeg" },
    { id: 70, category: "Collares Indu", image: "/images/collares-indu-dama-03.jpeg" },
    { id: 71, category: "Collares Indu", image: "/images/collares-indu-dama-04.jpeg" },
    { id: 72, category: "Collares Indu", image: "/images/collares-indu-dama-05.jpeg" },
    { id: 73, category: "Collares Indu", image: "/images/collares-indu-dama-06.jpeg" },
    { id: 74, category: "Collares Indu", image: "/images/collares-indu-dama-07.jpeg" },
    { id: 75, category: "Collares Indu", image: "/images/collares-indu-dama-08.jpeg" },
    { id: 76, category: "Collares Indu", image: "/images/collares-indu-dama-09.jpeg" },
    { id: 77, category: "Collares Indu", image: "/images/collares-indu-dama-10.jpeg" },
    { id: 79, category: "Collares Indu", image: "/images/collares-indu-dama-12.jpeg" },
    { id: 80, category: "Collares Indu", image: "/images/collares-indu-dama-13.jpeg" },
    { id: 81, category: "Collares Indu", image: "/images/collares-indu-dama-14.jpeg" },
    { id: 82, category: "Collares Indu", image: "/images/collares-indu-dama-15.jpeg" },
    { id: 83, category: "Pulseras", image: "/images/pulsera.jpg" },
    { id: 84, category: "Pulseras", image: "/images/pulsera1.jpg" },
    { id: 85, category: "Pulseras", image: "/images/pulsera2.jpg" },
    { id: 86, category: "Pulseras", image: "/images/pulsera3.jpg" },
    { id: 87, category: "Pulseras", image: "/images/pulsera4.jpg" },
    { id: 88, category: "Pulseras", image: "/images/pulsera5.jpg" },
    { id: 89, category: "Pulseras", image: "/images/pulsera6.jpg" },
    { id: 90, category: "Pulseras", image: "/images/pulsera7.jpg" },
    { id: 91, category: "Chalinas", image: "/images/chalinas-señorial--01.jpeg"}, 
    { id: 92, category: "Chalinas", image: "/images/chalinas-señorial--02.jpeg" },
    { id: 93, category: "Chalinas", image: "/images/chalinas-señorial--03.jpg" },
    { id: 94, category: "Chalinas", image: "/images/chalinas-señorial--04.jpg" },
    { id: 95, category: "Chalinas", image: "/images/chalinas-señorial--05.jpeg" },
    { id: 96, category: "Chalinas", image: "/images/chalinas-señorial--06.jpeg" },
    { id: 97, category: "Chalinas", image: "/images/chalinas-señorial--07.jpeg" },
    { id: 98, category: "Chalinas", image: "/images/chalinas-señorial--08.jpeg" },
    { id: 99, category: "Chalinas", image: "/images/chalinas-señorial--09.jpeg" },
    { id: 100, category: "Chalinas", image: "/images/chalinas-señorial--10.jpg" },
    { id: 101, category: "Chalinas", image: "/images/chalinas-señorial--11.jpeg" },
    { id: 102, category: "Chalinas", image: "/images/chalinas-señorial--12.jpeg" },
    { id: 103, category: "Chalinas", image: "/images/chalinas-señorial--13.jpg" },
    { id: 104, category: "Chalinas", image: "/images/chalinas-señorial--14.jpg" },
    { id: 105, category: "Chalinas", image: "/images/chalinas-señorial--15.jpg" },
    { id: 106, category: "Chalinas", image: "/images/chalinas-señorial--16.jpg" },
    { id: 107, category: "Chalinas", image: "/images/chalinas-señorial--17.jpg" },
    { id: 108, category: "Chalinas", image: "/images/chalinas-señorial--18.jpg" },
    { id: 109, category: "Chalinas", image: "/images/chalinas-señorial--19.jpg" },
    { id: 110, category: "Chalinas", image: "/images/chalinas-señorial--20.jpg" },
    { id: 111, category: "Chalinas", image: "/images/chalinas-señorial--21.jpg" },
    { id: 112, category: "Chalinas", image: "/images/chalinas-señorial--22.jpeg" },
    { id: 113, category: "Pañoletas", image: "/images/pañoletas-satin-01.jpeg" },
    { id: 114, category: "Pañoletas", image: "/images/pañoletas-satin-02.jpeg" },
    { id: 115, category: "Pañoletas", image: "/images/pañoletas-satin-03.jpeg" },
    { id: 116, category: "Pañoletas", image: "/images/pañoletas-satin-04.jpeg" },
    { id: 117, category: "Pañoletas", image: "/images/pañoletas-satin-05.jpeg" },
    { id: 118, category: "Pañoletas", image: "/images/pañoletas-satin-06.jpeg" },
    { id: 119, category: "Pañoletas", image: "/images/pañoletas-satin-07.jpeg" },
    { id: 120, category: "Pañoletas", image: "/images/pañoletas-satin-08.jpeg" },
    { id: 121, category: "Pañoletas", image: "/images/pañoletas-satin-09.jpeg" },
    { id: 122, category: "Pañoletas", image: "/images/pañoletas-satin-10.jpeg" },
    { id: 123, category: "Botones Buho", image: "/images/botones-01.jpeg" },
    { id: 124, category: "Boton Flor", image: "/images/botones-02.jpeg" },
    { id: 125, category: "Boton Colibri", image: "/images/botones-03.jpeg" },
    { id: 126, category: "Boton Pelicano", image: "/images/botones-04.jpeg" },
    { id: 127, category: "Boton Muñeca", image: "/images/botones-05.jpeg" },

]
    

// const categories = ["Todos", "Pañoletas", "Chalinas", "Cartera Fiesta", "Collar Chunky", "Collares Indu", "Collares Brillantes", "Aretes", "Botones", "Pulseras", "Coronas", ...Object.keys(PRICES_BY_CATEGORY)] as (string | CategoryName)[];
// Correcto: Fusiona el array de llaves con el array inicial
const categories = ["Todos", ...Object.keys(PRICES_BY_CATEGORY)]

// Tipado corregido para eliminar el error 'any' implícito
const formatPrice = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined || amount === 0) return "Consúltenos";
  
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount);
};

// 4. COMPONENTE PRINCIPAL
// =========================================================================

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);
      
  return (
    <div id="galeria" className="scroll-mt-28 min-h-screen pt-36 sm:pt-40 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Productos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explora nuestra colección. Precios especiales para mayoristas y dropshipping.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              // Aseguramos que category sea string para la comparación
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category as string)}
              className={`rounded-full text-sm sm:text-base px-4 sm:px-6 py-2 ${
                selectedCategory === category
                  ? "bg-[#FCBAA0] hover:bg-[#FCBAA0] text-white"
                  : "border-gray-300 hover:border-[#FCBAA0] hover:text-[#FCBAA0]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            
            // ✅ Búsqueda segura usando el tipado CategoryName
            const prices = PRICES_BY_CATEGORY[item.category];

            return (
              <Card
                key={item.id}
                className="overflow-hidden group bg-white cursor-pointer hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 sm:h-80 lg:h-96 bg-white overflow-hidden">
                  <Image
                    src={item.image}
                    alt=''
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-contain bg-white group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay con la información de precios */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-6 backdrop-blur-[2px]">
                    
                    <span className="text-white font-display text-xl sm:text-2xl font-semibold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </span>

                    <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      
                      {/* Precio Unitario */}
                      <div className="flex justify-between items-center text-white">
                        <span className="text-sm font-light">Precio Unitario:</span>
                        <span className="font-bold text-lg">{formatPrice(prices.unitario)}</span>
                      </div>

                      {/* Precio Mayorista (Destacado en color) */}
                      <div className="flex justify-between items-center text-[#FCBAA0]">
                        <span className="text-sm font-medium">Mayorista:</span>
                        <span className="font-bold">{formatPrice(prices.mayorista)}</span>
                      </div>

                      {/* Precio Dropshipping */}
                      <div className="flex justify-between items-center text-gray-300">
                        <span className="text-xs">Dropshipping:</span>
                        <span className="text-sm">{formatPrice(prices.dropshipping)}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">¿Necesitas precios personalizados o grandes volúmenes?</p>
          <Button
            size="lg"
            className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}



// export default function ProductosPage() {
//   const [selectedCategory, setSelectedCategory] = useState("Todos")
  
//   const filteredItems =
//     selectedCategory === "Todos"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === selectedCategory)
      

//   return (
//     <div id="galeria" className="scroll-mt-28 min-h-screen pt-36 sm:pt-40 pb-12 sm:pb-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
//             Productos
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//             Explora algunos accesorios de nuestra colección. Cada pieza cuenta una historia de elegancia y estilo.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className={`rounded-full text-sm sm:text-base px-4 sm:px-6 py-2 ${
//                 selectedCategory === category
//                   ? "bg-[#FCBAA0] hover:bg-[#FCBAA0] text-white"
//                   : "border-gray-300 hover:border-[#FCBAA0] hover:text-[#FCBAA0]"
//               }`}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {filteredItems.map((item, index) => (
//             <Card
//               key={item.id}
//               className="overflow-hidden group bg-white cursor-pointer hover:shadow-2xl transition-all duration-300"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//               }}
//             >
//               <div className="relative  h-64 sm:h-80 lg:h-96 bg-white overflow-hidden">

//                 <Image
//                   src={item.image}
//                   alt={item.category}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   priority
//                   // className="object-cover group-hover:scale-110 transition-transform duration-500"
                 
//                   // ... otras props
//                   className="object-contain bg-white group-hover:scale-110 transition-transform duration-500" // <-- CAMBIAR a object-contain

//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4 sm:p-6">
//                   <span className="text-white font-display text-xl sm:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
//                     {item.category}
//                   </span>
//                   <span className="text-white text-lg font-medium">
//                     {item.price}
//                   </span>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12 sm:mt-16">
//           <p className="text-gray-600 mb-4 text-sm sm:text-base">¿Te gustó lo que viste?</p>
//           <Button
//             size="lg"
//             className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base"
//           >
//             Comprar Ahora
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

