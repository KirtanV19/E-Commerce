import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";

const TrendingProductsTwo = () => {

    const disptach = useDispatch();
    const navigate = useNavigate()

    const { data, loading, error } = useSelector(
        (state) => state.products.trendingProductsOne
    );

    useEffect(() => {
        disptach(fetchProducts());
    }, [disptach]);

    return (
        <div className="flex gap-4">
            {data.map((product) => (
                <div key={product.id} className="w-[420px] h-[270px] flex flex-col shadow-lg hover:scale-105 hover:bg-blue-50 hover:transition-all" onClick={() =>
                    navigate(`/products/${product.id}`, { state: { product } })
                }>
                    <Typography
                        className="font-semibold"
                        style={{ color: Colors.NavyBlue, fontSize: 26 }}
                    >
                        23% off in all products
                    </Typography>
                    <Typography
                        className="font-semibold hover:underline hover:cursor-pointer"
                        style={{ color: Colors.Pink, fontSize: 16 }}
                    >
                        Shop Now
                    </Typography>
                    <div className="h-1/2 w-2/5 place-self-end">
                        <img src={product.image} className="object-contain" alt={product.brand} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingProductsTwo;
