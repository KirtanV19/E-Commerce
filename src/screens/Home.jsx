import Advertisement from "../components/Advertisement";
import CopyRight from "../components/CopyRight";
import DiscountItem from "../components/DiscountItem";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestBlog from "../components/LatestBlog";
import LatestProducts from "../components/LatestProducts";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Searchbar from "../components/Searchbar";
import Shopex from "../components/Shopex";
import TopCategories from "../components/TopCategories";
import TrendingProducts from "../components/TrendingProducts";
import UniqueBackground from "../components/UniqueBackground";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Hero />
            <FeaturedProducts />
            <LatestProducts />
            <TrendingProducts />
            <Shopex />
            <UniqueBackground />
            <DiscountItem />
            <TopCategories />
            <Newsletter />
            <Advertisement />
            <LatestBlog />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Home;
