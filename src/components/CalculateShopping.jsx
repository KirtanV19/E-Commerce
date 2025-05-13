import React from "react";
import { Typography, Input } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/productSlice";

const CalculateShopping = () => {

    const { cart } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleShipping = () => {
        if (cart.length === 0) {
            alert("Your cart is empty, first please buy something");
            navigate("/");
        } else {
            navigate("/shipping");

        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Typography
                className="font-bold mb-4"
                style={{ color: Colors.NavyBlue, fontSize: 20 }}
            >
                Calculate Shipping
            </Typography>
            <div className="mt-4 flex flex-col gap-4 bg-gray-100 p-4 rounded-md">
                <Input
                    placeholder="Country"
                    variant="static"
                    type="text"
                    color="indigo"
                    size="md"
                    className="mb-2"
                />
                <Input
                    placeholder="City"
                    variant="static"
                    type="text"
                    color="indigo"
                    size="md"
                    className="mb-2"
                />
                <Input
                    placeholder="Postal Code"
                    type="tel"
                    variant="static"
                    color="indigo"
                    size="md"
                    className="mb-2"
                />
                <button
                    className="w-full p-3 mt-3 rounded-sm transition bg-pink-500 hover:bg-pink-600"
                    style={{ backgroundColor: Colors.Pink }}
                    onClick={handleShipping}
                >
                    <Typography className="font-bold text-sm text-white">
                        Calculate Shipping
                    </Typography>
                </button>
            </div>
        </div>
    );
};

export default CalculateShopping;
