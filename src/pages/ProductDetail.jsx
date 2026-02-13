import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <section className="container mx-auto py-20 grid md:grid-cols-2 gap-10">
      <img src={product.image} className="rounded-xl" />

      <div>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">
          {product.price} FCFA
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-primary text-white px-8 py-4 rounded-xl"
        >
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}
