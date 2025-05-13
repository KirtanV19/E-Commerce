import React from "react";
import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { addToCart, clearWishlist, removeFromWishlist } from "../redux/slices/productSlice";
import { HiX } from "react-icons/hi";

const WishList = () => {
    const { wishlist } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <Container className="py-10">
            <Typography
                className="font-bold mb-8 text-center"
                style={{ color: Colors.NavyBlue, fontSize: 32 }}
            >
                My Wishlist
            </Typography>
            {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
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
                        Your wishlist is empty. Start shopping now!
                    </Typography>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-4 px-6">
                                    <Typography
                                        className="font-bold"
                                        style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                    >
                                        Product
                                    </Typography>
                                </th>
                                <th className="py-4 px-6">
                                    <Typography
                                        className="font-bold"
                                        style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                    >
                                        Price
                                    </Typography>
                                </th>
                                <th className="py-4 px-6">
                                    <Typography
                                        className="font-bold"
                                        style={{ color: Colors.NavyBlue, fontSize: 20 }}
                                    >
                                        Actions
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-b-0 hover:bg-blue-50 transition"
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div
                                                    className="w-20 h-20 rounded-lg bg-center bg-cover bg-no-repeat border border-gray-200"
                                                    style={{ backgroundImage: `url(${item.image})` }}
                                                />
                                                <button
                                                    className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-pink-100 transition"
                                                    onClick={() =>
                                                        dispatch(removeFromWishlist({ id: item.id }))
                                                    }
                                                    aria-label="Remove"
                                                >
                                                    <HiX size={16} color={Colors.Pink} />
                                                </button>
                                            </div>
                                            <div className="flex flex-col">
                                                <Typography
                                                    className="font-semibold"
                                                    style={{ color: Colors.Black, fontSize: 16 }}
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
                                    <td className="py-4 px-6">
                                        <Typography
                                            className="font-normal"
                                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                                        >
                                            ${item.price.toFixed(2)}
                                        </Typography>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button
                                            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold shadow"
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            Add to Cart
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {wishlist.length > 0 && (
                <div className="flex justify-end mt-8">
                    <button
                        onClick={() => dispatch(clearWishlist())}
                        className="px-6 py-2 rounded bg-pink-500 hover:bg-pink-600 transition font-semibold shadow"
                        style={{ backgroundColor: Colors.Pink }}
                    >
                        <Typography
                            className="font-semibold text-white"
                            style={{ fontSize: 16 }}
                        >
                            Clear Wishlist
                        </Typography>
                    </button>
                </div>
            )}
        </Container>
    );
};

export default WishList;
