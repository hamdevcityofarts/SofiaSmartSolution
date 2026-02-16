import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import CartDrawer from "../components/CartDrawer";
import { books as allBooks } from "../data/books";
import { motion } from "framer-motion";

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [searchActive, setSearchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const categories = ["all", ...new Set(allBooks.map(book => book.category))];
  
  const handleSearchResults = (results) => {
    setFilteredBooks(results);
    setSearchActive(true);
  };

  const displayBooks = selectedCategory === "all" 
    ? filteredBooks 
    : filteredBooks.filter(book => book.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
        {/* Header responsive */}
        <header className="max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            Librairie Sofia
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Découvrez notre sélection d'ouvrages spécialisés,
            conçus pour accompagner la transformation digitale
            {!isMobile && " et la montée en compétences"}
          </p>
        </header>

        {/* Barre de recherche */}
        <SearchBar books={allBooks} onSearchResults={handleSearchResults} />

        {/* Filtres par catégories - Version mobile avec toggle */}
        {displayBooks.length > 0 && (
          <div className="mb-4 sm:mb-6 md:mb-8">
            {isMobile ? (
              <>
                <button
                  onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                  className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200 mb-2"
                >
                  <span className="font-medium text-sm">
                    Catégorie: {selectedCategory === "all" ? "Toutes" : selectedCategory}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showCategoryFilter && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-4"
                  >
                    <CategoryFilter 
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onSelectCategory={(cat) => {
                        setSelectedCategory(cat);
                        setShowCategoryFilter(false);
                      }}
                    />
                  </motion.div>
                )}
              </>
            ) : (
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            )}
          </div>
        )}

        {/* Résultats */}
        {displayBooks.length > 0 ? (
          <>
            <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
              {displayBooks.length} livre{displayBooks.length > 1 ? 's' : ''} trouvé{displayBooks.length > 1 ? 's' : ''}
              {selectedCategory !== "all" && ` dans la catégorie "${selectedCategory}"`}
            </div>

            {/* Grille de livres responsive */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            >
              {displayBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-16 md:py-20"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🔍</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">
              Aucun livre trouvé
            </h3>
            <p className="text-sm sm:text-base text-gray-500 px-4">
              Essayez de modifier vos critères de recherche ou de réinitialiser les filtres
            </p>
          </motion.div>
        )}

        {/* Panier flottant - caché sur mobile si nécessaire */}
        {!isMobile && <CartDrawer />}
      </div>
    </section>
  );
}