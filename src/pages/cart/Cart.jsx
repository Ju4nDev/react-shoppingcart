import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import ShopContext from "../../context/ShopContext";

import CartItem from "./CartItem";

import "./styles/cart.css";

export default function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return(
        <>
            <div className="cart">
                <div>
                    <h1>Your Cart Items</h1>
                </div>
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0){
                            return <CartItem key={product.id} data={product}></CartItem>
                        }
                    })}
                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p>Subtotal: R$ {totalAmount}</p>
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button>Checkout</button>
                    </div>
                ) : (
                    <div className="cart-empty">
                        <h1>Your Cart is empty!</h1>
                    </div>
                )}
            </div>
        </>
    );
}