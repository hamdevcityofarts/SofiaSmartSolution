import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "237612345678"; // À modifier

export default function BookCard({ book }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé par le livre "${book.title}" de ${book.author}. Est-il toujours disponible ?`
    );
    window.open(`https://wa.me/${"+237 656708074"}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      whileHover={!isMobile ? { y: -6 } : {}}
      className="bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col h-full"
    >
      <Link to={`/librairie/${book.id}`} className="flex-grow">
        {/* Image responsive */}
        <div className="relative aspect-[3/4] sm:aspect-auto sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden">
          <img
            src={book.cover}
            alt={book.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          {/* Badge catégorie pour mobile */}
          {isMobile && (
            <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
              {book.category}
            </span>
          )}
        </div>

        <div className="p-3 sm:p-4 lg:p-5">
          {/* Catégorie - cachée sur mobile car dans l'image */}
          {!isMobile && (
            <div className="mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                {book.category}
              </span>
            </div>
          )}
          
          <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 line-clamp-2">
            {book.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
            {book.author}
          </p>
          
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2 sm:mb-3">
            {book.description}
          </p>
        </div>
      </Link>

      <div className="p-3 sm:p-4 lg:p-5 pt-0 border-t">
        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Prix, stock et note */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-bold text-accent text-sm sm:text-base lg:text-lg">
                {book.price !== null ? (
                  `${book.price.toLocaleString()} ${book.currency}`
                ) : (
                  "Prix non défini"
                )}
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500">
                {book.stock > 0 ? `${book.stock} en stock` : "Rupture"}
              </p>
            </div>

            {/* Note - visible sur tous les écrans */}
            {book.rating && (
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < Math.floor(book.rating)
                          ? 'text-yellow-400'
                          : i < book.rating
                          ? 'text-yellow-300'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  ({book.rating})
                </span>
              </div>
            )}
          </div>

          {/* Bouton WhatsApp responsive */}
          <button
            onClick={handleWhatsAppClick}
            disabled={book.stock === 0}
            className={`w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-xs sm:text-sm ${
              book.stock > 0
                ? "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 sm:hover:scale-105" 
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.447-1.273.607-1.446c.16-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
            </svg>
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="xs:hidden">WA</span>
          </button>

          {/* Formats disponibles pour mobile */}
          {isMobile && book.formats && (
            <div className="flex flex-wrap gap-1 mt-1">
              {book.formats.map(format => (
                <span key={format} className="text-[8px] px-1.5 py-0.5 bg-gray-100 rounded-full">
                  {format}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}