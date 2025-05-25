import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { displayProductContext } from "../context/DisplayProductsContext";

function UseCart() {
    const { myCartTitles, RemoveFromMyCart, HandelChangeAmount } =
        useContext(cartContext);
    const { products } = useContext(displayProductContext);

    const handelShowCart = () => {
        const allProductCart = myCartTitles.map((el) => {
            const Pro_founded = products?.find((p) => p.title == Object.keys(el)[0]);
            return { ...Pro_founded, amount: Object.values(el)[0] };
        });
        return allProductCart;
    };

    const cart_products = handelShowCart();

    const subTotall = cart_products.reduce((a, b) => {
        return a + b.price * b.amount;
    }, 0);

    const t_after_disc = subTotall - subTotall * 3 / 100 + 10;

    return {
        cart_products,
        RemoveFromMyCart,
        HandelChangeAmount,
        products,
        myCartTitles,
        subTotall,
        t_after_disc,
    };
}

export default UseCart;
