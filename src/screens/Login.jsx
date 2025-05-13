import React from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import CopyRight from "../components/CopyRight";
import TypoLogin from "../components/TypoLogin";
import MyAccount from "../components/MyAccount";

const Login = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoLogin />
            <MyAccount />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Login;
