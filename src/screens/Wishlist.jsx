import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import CopyRight from '../components/CopyRight'
import TypoWatchList from '../components/TypoWatchList'
import WishList from '../components/Wishlist'

const Wishlist = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoWatchList />
            <WishList />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Wishlist