import { useState } from 'react';
import { PRODUCTS } from '../products'
import ShopContext from "./ShopContext";

//METODO PARA QUE O INDICE DE CADA PRODUTO SEJA INDIVIDUAL
const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i <= PRODUCTS.length; i++){
        cart[i] = 0;
    }

    return cart;
}

export default function ShopProvider({ children }) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //METODO PARA SOMAR OS VALORES DOS ITENS NO CARRINHO
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        //SE HOUVER MAIS DE UM ITEM NO CARRINHO, ELE VÊ QUANDO ITENS DAQUELE PRODUTO ESPECIFICO TEM E MULTIPLICA ISSO PELO SEU VALOR
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    //METODO PARA ADICIONAR NO CARRINHO
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    
    //METODO PARA REMOVER DO CARRINHO
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    //METODO PARA DIMINUIR E AUMENTAR A QUANTIDADE DE ITENS NO CARRINHO
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValues = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

    return(
        <ShopContext.Provider value={contextValues}>{children}</ShopContext.Provider>
    )
}