import React from 'react'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import CopyRight from '../components/CopyRight'
import Order from '../components/Order'
import OrderButton from '../components/OrderButton'
import TypoOrder from '../components/TypoOrder'

const CompletedOrder = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoOrder />
            <Order />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default CompletedOrder;