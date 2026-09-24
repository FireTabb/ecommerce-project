import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { Route, Routes } from "react-router";
import axios from "axios";
import "./App.css";

function App() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function getCarts() {
      const response = await axios.get("/api/cart-items?expand=product");
      setCarts(response.data);
    }
    getCarts();
  }, []);

  return (
    <Routes>
      {/* {<Route path="/" element={<HomePage />} />} */}
      <Route index element={<HomePage carts={carts} />} />
      {/* ↑ both top codes do same ↑ */}

      <Route path="checkout" element={<CheckoutPage carts={carts} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
