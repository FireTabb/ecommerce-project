import dayjs from "dayjs";
import axios from "axios";
import { Fragment } from "react";

export function OrdersDetails({ order, getCarts }) {
  return (
    <div className="order-details-grid">
      {order.products.map((product) => {
        const addProduct = async () => {
          await axios.post("/api/cart-items", {
            productId: product.product.id,
            quantity: product.quantity,
          });
          await getCarts();
        };

        return (
          <Fragment key={product.product.id}>
            <div className="product-image-container">
              <img src={product.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{product.product.name}</div>
              <div className="product-delivery-date">
                {dayjs(product.estimatedDeliveryTimeMs).format("MMMM,D")}
              </div>
              <div className="product-quantity">Quantity: {product.quantity}</div>
              <button className="buy-again-button button-primary" onClick={addProduct}>
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="/tracking">
                <button className="track-package-button button-secondary">Track package</button>
              </a>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
