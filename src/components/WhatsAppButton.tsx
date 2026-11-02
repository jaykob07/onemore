export default function WhatsAppButton() {
  const phoneNumber = "573247673052";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("¡Hola! Quisiera recibir más información.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5c] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute -inset-1 rounded-full bg-white/40 animate-ping opacity-75"></span>
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.131zm10.741-5.184c-.314-.157-1.86-1.016-2.147-1.121-.287-.105-.496-.157-.706.157-.21.314-.811 1.021-.994 1.23-.183.21-.366.236-.68.079-.314-.157-1.327-.489-2.528-1.56-.935-.833-1.567-1.862-1.75-2.176-.183-.314-.02-.484.137-.64.141-.141.314-.366.471-.55.157-.183.209-.314.314-.523.105-.21.052-.393-.026-.55-.079-.157-.706-1.701-.967-2.327-.254-.609-.513-.526-.706-.536-.183-.01-.393-.01-.602-.01-.21 0-.55.079-.837.393-.287.314-1.099 1.073-1.099 2.616 0 1.543 1.125 3.031 1.282 3.241.157.21 2.213 3.38 5.362 4.74.749.324 1.334.517 1.79.662.753.239 1.438.205 1.98.124.605-.09 1.86-.76 2.122-1.493.262-.733.262-1.36.183-1.493-.079-.133-.287-.21-.601-.367z" />
        </svg>
      </div>
      <span className="hidden sm:inline font-semibold text-sm pr-1">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
