import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";

const TrendingProductsThree = () => {

    const disptach = useDispatch();
    const navigate = useNavigate()

    const { data, loading, error } = useSelector(
        (state) => state.products.trendingProductsTwo
    );

    useEffect(() => {
        disptach(fetchProducts());
    }, [disptach]);

    return (
        <div className="h-[270px] w-[267px] flex flex-col gap-5">
            {data.map((product) => (
                <div key={product.id} className="w-full h-1/3 flex justify-between hover:bg-blue-50 hover:transition-all hover:scale-105" onClick={() =>
                    navigate(`/products/${product.id}`, { state: { product } })
                } >
                    <div className="h-full w-1/3"><img className='object-contain' src={product.image} alt={product.brand} /></div>
                    <div className="place-content-center ">
                        <Typography className="font-semibold" style={{ color: Colors.NavyBlue, fontSize: 16 }}>Executive Seat chair</Typography>
                        <Typography className="font-normal" style={{ color: Colors.NavyBlue, fontSize: 12 }}>$32.00</Typography>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingProductsThree;
