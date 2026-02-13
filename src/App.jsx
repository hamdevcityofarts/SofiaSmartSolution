import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";


/* Layout */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Pages principales */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";



/* Services – Librairie (e-commerce livres) */
import Library from "./pages/Library";
import BookDetail from "./pages/BookDetail";
import ProductDetail from "./pages/ProductDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Pages globales */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        {/* Librairie digitale (service dédié) */}
        <Route path="/librairie" element={<Library />} />
        <Route path="/librairie/:id" element={<BookDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        


        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
