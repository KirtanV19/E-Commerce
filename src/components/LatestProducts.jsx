import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import { fetchProducts } from "../redux/slices/productSlice";
import { Typography, Tabs, Tab } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const LatestProducts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { newArrival, bestSeller, featured, specialOffer } = useSelector(
        (state) => state.products
    );

    const [activeTab, setActiveTab] = useState(0);

    const renderProductGrid = (products) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="bg-white border rounded-lg shadow-md flex flex-col overflow-hidden transition-transform hover:scale-105 hover:bg-blue-50 hover:transition-all"
                    onClick={() =>
                        navigate(`/products/${product.id}`, { state: { product } })
                    }
                >
                    <div className="h-48 flex items-center justify-center bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-contain h-40"
                        />
                    </div>
                    <div className="p-4 flex flex-1 justify-between">
                        <Typography
                            className="font-semibold mb-2"
                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                        >
                            {product.brand}
                        </Typography>

                        <div className="flex items-center space-x-2 mt-auto">
                            <Typography
                                className="font-bold"
                                style={{ color: Colors.NavyBlue, fontSize: 16 }}
                            >
                                ${product.discount ? product.discount : product.price}
                            </Typography>

                            <Typography
                                className="line-through"
                                style={{ color: Colors.Pink, fontSize: 14 }}
                            >
                                ${product.price}
                            </Typography>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <Typography
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
                className="font-bold text-center mt-14"
            >
                Latest Products
            </Typography>
            <Container className="mt-5">
                <Tabs value={activeTab}>
                    <div className="flex space-x-4 border-b border-gray-200">
                        <Tab
                            value={0}
                            onClick={() => setActiveTab(0)}
                            className={`px-4 py-2 transition-colors ${activeTab === 0
                                ? "text-pink-500 border-b-2 border-pink-500 font-bold"
                                : "text-gray-700"
                                }`}
                        >
                            New Arrival
                        </Tab>
                        <Tab
                            value={1}
                            onClick={() => setActiveTab(1)}
                            className={`px-4 py-2 transition-colors ${activeTab === 1
                                ? "text-pink-500 border-b-2 border-pink-500 font-bold"
                                : "text-gray-700"
                                }`}
                        >
                            Best Seller
                        </Tab>
                        <Tab
                            value={2}
                            onClick={() => setActiveTab(2)}
                            className={`px-4 py-2 transition-colors ${activeTab === 2
                                ? "text-pink-500 border-b-2 border-pink-500 font-bold"
                                : "text-gray-700"
                                }`}
                        >
                            Featured
                        </Tab>
                        <Tab
                            value={3}
                            onClick={() => setActiveTab(3)}
                            className={`px-4 py-2 transition-colors ${activeTab === 3
                                ? "text-pink-500 border-b-2 border-pink-500 font-bold"
                                : "text-gray-700"
                                }`}
                        >
                            Special Offer
                        </Tab>
                    </div>
                    <div className="mt-6">
                        {activeTab === 0 && renderProductGrid(newArrival)}
                        {activeTab === 1 && renderProductGrid(bestSeller)}
                        {activeTab === 2 && renderProductGrid(featured)}
                        {activeTab === 3 && renderProductGrid(specialOffer)}
                    </div>
                </Tabs>
            </Container>
        </div>
    );
};

export default LatestProducts;
