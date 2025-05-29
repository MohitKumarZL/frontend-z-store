import React from "react";
import Navbar from "./Components/Navbar"; 
import Hero from "./pages/Hero";
import Login from "./Components/Login";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import PlusSize from "./pages/PlusSize";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopAll from "./pages/ShopAll";
import CollectionDropdown from "./Components/Dropdowns/CollectionDropdown";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopAll" element={<ShopAll />} />
        <Route path="/collectiondropdown" element={<CollectionDropdown />} />
        <Route path="/plusSize" element={<PlusSize />} />
      </Routes>
      
    </Router>
  );
}

export default App;