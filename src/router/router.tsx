import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";

import CollectionsPage from "../pages/CollectionsPage";
import CollectionsIndividual from "../components/CollectionsIndividual";
import ProductIndividual from "../components/ProductIndividual";
import BlogIndividual from "../components/BlogIndividual";
import Blog from "../pages/Blog";
import About from "../pages/About";
import CartPage from "../pages/CartPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/collections" element={<CollectionsPage />} /> 
          <Route path="/collections/:name" element={<CollectionsIndividual />} /> 
          <Route path="/products/:name" element={<ProductIndividual />} /> 
          
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog/:name" element={<BlogIndividual />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/cart" element={<CartPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;