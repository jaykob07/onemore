import Image from "@/components/ui/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { id: 1, category: "Cartera", image: "/images/m16.jpeg" },
  { id: 2, category: "Cartera", image: "/images/m1.jpeg" },
  { id: 3, category: "Aretes", image: "/images/m2.jpeg" },
  { id: 3.2, category: "Aretes", image: "/images/m17.jpeg" },
  { id: 4, category: "Aretes", image: "/images/m3.jpeg" },
  { id: 5, category: "Aretes", image: "/images/m4.jpeg" },
  { id: 6, category: "Aretes", image: "/images/m5.jpeg" },
  { id: 7, category: "Collar", image: "/images/m6.jpeg" },
  { id: 8, category: "Aretes", image: "/images/m11.jpeg" },
  { id: 9, category: "Aretes", image: "/images/arete-brillante-mano.jpg" },
  { id: 10, category: "Collares Indu", image: "/images/collar-indu2.jpg" },
  { id: 11, category: "Collares Indu", image: "/images/collar-indu.jpg" },
  { id: 13, category: "Aretes", image: "/images/m13.jpeg" },
  { id: 14, category: "Aretes", image: "/images/arete-brillante-mano4.jpg" },
  { id: 15, category: "Collar", image: "/images/m7.jpeg" },
  { id: 16, category: "Pañoleta", image: "/images/m8.jpeg" },
  { id: 17, category: "Pañoleta", image: "/images/m9.jpeg" },
  { id: 18, category: "Collar", image: "/images/m10.jpeg" },
  { id: 19, category: "Collares Chunky", image: "/images/collar-chunky.jpeg" },
  { id: 20, category: "Collares Chunky", image: "/images/collar-chunky2.png" },
  { id: 21, category: "Collares Chunky", image: "/images/collar-chunky5.jpg" },
  { id: 22, category: "Collares Chunky", image: "/images/collar-chunky1.png" },
  { id: 23, category: "Collares Chunky", image: "/images/collar-chunky6.jpg" },
  { id: 24, category: "Aretes", image: "/images/m15.jpeg" },
  { id: 25, category: "Aretes", image: "/images/arete-brillante-mano3.jpg" },
  { id: 26, category: "Aretes", image: "/images/m14.jpeg" },  // apa
  { id: 27, category: "Aretes", image: "/images/arete-brillante-mano2.jpg" },
  { id: 28, category: "Collares Chunky", image: "/images/collar-chunky3.png" },
  { id: 29, category: "Collares Chunky", image: "/images/collar-chunky4.jpg" },
  { id: 34, category: "Collares Brillantes", image: "/images/collares-brillantes-modelo-07.png" },
  { id: 38, category: "Collares Brillantes", image: "/images/collares-brillantes-modelo-01.png" },
  { id: 39, category: "Collares Brillantes", image: "/images/collares-brillantes-modelo-08.png" },
  { id: 40, category: "Collares Brillantes", image: "/images/collares-brillantes-modelo-05.png" },
  { id: 41, category: "Collares Brillantes", image: "/images/collares-brillantes-modelo-06.png" },
];



export default function GaleriaPage() {
  return (
    <div id="galeria" className="scroll-mt-28 min-h-screen pt-36 sm:pt-40 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Galería
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Asi lucen algunas de nuestras piezas. Explora nuestra colección de accesorios únicos.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Cada pieza cuenta una historia de elegancia y estilo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 bg-[#EAE6E5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  className="object-contain bg-[#EAE6E5] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4 sm:p-6">
                  <span className="text-white font-display text-xl sm:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {item.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">¿Te gustó lo que viste?</p>
          <Button
            size="lg"
            className="bg-[#FA8072] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            Comprar Ahora
          </Button>
        </div>
      </div>
    </div>
  )
}