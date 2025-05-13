import { Input, Typography, Checkbox } from "@material-tailwind/react";
import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";
import ShippingCart from "./ShippingCart";

const ShippingForm = () => {
    const { cart } = useSelector(state => state.products);

    return (
        <Container className="w-full min-h-[700px] flex flex-col md:flex-row gap-8 py-8">
            <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-8">
                <Typography
                    className="font-bold mb-4"
                    style={{ fontSize: 22, color: Colors.NavyBlue }}
                >
                    Contact Information
                </Typography>
                <Input
                    variant="static"
                    color="indigo"
                    placeholder="Email or mobile phone number"
                    className="mb-4"
                />
                <div className="flex items-center mb-6">
                    <Checkbox color="green" className="w-4 h-4" />
                    <Typography
                        className="font-medium ml-2"
                        style={{ fontSize: 13, color: Colors.FooterFont }}
                    >
                        Keep me up to date on news and exclusive offers
                    </Typography>
                </div>
                <Typography
                    className="font-bold mb-4"
                    style={{ fontSize: 22, color: Colors.NavyBlue }}
                >
                    Shipping Address
                </Typography>
                <div className="flex gap-4 mb-4">
                    <Input
                        placeholder="First name (optional)"
                        variant="static"
                        color="indigo"
                        className="w-1/2"
                    />
                    <Input
                        placeholder="Last Name"
                        variant="static"
                        color="indigo"
                        className="w-1/2"
                    />
                </div>
                <Input
                    placeholder="Address"
                    variant="static"
                    color="indigo"
                    className="mb-4"
                />
                <Input
                    placeholder="Apartment, suite, etc. (optional)"
                    variant="static"
                    color="indigo"
                    className="mb-4"
                />
                <Input
                    placeholder="City"
                    variant="static"
                    color="indigo"
                    className="mb-4"
                />
                <div className="flex gap-4 mb-4">
                    <Input
                        placeholder="Country"
                        variant="static"
                        color="indigo"
                        className="w-1/2"
                    />
                    <Input
                        placeholder="Postal Code"
                        variant="static"
                        color="indigo"
                        className="w-1/2"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-6">
                <ShippingCart />
                <CartTotals />
            </div>
        </Container>
    );
};

export default ShippingForm;
