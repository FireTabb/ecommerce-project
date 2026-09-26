import { useState, useEffect } from "react";
import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/Orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";
import { Route, Routes } from "react-router";
import axios from "axios";
import "./App.css";

function App() {
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCarts(response.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCarts();
  }, []);

  return (
    <Routes>
      {/* {<Route path="/" element={<HomePage />} />} */}
      <Route index element={<HomePage carts={carts} getCarts={getCarts} />} />
      {/* ↑ both top codes do same ↑ */}

      <Route path="checkout" element={<CheckoutPage carts={carts} />} />
      <Route path="orders" element={<OrdersPage carts={carts} />} />
      <Route path="tracking" element={<TrackingPage carts={carts} />} />
    </Routes>
  );
}

export default App;
