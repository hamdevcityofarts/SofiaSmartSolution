import { useState } from "react";
import BookCard from "../components/BookCard";
import CategoryFilter from "../components/CategoryFilter";
import CartDrawer from "../components/CartDrawer";
import { books } from "../data/books";

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Extraire toutes les catégories uniques
  const categories = ["all", ...new Set(books.map(book => book.category))];
  
  // Filtrer les livres par catégorie
  const filteredBooks = selectedCategory === "all" 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <header className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Librairie Sofia
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Découvrez notre sélection d'ouvrages spécialisés,
          conçus pour accompagner la transformation digitale
          et la montée en compétences.
        </p>
      </header>

      {/* Filtre par catégories */}
      <div className="mb-10">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Liste des livres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Panier flottant */}
      <CartDrawer />
    </section>
  );
}