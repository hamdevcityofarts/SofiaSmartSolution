import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} from "../store/cartSlice";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-gray-600 mb-8">
          Découvrez nos ouvrages et commencez votre commande.
        </p>
        <Link
          to="/librairie"
          className="inline-block bg-primary text-white px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Aller à la librairie
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12">Votre panier</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* LISTE PRODUITS */}
        <div className="lg:col-span-2 space-y-6">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500">
                  {item.price.toLocaleString()} FCFA
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-3 py-1 border rounded"
                  >
                    −
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:scale-110 transition"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* RÉSUMÉ */}
        <div className="bg-slate-50 p-8 rounded-2xl shadow h-fit">
          <h2 className="text-2xl font-semibold mb-6">Résumé</h2>

          <div className="flex justify-between mb-4">
            <span>Sous-total</span>
            <span>{total.toLocaleString()} FCFA</span>
          </div>

          <div className="flex justify-between mb-6 text-sm text-gray-500">
            <span>Livraison</span>
            <span>À calculer</span>
          </div>

          <div className="border-t pt-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>{total.toLocaleString()} FCFA</span>
          </div>

          <button
            className="w-full mt-8 bg-accent text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Passer à la commande
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 text-sm text-gray-500 hover:text-red-500"
          >
            Vider le panier
          </button>
        </div>
      </div>
    </div>
  );
}
