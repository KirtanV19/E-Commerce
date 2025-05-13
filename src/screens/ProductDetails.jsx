import React from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import CopyRight from "../components/CopyRight";
import TypoDetails from "../components/TypoDetails";
import ProductDetail from "../components/ProductDetail";

const ProductDetails = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoDetails />
            <ProductDetail />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default ProductDetails;
