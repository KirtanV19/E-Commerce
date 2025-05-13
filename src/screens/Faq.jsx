import React from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import CopyRight from "../components/CopyRight";
import FAQ from "../components/FAQ";
import TypoFq from "../components/TypoFq";

const Faq = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoFq />
            <FAQ />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Faq;

