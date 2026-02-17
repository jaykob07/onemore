import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import Image from "@/components/ui/image"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            {/* 🎯 AQUI: Se agregó la clase bg-white para el fondo del círculo */}
            <Image
              src="/images/one-more-nav.png" // ⬅️ CAMBIA ESTA RUTA
              alt="Logo de la Marca OneMore"
              width={100} // ⬅️ Ajusta el ancho (ej. 100px)
              height={100} // ⬅️ Ajusta el alto (ej. 100px) - ¡Mismo valor que el ancho!
              className="rounded-full object-cover aspect-square bg-white" // ⬅️ Clases para la forma circular, ajuste Y FONDO BLANCO
            />

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Accesorios de moda femenina que complementan tu estilo único.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Síguenos</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/onemore__marioaguirre/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583909481441&mibextid=wwXIfr&rdid=bVooQG60CIHEKUL4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17cGGEDyrM%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@onemoremarioaguirre?_r=1&_t=ZS-93Cr1qh0Xq8&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnJhAJu6G9jXhWALpm7TTBVCRRo01OsG8JRr5ci30jSe_VL54xPPpTO2BdEPM_aem_CufjNX7b00-1dxMMZps6MA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="tiktok"
              >
                <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@onemore.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} OneMore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}