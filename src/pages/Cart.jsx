import React from "react";

import { Header, Footer } from '../components/index';

function Cart() {
    return(
        <div className="cartContent">
            <Header/>
            <h1>Корзина</h1>
            <Footer/>
        </div>
    );
}

export default Cart;