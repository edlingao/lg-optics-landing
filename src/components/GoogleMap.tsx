interface GoogleMapProps {
  className?: string;
  height?: number;
  showOverlay?: boolean;
  title?: string;
}

export default function GoogleMap({ 
  className = "", 
  height = 400, 
  showOverlay = false,
  title = "Ubicación de L&G OPTICS en Nueva Antequera, Puebla"
}: GoogleMapProps) {
  return (
    <div className={`relative ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3263294003145!2d-98.23997922492424!3d19.049384682149725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7f957a3cb3d%3A0x5f890a81084ccad3!2sL%26G%20Optics!5e0!3m2!1ses-419!2smx!4v1748191405587!5m2!1ses-419!2smx"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl"
        title={title}
      ></iframe>
      
      {showOverlay && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <p className="font-semibold text-navy-900">L&G OPTICS</p>
              <p className="text-sm text-gray-600">Calle 45 Sur #2910, Nueva Antequera, Puebla</p>
            </div>
            <a 
              href="https://maps.google.com/?q=L%26G+Optics,+45+Sur+2910,+Nueva+Antequera,+Puebla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors duration-300"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}