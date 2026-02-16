import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar({ books, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    filterBooks();
  }, [searchTerm, searchBy, priceRange]);

  const filterBooks = () => {
    let filtered = [...books];

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(book => {
        const term = searchTerm.toLowerCase();
        switch (searchBy) {
          case 'title':
            return book.title.toLowerCase().includes(term);
          case 'author':
            return book.author.toLowerCase().includes(term);
          case 'category':
            return book.category.toLowerCase().includes(term);
          case 'all':
          default:
            return (
              book.title.toLowerCase().includes(term) ||
              book.author.toLowerCase().includes(term) ||
              book.category.toLowerCase().includes(term) ||
              (book.description && book.description.toLowerCase().includes(term))
            );
        }
      });
    }

    if (priceRange.min !== '') {
      filtered = filtered.filter(book => book.price !== null && book.price >= Number(priceRange.min));
    }
    if (priceRange.max !== '') {
      filtered = filtered.filter(book => book.price !== null && book.price <= Number(priceRange.max));
    }

    onSearchResults(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSearchBy('all');
    setPriceRange({ min: '', max: '' });
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 mb-6 sm:mb-8">
      <div className="flex flex-col gap-3">
        {/* Barre de recherche principale - Version mobile/desktop */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="w-full sm:w-auto px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          >
            <option value="all">Tous les champs</option>
            <option value="title">Titre</option>
            <option value="author">Auteur</option>
            <option value="category">Catégorie</option>
          </select>
          
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              placeholder={isMobile ? "Rechercher..." : "Rechercher un livre par titre, auteur, catégorie..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
            />
            
            {/* Bouton filtres pour mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
              aria-label="Filtres"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Boutons d'action - Desktop uniquement */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2 text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </button>
          
          {(searchTerm || priceRange.min || priceRange.max) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition text-sm"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {/* Bouton réinitialiser pour mobile */}
        {(searchTerm || priceRange.min || priceRange.max) && isMobile && (
          <button
            onClick={clearFilters}
            className="w-full py-2 text-gray-600 hover:text-gray-900 transition text-sm border border-gray-200 rounded-lg"
          >
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Filtres avancés */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-200 mt-3 sm:mt-4 pt-3 sm:pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                Filtre par prix (XAF)
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="w-full sm:flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Prix minimum</label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                
                <span className="hidden sm:block text-gray-400 mt-6">-</span>
                <div className="w-full sm:hidden text-center text-gray-400 text-sm">à</div>
                
                <div className="w-full sm:flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Prix maximum</label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    placeholder="Aucun"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}