import React from "react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";

const OrderButton = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <button
                onClick={() => navigate('/')}
                className="px-8 py-3 mt-6 rounded bg-pink-500 hover:bg-pink-600 transition font-semibold text-white text-lg shadow"
                style={{ backgroundColor: Colors.Pink }}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderButton;
