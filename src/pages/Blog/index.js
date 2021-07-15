import React from 'react';
import Header from '../../componets/common/Header';
import Footer from '../../componets/common/Footer';
import Blogscreen from '../../componets/ui/Blogscreen';


const Blog = () => {

    return (
        <>
            <Header activeMenu={'/Blog/'}  />
            <Blogscreen/>
            <Footer />
        </>
    )
}

export default Blog