import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopProvider from "./context/ShopProvider";

export default function RouterConfig() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopProvider>
  );
}
