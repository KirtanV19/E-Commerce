import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Container from "../utils/Container";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import _ from "lodash";
import {
    addToCart,
    addToWishlist,
    removeFromWishlist,
} from "../redux/slices/productSlice";
import { MdFavoriteBorder } from "react-icons/md";

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
    const dispatch = useDispatch();
    const { products, wishlist } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // console.log(product.category);
    console.log("Wishlist", wishlist);
    // console.log(isFavorited);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate("/cart");
    };

    const handleWishList = () => {
        const existing = wishlist.find((item) => item.id === product.id);

        if (existing) {
            dispatch(removeFromWishlist(product));
            setIsFavorited(false);
        } else {
            dispatch(addToWishlist(product));
            setIsFavorited(true);
        }
    };
    let findProducts = [];

    findProducts = _.sampleSize(
        products.filter((item) => item.category === product.category),
        3
    );

    return (
        <>
            <Container className="w-full mt-20 h-[509px] flex justify-between items-center">
                <div className="w-2/5 h-full ">
                    <img
                        src={product?.image}
                        alt={product?.brand}
                        className="bg-cover bg-center bg-no-repeat w-full h-full"
                    />
                </div>
                <div className="w-3/5 h-full flex flex-col  justify-evenly items-start">
                    <Typography
                        className="font-semibold"
                        style={{ fontSize: 36, color: Colors.NavyBlue }}
                    >
                        {product?.brand}
                    </Typography>
                    <div className="flex w-1/5 items-center justify-between">
                        <Typography
                            className="font-normal"
                            style={{ fontSize: 16, color: Colors.NavyBlue }}
                        >
                            ${product?.discount ? product?.discount : product?.price}
                        </Typography>
                        <Typography
                            className="font-normal line-through"
                            style={{ fontSize: 16, color: Colors.Pink }}
                        >
                            ${product?.price}
                        </Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography
                            className="font-semibold"
                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                        >
                            Color:{" "}
                        </Typography>
                        <Typography
                            className="font-normal"
                            style={{ fontSize: 16, color: Colors.NavyBlue }}
                        >
                            {product?.color}
                        </Typography>{" "}
                    </div>
                    <Typography
                        className="font-semibold"
                        style={{ fontSize: 16, color: Colors.FooterFont }}
                    >
                        {product?.description.length >= 150
                            ? product?.description.slice(0, 150)
                            : product?.description}
                    </Typography>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="hover:bg-blue-800 p-2 hover:text-white text-indigo-900 transition-all rounded-md"
                        >
                            Add To Cart
                        </button>
                        <button
                            onClick={handleWishList}
                            className="p-3 cursor-pointer rounded-md"
                        >
                            {isFavorited ? (
                                <MdFavoriteBorder
                                    size={20}
                                    color={Colors.White}
                                    className="transition-all"
                                    style={{ backgroundColor: Colors.NavyBlue }}
                                />
                            ) : (
                                <MdFavoriteBorder
                                    size={20}
                                    color={Colors.NavyBlue}
                                    className="transition-all"
                                />
                            )}
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <Typography
                            className="font-semibold"
                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                        >
                            Category:{" "}
                        </Typography>
                        <Typography
                            className="font-normal"
                            style={{ fontSize: 16, color: Colors.NavyBlue }}
                        >
                            {product?.category}
                        </Typography>{" "}
                    </div>
                    <div className="flex gap-2">
                        <Typography
                            className="font-semibold"
                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                        >
                            Model:{" "}
                        </Typography>
                        <Typography
                            className="font-normal"
                            style={{ fontSize: 16, color: Colors.NavyBlue }}
                        >
                            {product?.model}
                        </Typography>{" "}
                    </div>
                </div>
            </Container>
            <Container className="mt-10">
                <Typography
                    className="font-bold"
                    style={{ fontSize: 36, color: Colors.NavyBlue }}
                >
                    Related Products
                </Typography>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                    {findProducts.map((item) => (
                        <div
                            key={item.id}
                            className="w-[270px] h-[400px] hover:scale-105"
                            onClick={() =>
                                navigate(`/products/${item.id}`, { state: { product: item } })
                            }
                        >
                            <div className="w-full h-[85%]">
                                <img
                                    src={item.image}
                                    className="bg-cover bg-no-repeat bg-center"
                                />
                            </div>
                            <div className="w-full h-auto">
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.NavyBlue, fontSize: 16 }}
                                >
                                    {item.model}
                                </Typography>
                                <Typography
                                    className="font-normal"
                                    style={{ color: Colors.NavyBlue, fontSize: 13 }}
                                >
                                    ${item.price}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default ProductDetail;
