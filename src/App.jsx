import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/login/SignIn";
import SignUp from "./Pages/login/SignUp";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Contact from "./Pages/Contact/Contact";
import KaranJoharProducts from "./ProductOne/KaranJoharProducts";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karanjoharproduct" element={<KaranJoharProducts />} />
        <Route path="/karanjoharproduct/:id" element={} />
      </Routes>
    </>
  );
}

export default App;
