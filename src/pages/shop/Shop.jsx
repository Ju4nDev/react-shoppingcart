import { PRODUCTS } from "../../products";
import Product from "./Product";

import "./styles/shop.css"

export default function Shop() {
  return (
    <>
      <div className="shop">
        <div className="shop-title">
          <h1>Loja do Juan</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product}/>
          ))}
        </div>
      </div>
    </>
  );
}
