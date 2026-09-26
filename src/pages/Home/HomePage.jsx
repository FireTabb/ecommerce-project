import { Header } from "../../componenet/Header";
import { useState, useEffect } from "react";
import { ProductsGrid } from "./ProductsGrid";
import axios from "axios";
import "./HomePage.css";

export function HomePage({ carts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("/api/products");

      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header carts={carts} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
