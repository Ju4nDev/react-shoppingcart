import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

export default function CartItem(props) {
    const { id, productName, price, productImage} = props.data;
    const { addToCart, removeFromCart, updateCartItemCount, cartItems} = useContext(ShopContext);

    return(
        <>
            <div className="cartItem">
                <img src={productImage} alt="Imagem do produto" />
                <div className="description">
                    <p>{productName}</p>
                    <p>R$ {price}</p>
                    <div className="count-handler">
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
            </div>
        </>
    );
}