import React from "react";
import { Colors } from "../utils/Color";
import { Typography, Checkbox } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CartTotals = () => {
    const { cart } = useSelector((state) => state.products);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const navigate = useNavigate();
    const handleCheckOut = () => {
        if (cart.length === 0) {
            alert("Your cart is empty");
            navigate("/");
        } else {
            navigate("/order");
        }
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Typography
                className="font-bold mb-4"
                style={{ color: Colors.NavyBlue, fontSize: 20 }}
            >
                Cart Totals
            </Typography>
            <div className="p-4 bg-gray-100 rounded-md">
                <div className="mb-4">
                    <Typography className="font-semibold text-lg text-indigo-800">
                        Subtotals: ${totalPrice.toFixed(2)}
                    </Typography>
                </div>
                <div className="flex items-center mb-4">
                    <Checkbox color="green" className="w-4 h-4" />
                    <Typography
                        className="font-medium ml-2"
                        style={{ fontSize: 12, color: Colors.FooterFont }}
                    >
                        Keep me up to date on news and exclusive offers
                    </Typography>
                </div>
                <button
                    className="w-full p-3 rounded-sm bg-green-500 hover:bg-green-600 transition"
                    onClick={handleCheckOut}
                >
                    <Typography className="font-bold text-sm text-white">
                        Proceed To Checkout
                    </Typography>
                </button>
            </div>
        </div>
    );
};

export default CartTotals;
