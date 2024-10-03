import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/login/SignIn";
import SignUp from "./Pages/login/SignUp";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Contact from "./Pages/Contact/Contact";
import KaranJoharProducts from "./ProductOne/KaranJoharProducts";
import KaranJohar from "./ProductTwo/KaranJohar";
import Cart from "./Pages/Cart/Cart";
import Kid from "./ProductTwo/Kid";
import KidProduct from "./ProductOne/KidProduct";
import Men from "./ProductTwo/Men";
import MenProduct from "./ProductOne/MenProduct";
import Women from "./ProductTwo/Women";
import WomenProduct from "./ProductOne/WomenProduct";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karanjoharproduct" element={<KaranJohar />} />
        <Route path="/karanjoharproduct/:id" element={<KaranJoharProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kidProduct" element={<Kid />} />
        <Route path="/kidproduct/:id" element={<KidProduct />} />
        <Route path="/menproduct" element={<Men />} />
        <Route path="/menproduct/:id" element={<MenProduct />} />
        <Route path="/womenProduct" element={<Women />} />
        <Route path="/womenProduct/:id" element = {<WomenProduct/>} />
      </Routes>
    </>
  );
}

export default App;
