import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import { useNavigate } from "react-router";

const TopCategories = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(
        (state) => state.products.topCategories
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4, // show 4 items, move 4 items per slide
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

    const CustomDot = ({ onClick, ...rest }) => {
        const { active } = rest;
        return (
            <li
                className={`w-3 h-3 rounded-full border-2 border-pink-500 mx-1 cursor-pointer transition-all duration-300 ${active ? "bg-pink-500" : "bg-transparent"
                    }`}
                onClick={onClick}
            />
        );
    };

    return (
        <div className="mb-31">
            <Typography
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
                className="font-bold text-center mt-14"
            >
                Top Categories
            </Typography>

            <Container className="mt-14">
                {!loading && !error && (
                    <Carousel
                        responsive={responsive}
                        showDots
                        arrows={false}
                        infinite
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        customDot={<CustomDot />}
                        containerClass="carousel-container"
                        dotListClass="flex justify-center mt-6"
                        draggable={false} // prevent user from swiping
                        swipeable={false}
                    >
                        {data.map((offer, index) => (
                            <div
                                key={index}
                                className="w-[270px] h-[340px] bg-white rounded-2xl shadow-lg flex flex-col items-center transition-transform mx-auto hover:scale-105 hover:bg-blue-50 hover:transition-all"
                                onClick={() => navigate(`/products/${offer.id}`, { state: { product: offer } })}
                            >
                                <div className="h-[140px] w-[140px] flex items-center justify-center mt-6 mb-2 rounded-full bg-[#F6F7FB] shadow-sm">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col items-center px-4">
                                    <Typography
                                        className="font-semibold text-center mt-2"
                                        style={{ color: Colors.NavyBlue, fontSize: 22 }}
                                    >
                                        {offer.brand}
                                    </Typography>
                                    <Typography
                                        className="font-medium text-center mt-2"
                                        style={{ fontSize: 16, color: Colors.FooterFont }}
                                    >
                                        ${offer.price}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </Container>
        </div>
    );
};

export default TopCategories;
