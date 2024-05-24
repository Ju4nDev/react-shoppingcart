import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/shop/Shop";

export default function RouterConfig(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}