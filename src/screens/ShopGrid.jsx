import Navbar from '../components/Navbar'
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import CopyRight from "../components/CopyRight";
import Advertisement from "../components/Advertisement";
import TypoShop from '../components/TypoShop';
import Shop from '../components/Shop';

const ShopGrid = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoShop />
            <Shop />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default ShopGrid;