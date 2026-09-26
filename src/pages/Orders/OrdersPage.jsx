import axios from "axios";
import { Header } from "../../component/Header";
import { useState, useEffect } from "react";
import { OrdersGrid } from "./OrdersGrid";
import "./OrdersPage.css";

export function OrdersPage({ carts }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getResponse() {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data);
    }
    getResponse();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
