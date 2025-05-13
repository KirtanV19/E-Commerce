import React from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import CopyRight from "../components/CopyRight";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import ShippingForm from "../components/ShippingForm";
const ShippingDetails = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Container className="mt-10">
                <Typography
                    className="font-bold"
                    style={{ color: Colors.NavyBlue, fontSize: 36 }}
                >
                    Hekto Demo
                </Typography>
            </Container>
            <ShippingForm />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default ShippingDetails;
