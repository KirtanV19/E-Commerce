/*
flow:-  Shop.jsx -> ProductDetail.jsx -> Cart.jsx

user click on the item from the any list,
it navigates to 'Product details' page,
where user can see add To cart button,
by clicking that - toast is popup,
and directs to cart,
where user can increase or decrease the quantity and based on that price and items displayed,

and then below flow works */

/*
flex: - shopping cart and cart totals || 2 components,
directs to shipping page,
flex: - shippin details form and  shoppimg cart + cart toatals || 2 components,
direct to order completed screen,
*/

import { Colors } from "../utils/Color";
import { IconButton, Button, Typography } from "@material-tailwind/react";
import Container from "../utils/Container";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    increment,
    decrement,
    clearCart,
} from "../redux/slices/productSlice";
import { HiX } from "react-icons/hi";
import CalculateShopping from "./CalculateShopping";
import CartTotals from "./CartTotals";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.products);

    return (
        <Container className="flex flex-col md:flex-row gap-8 items-start py-8">
            <Container className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6 min-h-[350px]">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full py-16">
                        <Typography
                            className="font-bold mb-2"
                            style={{ color: Colors.NavyBlue, fontSize: 24 }}
                        >
                            No Items Added
                        </Typography>
                        <Typography
                            className="font-normal"
                            style={{ color: Colors.FooterFont, fontSize: 16 }}
                        >
                            Your cart is empty. Start shopping now!
                        </Typography>
                    </div>
                ) : (
                    <>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="pb-4">
                                        <Typography
                                            className="font-bold"
                                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                        >
                                            Product
                                        </Typography>
                                    </th>
                                    <th className="pb-4">
                                        <Typography
                                            className="font-bold"
                                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                        >
                                            Price
                                        </Typography>
                                    </th>
                                    <th className="pb-4">
                                        <Typography
                                            className="font-bold"
                                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                        >
                                            Quantity
                                        </Typography>
                                    </th>
                                    <th className="pb-4">
                                        <Typography
                                            className="font-bold"
                                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                        >
                                            Total
                                        </Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b last:border-b-0 hover:bg-gray-50 transition"
                                    >
                                        <td className="py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div
                                                        className="w-20 h-20 rounded-lg bg-center bg-cover bg-no-repeat border border-gray-200"
                                                        style={{ backgroundImage: `url(${item.image})` }}
                                                    />
                                                    <button
                                                        className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-100 transition"
                                                        onClick={() =>
                                                            dispatch(removeFromCart({ id: item.id }))
                                                        }
                                                        aria-label="Remove"
                                                    >
                                                        <HiX size={16} color="black" />
                                                    </button>
                                                </div>
                                                <div className="flex flex-col">
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
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <Typography
                                                className="font-normal"
                                                style={{ color: Colors.NavyBlue, fontSize: 15 }}
                                            >
                                                ${item.price.toFixed(2)}
                                            </Typography>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="sm"
                                                    className="rounded-full px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                                    onClick={() => dispatch(decrement({ id: item.id }))}
                                                >
                                                    -
                                                </Button>
                                                <span className="mx-2 text-base font-medium">
                                                    {item.quantity}
                                                </span>
                                                <Button
                                                    size="sm"
                                                    className="rounded-full px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                                    onClick={() => dispatch(increment({ id: item.id }))}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <Typography
                                                className="font-normal"
                                                style={{ color: Colors.NavyBlue, fontSize: 15 }}
                                            >
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="p-2 rounded-sm mt-6 w-full bg-pink-500 hover:bg-pink-600 transition"
                            style={{ backgroundColor: Colors.Pink }}
                        >
                            <Typography
                                className="font-semibold text-white"
                                style={{ fontSize: 16 }}
                            >
                                Clear Cart
                            </Typography>
                        </button>
                    </>
                )}
            </Container>
            <Container className="flex flex-col w-full md:w-1/3 gap-6">
                <CartTotals />
                <CalculateShopping />
            </Container>
        </Container>
    );
};

export default Cart;
