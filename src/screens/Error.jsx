import React from 'react'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import CopyRight from '../components/CopyRight'
import TypoError from '../components/TypoError'
import NotFound from '../components/NotFound'

const Error = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoError />
            <NotFound />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Error