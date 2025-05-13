import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../utils/Color";

const ShippingCart = () => {
    const { cart } = useSelector((state) => state.products);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <Typography
                className="font-bold mb-4"
                style={{ color: Colors.NavyBlue, fontSize: 20 }}
            >
                Your Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography
                    className="font-normal text-center"
                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                >
                    No items in cart.
                </Typography>
            ) : (
                cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 border-b last:border-b-0 py-3"
                    >
                        <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="w-16 h-16 rounded-lg bg-cover bg-center bg-no-repeat border border-gray-200"
                        />
                        <div className="flex-1 flex flex-col">
                            <Typography
                                className="font-semibold"
                                style={{ color: Colors.Black, fontSize: 15 }}
                            >
                                {item.brand}
                            </Typography>
                            <Typography
                                className="font-normal"
                                style={{ fontSize: 13, color: Colors.FooterFont }}
                            >
                                Color: {item.color}
                            </Typography>
                            <Typography
                                className="font-normal"
                                style={{ fontSize: 13, color: Colors.FooterFont }}
                            >
                                Category: {item.category}
                            </Typography>
                        </div>
                        <Typography
                            className="font-normal"
                            style={{ color: Colors.NavyBlue, fontSize: 15 }}
                        >
                            ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                    </div>
                ))
            )}
        </div>
    );
};

export default ShippingCart;
