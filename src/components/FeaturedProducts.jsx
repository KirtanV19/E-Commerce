import { Typography } from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { useNavigate } from "react-router";

const FeaturedProducts = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(
        (state) => state.products.featuredProducts
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4, // show 4 items per slide
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="mt-32">
            <Typography
                className="font-bold text-center"
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
            >
                Featured Products
            </Typography>
            <Container className="mt-12">
                {!loading && !error && (
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        arrows={false}
                        infinite
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        containerClass="carousel-container"
                        draggable={true}
                        swipeable={true}
                        transitionTime={500}
                        className="w-full"
                    >
                        {data.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 mx-2 transition-transform hover:scale-105 hover:bg-blue-50 hover:transition-all"
                                onClick={() =>
                                    navigate(`/products/${product.id}`, { state: { product } })
                                }
                            >
                                <div className="w-full aspect-[4/3] flex items-center justify-center mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.brand}
                                        className="object-contain h-32"
                                    />
                                </div>
                                <Typography
                                    className="text-center text-lg font-bold"
                                    style={{ color: Colors.Pink }}
                                >
                                    {product.brand}
                                </Typography>
                                <Typography
                                    className="mt-1 font-normal text-sm text-center"
                                    style={{ color: Colors.NavyBlue }}
                                >
                                    ${product.price}
                                </Typography>
                            </div>
                        ))}
                    </Carousel>
                )}
            </Container>
        </div>
    );
};

export default FeaturedProducts;
