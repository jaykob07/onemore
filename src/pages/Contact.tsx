
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactoPage() {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Hero Section */}
            <section className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
                        Contáctanos
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Estamos aquí para ayudarte. Escríbenos para cualquier duda, pedido o colaboración.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="font-display text-3xl font-bold mb-6">Información de Contacto</h2>

                        <div className="grid gap-6">
                            <Card className="p-6 flex items-start space-x-4">
                                <div className="bg-[#FCBAA0]/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-[#FCBAA0]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Atención rápida y personalizada</p>
                                    <a
                                        href="https://wa.me/573187949929"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FA8072] font-semibold hover:underline"
                                    >
                                        +57 318 794 9929
                                    </a>
                                </div>
                            </Card>

                            <Card className="p-6 flex items-start space-x-4">
                                <div className="bg-[#FCBAA0]/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-[#FCBAA0]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600 mb-2">Para consultas generales</p>
                                    <a
                                        href="mailto:contacto@onemore.com.co"
                                        className="text-[#FA8072] font-semibold hover:underline"
                                    >
                                        contacto@onemore.com.co
                                    </a>
                                </div>
                            </Card>

                            <Card className="p-6 flex items-start space-x-4">
                                <div className="bg-[#FCBAA0]/10 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-[#FCBAA0]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                                    <p className="text-gray-600">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Domingos y Festivos: Cerrado</p>
                                </div>
                            </Card>

                            <Card className="p-6 flex items-start space-x-4">
                                <div className="bg-[#FCBAA0]/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-[#FCBAA0]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                                    <p className="text-gray-600">Bogotá, Colombia</p>
                                    <p className="text-gray-600">Envíos a todo el país</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* FAQ / Message */}
                    <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
                        <h2 className="font-display text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                        <p className="text-gray-600 mb-8">
                            ¿Prefieres que te contactemos? Haz clic en el siguiente botón para abrir un chat directo con nuestro equipo de ventas en WhatsApp.
                        </p>

                        <a
                            href="https://wa.me/573187949929?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                Chat en WhatsApp
                            </Button>
                        </a>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="font-bold text-lg mb-4">Preguntas Frecuentes</h3>
                            <ul className="space-y-4">
                                <li>
                                    <p className="font-medium text-gray-800">¿Hacen envíos a todo el país?</p>
                                    <p className="text-gray-600 text-sm">Sí, realizamos despachos seguros a todos los departamentos de Colombia.</p>
                                </li>
                                <li>
                                    <p className="font-medium text-gray-800">¿Venden al por mayor?</p>
                                    <p className="text-gray-600 text-sm">Claro que sí. Tenemos precios especiales para emprendedores y distribuidores.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
