import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../store/cartSlice";
import QuantityControl from "./QuantityControl";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  
  // Calculer le total
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) return null;

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 bg-white w-full max-w-sm rounded-xl shadow-2xl p-5 z-50 border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Votre Panier</h3>
        <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
          {items.reduce((sum, item) => sum + item.quantity, 0)} article(s)
        </span>
      </div>

      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
            <img 
              src={item.cover} 
              alt={item.title}
              className="w-12 h-12 object-cover rounded"
            />
            
            <div className="flex-grow">
              <p className="font-medium text-sm line-clamp-1">{item.title}</p>
              <p className="text-xs text-gray-500">{item.author}</p>
              <p className="font-semibold text-accent text-sm">
                {item.price.toLocaleString()} XAF
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <QuantityControl 
                quantity={item.quantity}
                onIncrease={() => dispatch(increaseQty(item.id))}
                onDecrease={() => dispatch(decreaseQty(item.id))}
              />
              
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total :</span>
          <span className="font-bold text-lg">
            {total.toLocaleString()} XAF
          </span>
        </div>

        <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed">
          Procéder au paiement
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-2">
          Le paiement en ligne sera disponible prochainement
        </p>
      </div>
    </div>
  );
}