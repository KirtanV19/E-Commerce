import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";

const TrendingProductsOne = () => {

    const disptach = useDispatch();
    const navigate = useNavigate()
    const { data, loading, error } = useSelector(
        (state) => state.products.trendingProducts
    );

    useEffect(() => {
        disptach(fetchProducts());
    }, [disptach]);

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-7 justify-center">
            {data.map((product) => (
                <div
                    key={product.id}
                    className="w-[270px] h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:bg-blue-50 hover:transition-all"
                    onClick={() =>
                        navigate(`/products/${product.id}`, { state: { product } })
                    }
                >
                    <div className="h-[140px] w-[140px] flex items-center justify-center mt-6 mb-2 rounded-full bg-[#F6F7FB] shadow-sm">
                        <img
                            src={product.image}
                            alt={product.model}
                            className="w-20 h-20 object-contain"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center px-4">
                        <Typography
                            className="font-semibold text-center mt-2"
                            style={{ color: Colors.NavyBlue, fontSize: 22 }}
                        >
                            {product.model}
                        </Typography>
                        <Typography
                            className="font-medium text-center mt-2"
                            style={{ fontSize: 16, color: Colors.FooterFont }}
                        >
                            ${product.price}
                        </Typography>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingProductsOne;
