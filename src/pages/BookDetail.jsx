import { useParams } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../context/CartContext";

export default function BookDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-2xl font-bold">Livre introuvable</h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
      <img
        src={book.cover}
        alt={book.title}
        className="rounded-2xl shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">
          {book.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {book.author}
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          {book.description}
        </p>

        <div className="flex items-center gap-6 mb-10">
          <span className="text-3xl font-bold text-accent">
            {book.price.toLocaleString()} {book.currency}
          </span>
          <span className="text-sm text-gray-500">
            Stock : {book.stock}
          </span>
        </div>

        <button
          onClick={() => addToCart(book)}
          className="bg-accent text-white px-8 py-4 rounded-xl
                     font-semibold hover:scale-105 transition"
        >
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}
