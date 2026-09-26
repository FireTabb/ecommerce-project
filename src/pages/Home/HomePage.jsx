import { Header } from "../../component/Header";
import { useState, useEffect } from "react";
import { ProductsGrid } from "./ProductsGrid";
import axios from "axios";
import "./HomePage.css";

export function HomePage({ carts, getCarts }) {
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
        <ProductsGrid products={products} getCarts={getCarts} />
      </div>
    </>
  );
}
