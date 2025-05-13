import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import TrendingProductsOne from "./TrendingProductsOne";
import TrendingProductsTwo from "./TrendingProductsTwo";
import TrendingProductsThree from "./TrendingProductsThree";

const TrendingProducts = () => {
    return (
        <div className="mt-32">
            <Typography
                className="font-bold text-center"
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
            >
                Trending Products
            </Typography>
            <Container className="mt-10">
                <TrendingProductsOne />
                <div className="mt-10 flex gap-6">
                    <TrendingProductsTwo />
                    <TrendingProductsThree />
                </div>
            </Container>
        </div>
    );
};

export default TrendingProducts;
