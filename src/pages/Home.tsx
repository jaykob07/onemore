// "use client" removed
import Image from "@/components/ui/image"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Store, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const bestSellers = [
  // ... rest of file unmodified until Link usage

  {
    id: 1,
    name: "Cartera para la noche",
    price: "$ 49900",
    image: "/images/best3.jpeg",
  },
  {
    id: 2,
    name: "Cartera Fiesta",
    price: "$ 59900",
    image: "/images/best1.jpeg",
  },
  {
    id: 3,
    name: "Pañoletas",
    price: "$ 29900",
    image: "/images/exibicion-pañoleta.jpeg",
  },
  {
    id: 4,
    name: "Collar Brillante",
    price: "$ 49900",
    image: "/images/best2.jpeg",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bestSellers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bestSellers.length) % bestSellers.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FFB5A7]/10 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 animate-fade-in leading-tight">
            Brilla con un toque mas

          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Fabricantes e importadores de accesorios únicos que realzan tu belleza natural
          </p>
          <a
            // 🎯 CAMBIO 1: Nueva URL de WhatsApp con el mensaje de compra
            href="https://wa.me/573187949929?text=Quiero%20informacion%20sobre%20sus%20productos%20para%20comprar%20ahora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              {/* 🎯 CAMBIO 2: Texto del botón ajustado (Opcional) */}
              ¡Hablemos de mi compra!
              {/* Puedes mantener el ícono ArrowRight si quieres */}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Retail vs Wholesale Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-8 sm:mb-12 lg:mb-16 px-4">
            ¿Cómo Prefieres Comprar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Retail Card */}

            <Card className="p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FA8072]">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#FCBAA0]" />

                </div>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">Al Detal</h3>
              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                Perfectos para ti. Compra las piezas que amas y destaca con accesorios únicos.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCBAA0] mr-2 shrink-0" />
                  <span>Envío gratis en compras mayores a $200.000</span>
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCBAA0] mr-2 shrink-0" />
                  <span>Garantía de calidad</span>
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCBAA0] mr-2 shrink-0" />
                  <span>Devoluciones fácile</span>
                </li>
              </ul>
              <a
                className="block"
                href="https://wa.me/573187949929?text=Quiero%20informacion%20sobre%20sus%20productos%20para%20comprar%20ahora"
              >
                <Button className="w-full bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full text-sm sm:text-base py-5 sm:py-6">

                  Solicitar Informacion
                </Button>
              </a>
            </Card>

            {/* Wholesale Card */}
            <Card className="p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-black">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/5 flex items-center justify-center">
                  <Store className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                </div>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
                Al Por Mayor
              </h3>
              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                ¿Tienes tienda o vendes en línea? Accede a precios exclusivos por volumen y lleva tu negocio al siguiente nivel.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-2 shrink-0" />
                  <span>Descuentos escalables según cantidad</span>
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-2 shrink-0" />
                  <span>Asesoría personalizada para tu nicho</span>
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-2 shrink-0" />
                  <span>Envíos rápidos y seguros a todo el país</span>
                </li>
              </ul>
              <a
                href="https://wa.me/573187949929?text=Quiero%20informacion%20sobre%20sus%20productos%20para%20comprar%20ahora"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full text-sm sm:text-base py-5 sm:py-6">
                  Solicitar Informacion
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-3 sm:mb-4 px-4">
            Los Más Vendidos
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg">
            Descubre nuestras piezas favoritas
          </p>

          {/* Desktop & Tablet Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {bestSellers.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    // className="full-cover group-hover:scale-110 transition-transform duration-300"
                    className="object-contain bg-white group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 sm:p-4 text-center">
                  <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2">{product.name}</h3>
                  <p className="text-[#FCBAA0] font-bold text-lg sm:text-xl">{product.price}</p>

                </div>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden relative max-w-sm mx-auto">
            <Card className="overflow-hidden">
              {/* <div className="relative h-72 bg-gray-200">
                <Image
                  src={bestSellers[currentSlide].image}
                  alt={bestSellers[currentSlide].name}
                  fill
                  className="object-cover"
                />
              </div> */}
              <div className="relative aspect-[3/4] bg-[#EAE6E5] overflow-hidden">
                <Image
                  src={bestSellers[currentSlide].image}
                  alt={bestSellers[currentSlide].name}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {bestSellers[currentSlide].name}
                </h3>
                <p className="text-[#FCBAA0] font-bold text-2xl">
                  {bestSellers[currentSlide].price}
                </p>
              </div>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              aria-label="Producto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Producto siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {bestSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir al producto ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-[#FCBAA0] w-8" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FCBAA0]">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            ¿Lista para Brillar?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Explora nuestra colección completa y encuentra el accesorio perfecto para ti.
          </p>
          <Link to="/galeria">
            <Button
              size="lg"

              className="bg-white text-[#FCBAA0] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium"
            >
              Ver Galería
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}