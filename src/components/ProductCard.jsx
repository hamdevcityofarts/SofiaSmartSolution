import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />

      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-500 mb-3">{product.price} FCFA</p>

      <div className="flex justify-between items-center">
        <Link
          to={`/shop/${product.id}`}
          className="text-primary font-medium"
        >
          Voir détail
        </Link>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
