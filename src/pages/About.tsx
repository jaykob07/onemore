import Image from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Award, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section mt-16 para mobile no se pegue al navbar*/}
      <section className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Nuestra Historia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            OneMore nació del amor por los detalles que hacen la diferencia. Creemos que cada accesorio cuenta una historia y complementa tu personalidad única.
          </p>
        </div>

        {/* Image & Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/equipo.jpeg"
              alt="OneMore Story"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-black">
              Más Que Accesorios
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              En One More, traemos a Colombia estilo, elegancia y calidad desde 2012. Con más de una década de trayectoria, nuestra esencia reside en una curaduría de alta calidad: seleccionamos piezas importadas y, al mismo tiempo, impulsamos la manufactura local. Combinamos el arte artesanal de manos expertas y certificadas con la tecnología moderna, ofreciendo accesorios que cuentan una historia.
            </p>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Nuestra escencia
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#FCBAA0]" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Mision</h3>
              <p className="text-gray-600">
                En One More diseñamos, producimos y comercializamos productos colombianos elaborados con pasión, calidad y creatividad.
                Nuestra misión es ofrecer estilo, elegancia y tendencias de temporada a precios accesibles, apoyando el talento local y brindando a nuestros clientes la posibilidad de expresar su personalidad a través de cada detalle.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#FCBAA0]" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600">
                Ser reconocidos a nivel nacional como una marca líder en moda y accesorios colombianos, destacándonos por la calidad, la innovación y el compromiso con lo artesanal. Nos proyectamos como una empresa que impulsa el crecimiento del talento local y que viste con elegancia y orgullo colombiano a todo el país y más allá de nuestras fronteras.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#FCBAA0]" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600">
                Calidad: garantizamos excelencia en cada producto, combinando procesos modernos y técnicas artesanales.
                Pasión: amamos lo que hacemos y lo reflejamos en cada diseño.
                Compromiso: trabajamos con responsabilidad hacia nuestros clientes y colaboradores.
                Creatividad: transformamos ideas en estilo, inspirándonos en las tendencias de cada temporada.
                Orgullo colombiano: apoyamos la producción nacional y promovemos el talento de nuestro país.
                Accesibilidad: creemos que la elegancia debe estar al alcance de todos.

              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8">
            Nuestra Promesa de Calidad
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4">
            En OneMore, la calidad no es negociable. Cada accesorio pasa por rigurosos controles de calidad antes de llegar a tus manos. Trabajamos directamente con artesanos y proveedores confiables para garantizar que cada pieza cumpla con nuestros altos estándares.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#FCBAA0] mb-2">100%</div>
              <p className="text-gray-600 text-sm sm:text-base">Materiales Auténticos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#FCBAA0] mb-2">30</div>
              <p className="text-gray-600 text-sm sm:text-base">Días de Garantía</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#FCBAA0] mb-2">24/7</div>
              <p className="text-gray-600 text-sm sm:text-base">Soporte al Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FCBAA0] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Únete a la Familia OneMore
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Miles de mujeres ya confían en nosotros. ¿Lista para descubrir tu próximo accesorio favorito?
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-white text-[#FCBAA0] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium"
            >
              Contáctanos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}