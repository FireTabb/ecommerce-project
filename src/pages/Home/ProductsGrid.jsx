import { Product } from "./Product";

export function ProductsGrid({ products, getCarts }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return <Product key={product.id} product={product} getCarts={getCarts} />;
      })}
    </div>
  );
}
