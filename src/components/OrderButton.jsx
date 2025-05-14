import React from "react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { clearCart } from "../redux/slices/productSlice";

const OrderButton = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(clearCart())
        navigate('/')
    }
    return (
        <div className="flex justify-center">
            <button
                onClick={handleClick}
                className="px-8 py-3 mt-6 rounded bg-pink-500 hover:bg-pink-600 transition font-semibold text-white text-lg shadow"
                style={{ backgroundColor: Colors.Pink }}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderButton;
