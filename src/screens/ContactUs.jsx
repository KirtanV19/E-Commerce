import React from 'react'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import CopyRight from '../components/CopyRight'
import TypoContact from '../components/TypoContact'
import ContactUS from '../components/ContactUS'

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <TypoContact />
            <ContactUS />
            <Advertisement />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default ContactUs