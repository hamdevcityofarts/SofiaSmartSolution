import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: book.id,
      title: book.title,
      price: book.price,
      currency: book.currency,
      cover: book.cover,
      author: book.author,
      quantity: 1
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
    >
      <Link to={`/librairie/${book.id}`} className="flex-grow">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-64 w-full object-cover"
        />
        <div className="p-5">
          <div className="mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
              {book.category}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-1 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {book.author}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {book.description}
          </p>
        </div>
      </Link>

      <div className="p-5 pt-0 border-t">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-accent text-lg">
              {book.price.toLocaleString()} {book.currency}
            </span>
            <p className="text-xs text-gray-500">
              {book.stock > 0 ? `${book.stock} en stock` : "Rupture"}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={book.stock === 0}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              book.stock > 0 
                ? "bg-accent text-white hover:scale-105" 
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {book.stock > 0 ? "Ajouter" : "Indisponible"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}