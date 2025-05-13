import React from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import CopyRight from "../components/CopyRight";
import TypoCart from "../components/TypoCart";
import Cart from "../components/Cart";

const ShoppingCart = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoCart />
            <Cart />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default ShoppingCart;
