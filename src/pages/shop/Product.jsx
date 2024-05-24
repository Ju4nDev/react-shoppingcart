import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

export default function Product(props) {
    const { id, productName, price, productImage } = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemsAmount = cartItems[id];

    return(
        <>
            <div className="product">
                <img src={productImage} alt="Imagem dos produtos" />
                <div className="description">
                    <p>{productName}</p>
                    <p>R${price}</p>
                    <button className="btnAddToCart" onClick={() => addToCart(id)}>
                        Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                    </button>
                </div>
            </div>
        </>
    )
}